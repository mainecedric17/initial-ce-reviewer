const homeSection =
document.getElementById("homeSection");

const subjectsSection =
document.getElementById("subjectsSection");

const quizSection =
document.getElementById("quizSection");



const subjectsContainer =
document.getElementById("subjectsContainer");


const questionText =
document.getElementById("questionText");


const choicesContainer =
document.getElementById("choicesContainer");


const questionNumber =
document.getElementById("questionNumber");


const subjectTitle =
document.getElementById("subjectTitle");


const progressBar =
document.getElementById("progressBar");


const nextBtn =
document.getElementById("nextBtn");


const resultText =
document.getElementById("resultText");


const restartBtn =
document.getElementById("restartBtn");





const subjects = {


Mathematics:[

{
question:"What is 5 + 5?",
choices:["8","10","12","15"],
answer:"10"
},

{
question:"What is the value of pi approximately?",
choices:["2.14","3.14","4.14","5.14"],
answer:"3.14"
}

],




Structural:[

{
question:"What material is commonly used in reinforced concrete?",
choices:["Wood","Steel","Plastic","Glass"],
answer:"Steel"
},

{
question:"A beam primarily resists what?",
choices:["Bending","Painting","Cooling","Lighting"],
answer:"Bending"
}

],




Hydraulics:[

{
question:"Water pressure increases with?",
choices:["Depth","Height","Temperature","Color"],
answer:"Depth"
}

]


};






let selectedSubject="";

let questions=[];

let currentQuestion=0;

let score=0;

let selectedAnswer=null;







function displaySubjects(){


Object.keys(subjects).forEach(subject=>{


let card=document.createElement("div");

card.classList.add("subject-card");



card.innerHTML=`

<h3>${subject}</h3>

<p>
Practice ${subject} questions.
</p>

<button class="review-button">
Start Quiz →
</button>

`;



card.querySelector("button")
.onclick=()=>{

startQuiz(subject);

};



subjectsContainer.appendChild(card);


});


}



displaySubjects();







function startQuiz(subject){


selectedSubject=subject;

questions=subjects[subject];


currentQuestion=0;

score=0;


homeSection.classList.add("hidden");

subjectsSection.classList.add("hidden");

quizSection.classList.remove("hidden");


subjectTitle.textContent=
subject;


nextBtn.style.display="block";

restartBtn.classList.add("hidden");


showQuestion();


}






function showQuestion(){


let question=questions[currentQuestion];


questionNumber.textContent=

`Question ${currentQuestion+1} of ${questions.length}`;



progressBar.style.width=

`${((currentQuestion)/questions.length)*100}%`;



questionText.textContent=
question.question;



choicesContainer.innerHTML="";


selectedAnswer=null;




question.choices.forEach(choice=>{


let button=document.createElement("button");


button.textContent=choice;


button.classList.add("choice-button");



button.onclick=()=>{


selectedAnswer=choice;


document
.querySelectorAll(".choice-button")
.forEach(btn=>
btn.classList.remove("selected")
);


button.classList.add("selected");


};



choicesContainer.appendChild(button);


});


}






nextBtn.onclick=()=>{


if(!selectedAnswer){

alert("Select an answer");

return;

}



if(selectedAnswer===questions[currentQuestion].answer){

score++;

}



currentQuestion++;



if(currentQuestion < questions.length){

showQuestion();

}

else{

finishQuiz();

}


};






function finishQuiz(){


questionText.textContent="Quiz Finished";


choicesContainer.innerHTML="";


nextBtn.style.display="none";


progressBar.style.width="100%";


resultText.textContent=

`Score: ${score}/${questions.length}`;


restartBtn.classList.remove("hidden");


}






restartBtn.onclick=()=>{

startQuiz(selectedSubject);

};






document.getElementById("homeBtn").onclick=()=>{


homeSection.classList.remove("hidden");

subjectsSection.classList.add("hidden");

quizSection.classList.add("hidden");


};



document.getElementById("subjectsBtn").onclick=()=>{


homeSection.classList.add("hidden");

subjectsSection.classList.remove("hidden");

quizSection.classList.add("hidden");


};



document.getElementById("startBtn").onclick=()=>{


homeSection.classList.add("hidden");

subjectsSection.classList.remove("hidden");


};