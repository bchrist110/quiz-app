'use strict'

const store = {
  questions: [
    {
      question: "What was Tandem previous name?",
      answers: ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
      correctAnswer: "Devmynd"
    },
    {
      question: "In Shakespeare's play Julius Caesar, Caesar's last words were...",
      answers: ["Iacta alea est!", "Vidi, vini, vici", "Et tu, Brute?", "Aegri somnia vana"],
      correctAnswer: "Et tu, Brute?"
    },
    {
      question: "A group of tigers are referred to as:",
      answers: ["Chowder", "Pride", "Destruction", "Ambush"],
      correctAnswer: "Ambush"
    },
    {
      question: "What is the top speed an average cat can travel?",
      answers: ["31 mph", "42 mph", "13 mph", "9 mph"],
      correctAnswer: "31 mph"
    },
    {
      question: "A cat can jump to _____ times its own height:",
      answers: ["3", "9", "7", "5"],
      correctAnswer: "5"
    },
    {
      question: "What is the only letter that doesn't appear in a US state name?",
      answers: ["M", "Z", "X", "Q"],
      correctAnswer: "Q"
    },
    {
      question: "What is the name for a cow-bison hybrid?",
      answers: ["Cowson", "Bicow", "Beefalo", "Mooson"],
      correctAnswer: "Beefalo"
    },
    {
      question: "What is the largest freshwater lake in the world?",
      answers: ["Lake Baikal", "Lake Superior", "Lake Michigan", "Lake Victoria"],
      correctAnswer: "Lake Superior"
    },

    {
      question: "In a website address bar, what does WWW stand for?",
      answers: ["Wild Wild West", "War World Web", "World Wide Web", "What What WHAT"],
      correctAnswer: "World Wide Web"
    },
    {
      question: "In a game of bingo, what number is represented by the name two little ducks?",
      answers: ["20", "22", "55", "77"],
      correctAnswer: "22"
    },
    {
      question: "According to Greek mythology, who was the first woman on Earth?",
      answers: ["Pandora", "Lilith", "Eve", "Hera"],
      correctAnswer: "Pandora"
    },
    {
      question: "In which European city would you find Orly airport?",
      answers: ["London", "Belgium", "Munich", "Paris"],
      correctAnswer: "Paris"
    },
    {
      question: "Where would you find the Sea of Tranquility?",
      answers: ["California", "Siberia", "China", "The Moon"],
      correctAnswer: "The Moon"
    },
    {
      question: "Which artist painted 'Girl with a Pearl Earrin'?",
      answers: ["Van Gogh", "Picasso", "Vermeer", "Da Vinci"],
      correctAnswer: "Vermeer"
    },
    {
      question: "What is the official name for the 'hashtag' symbol?",
      answers: ["Octothorpe", "Number sign", "Hash Sign", "Pound"],
      correctAnswer: "Octothorpe"
    },
    {
      question: "Not American at all, where is apple pie from?",
      answers: ["Japan", "Ethiopia", "England", "Canada"],
      correctAnswer: "England"
    },
    {
      question: "What is the national animal of Scotland?",
      answers: ["Bear", "Rabbit", "Seal", "Unicorn"],
      correctAnswer: "Unicorn"
    },
    {
      question: "Where in the world is the only place where Canada is *due south*",
      answers: ["Detroit", "Alaska", "Russia", "Washington"],
      correctAnswer: "Detroit"
    },
    {
      question: "Approximately how many grapes go into a bottle of wine?",
      answers: ["500", "200", "700", "1000"],
      correctAnswer: "700"
    },
    {
      question: "How much does a US One Dollar Bill cost to make?",
      answers: ["$0.25", "$1", "$5", "$0.05"],
      correctAnswer: "$0.05"
    },
    {
      question: "The Vatican bank has the only ATM in the world that allows users to do what?",
      answers: [
        "Receive withdrawls in rosary beads",
        "Perform transactions in Latin",
        "Vote for the Pope",
        "Purchase indulgences"
        
      ],
      correctAnswer: "Perform transactions in Latin"
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}




function renderStartPageMain(){
  return `
    <div id="startpage">
      
      <h2>Score 15 of 21 to win!</h2>
      <button id="start">START</button>
    </div>
  `;
}

function renderStartPageHeader() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
      <p id="hide">Question: ${store['questionNumber']}/21</p>
      <p id="hide">Score: ${store['score']}</p>
  `;
}

function renderStartPageReset() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
  `
}

function renderEndPageHeader() {
  return `
    <h1>The "Can You Trivia?" Quiz</h1>
  `;
}

function renderCorrectAnswer() {
  return `
    <div class="hider">
      <h3>Nice! You got it right! </h3>
      <button id="next" class="next">Next</button>
    </div>
  `;
}

function renderIncorrectAnswer() {
  return `
    <div class="hider">
      <h3>Wrong! The correct answer was: ${store['questions'][(store['questionNumber'] - 1)]['correctAnswer']} </h3>
      <button id="next" class="next">Next</button>
    </div>
  `;
}

function renderModel(){
  if(store['quizStarted'] === false){
    $('main').html(renderStartPageMain);
  }
}

function headerPage() {
  if (store['questionNumber'] == 22) {
    $('header').html(renderEndPageHeader);
  }
  else {
    $('header').html(renderStartPageHeader);
  }
}

function newHeaderPage() {
  $('header').html(renderStartPageReset);
}
function renderQuestion() {
  if (store['questionNumber'] <=21) {
    return `
      <form class="hider">
        <h2>${store['questions'][(store['questionNumber'] - 1)]['question']}</h2>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][0]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][0]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][1]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][1]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][2]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][2]}</label><br>
          <label><input name="question${store['questionNumber']}" type="radio" value="${store['questions'][(store['questionNumber'] - 1)]['answers'][3]}">
            ${store['questions'][(store['questionNumber'] - 1)]['answers'][3]}</label><br>
      </form>
      <button id="submit">Submit</button>
  `;
  }
}


function runQ1() {
  if (store['question'] == 22){
  }
  else {
    $('main').html(renderQuestion);
    $( ".hider" ).slideToggle( 1500 );
    selectAnswer();
  }
}

function endScreenWin() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/21. You did it!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function endScreenLose() {
  return `
  <div id="endpage">
    <h1>You scored ${store['score']}/21. Try Again!</h1>
    <input type="reset" id="reset"></input>
  </div>
  `
}

function selectAnswer() {
  $('#submit').hover(function(event) {
    $( "#submit" ).animate({
      width: "90%",
      opacity: 0.6,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  }, function(event) {
    $( "#submit" ).animate({
      width: "90%",
      opacity: 0.7,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 300 );
  })
  $('#submit').click(function(event){
    var radioValue = $("input:checked").val()
      if (radioValue){
        if (radioValue !== store['questions'][(store['questionNumber'] - 1)]['correctAnswer']) {
          $("main").html(renderIncorrectAnswer)
          $( ".hider" ).slideDown( 1500 );
          headerPage();
        }  
        if (radioValue === store['questions'][(store['questionNumber'] - 1)]['correctAnswer']) {
          $("main").html(renderCorrectAnswer);
          $( ".hider" ).slideDown( 1500 );
          store['score'] += 1;
          headerPage();
        }
        if (store['questionNumber'] <= 21){
          store['questionNumber'] += 1
        }
        if (store['questionNumber'] == 22) {
          if (store['score'] > 2){
            $('main').html(endScreenWin)
          }
          else {
            $('main').html(endScreenLose)
          }
        }
        $('#next').click(function(event){
          runQ1()
        })
        resetAll();
      }
  })
}

function startQuiz() {
  $('#start').hover(function(event) {
    $( "#start" ).animate({
      width: "90%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  })
  $('#start').click(function(event) {
    $('#startpage').hide();
    store['quizStarted'] = true;
    store['questionNumber'] += 1;
    headerPage()
    runQ1()
  });
}


function resetAll() {
  if (store['questionNumber'] == 22) {
    $("#reset").click(function(event) {
      $('#endpage').hide();
      $('#startpage').show();
      store['questionNumber'] = 0
      store['score'] = 0
      store['quizStarted'] = false
      newHeaderPage()
      renderModel();
      startQuiz();
    })
  }
}

function main(){
  newHeaderPage()
  renderModel();
  startQuiz();
  resetAll();
}

$(main);