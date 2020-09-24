/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'Where is the Eiffel Tower',
      answers: [
        'Right next to me',
        'The North Pole',
        'The South Pole',
        'Paris'
      ],
      correctAnswer: 'Paris'
    },
    {
      question: 'How many inches are in a foot?',
      answers: [
        '12',
        '2097',
        '4',
        '15'
      ],
      correctAnswer: '12'
    },
    {
      question: 'What is yellow?',
      answers: [
        'A year',
        'A color',
        'An animal',s
        'A molecule'
      ],
      correctAnswer: 'A color'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function renderStartPage(){
  return `
    <div class="introView">
      <h2>Score 3 of 5 to win!</h2>
      <button id="start">START</button>
    </div>
  `;
}



renderStartPage();

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)