(function(){
	function buildQuiz(){

	  const output = [];
  
	  myQuestions.forEach(
		(currentQuestion, questionNumber) => {
  

		  const answers = [];
  
		  for(letter in currentQuestion.answers){
  
			answers.push(
			  `<label>
				<input type="radio" name="question${questionNumber}" value="${letter}">
				${letter} :
				${currentQuestion.answers[letter]}
			  </label>`
			);
		  }
  
		  output.push(
			`<div class="question"> ${currentQuestion.question} </div>
			<div class="answers"> ${answers.join('')} </div>`
		  );
		}
	  );
  
	  quizContainer.innerHTML = output.join('');
	}
  
	function showResults(){
  
	  const answerContainers = quizContainer.querySelectorAll('.answers');
  
	  let numCorrect = 0;
  
	  myQuestions.forEach( (currentQuestion, questionNumber) => {
  

		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  

		if(userAnswer === currentQuestion.correctAnswer){
		  numCorrect++;
  
		  answerContainers[questionNumber].style.color = 'green';
		}
		else{
		  answerContainers[questionNumber].style.color = 'red';
		}
	  });
  
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	const quizContainer = document.getElementById('quiz');
	const resultsContainer = document.getElementById('results');
	const submitButton = document.getElementById('submit');
	const myQuestions = [
	  {
		question: "What is the first sound?", 
		answers: {
		  a: "Goat",
		  b: "Pig",
		  c: "Sheep"
		},
		correctAnswer: "c"
	  },
	  {
		question: "What is the second sound?",
		answers: {
		  a: "Chicken",
		  b: "Dog",
		  c: "Horse"
		},
		correctAnswer: "a"
	  },
	  {
		question: "What is the third sound?",
		answers: {
		  a: "Goat",
		  b: "Cow",
		  c: "Donkey"
		},
		correctAnswer: "b"
	  },
	  {
		question: "What is the fourth sound?",
		answers: {
		  a: "Dog",
		  b:"Goat",
		  c: "Horse"
		},
		correctAnswer: "a"
	  },
	  {
		question: "What is the fifth sound?",
		answers: {
		  a: "Cow",
		  b: "Goat",
		  c: "Sheep"
		},
		correctAnswer: "b"
	  },
	  {
		question: "What is the sixth sound?",
		answers: {
		  a: "Horse",
		  b: "Cow",
		  c: "Donkey"
		},
		correctAnswer: "c"
	  },
	  {
		question: "What is the seventh sound?",
		answers: {
		  a: "Sheep",
		  b: "Horse",
		  c: "Dog"
		},
		correctAnswer: "b"
	  },
	  {
		question: "What is the eigth sound?",
		answers: {
		  a: "Donkey",
		  b: "Pig",
		  c: "Chicken"
		},
		correctAnswer: "b"
	  }
	];
  
	buildQuiz();
  
	submitButton.addEventListener('click', showResults);
  })();