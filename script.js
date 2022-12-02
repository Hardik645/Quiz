const data = [
    {
        question: "What is the most used programming language in 2019?",
        option: ["Java", "C", "JavaScript", "Python"],
        answer: "option3"
    },
    {
        question: "Who is the President of US?",
        option: ["ram", "sham", "me", "Joe Biden"],
        answer: "option4"
    },
    {
        question: "What does HTML stand for?",
        option: ["Html", "HHtml", "HyperTextMarkupLanguage", "Python"],
        answer: "option3"
    },
    {
        question: "What year was JavaScript launched?",
        option: ["aaj", "kal", "abhi", "1995"],
        answer: "option4"
    },
]
const q = document.getElementById('ques');
const o1 = document.getElementById('op1');
const o2 = document.getElementById('op2');
const o3 = document.getElementById('op3');
const o4 = document.getElementById('op4');
const subbtn = document.getElementById('submit');
const rstbtn=document.getElementById('reset');

let i = 0;
let score = 0;
function callFunction() {
    document.getElementById('main').style.display = "block";
    document.getElementById('result').style.display = "none";
    q.innerHTML = data[i].question;
    o1.innerHTML = data[i].option[0];
    o2.innerHTML = data[i].option[1];
    o3.innerHTML = data[i].option[2];
    o4.innerHTML = data[i].option[3];
}
callFunction();
subbtn.addEventListener('click', () => {
    resultFunction(i);
    i++;
    console.log(i);
    if (i < data.length) {
        document.getElementById('submit').innerText = "Submit";
        callFunction();
    }
    else
        returnFunction();
    
})
rstbtn.addEventListener('click', () => {
    i = 0;
    score = 0;
    document.getElementById('submit').style.display="block";
    document.getElementById('reset').style.display = "none";
    callFunction();
})
function returnFunction() {
    document.getElementById('main').style.display = "none";
    document.getElementById('result').style.display = "flex";
    document.getElementById('result').innerHTML = `You answered correctly at ${score}/4 questions.`;
    document.getElementById('submit').style.display="none";
    document.getElementById('reset').style.display = "block";
}

function resultFunction(i) {
    const ansOptions = document.querySelectorAll('.ans');
    ansOptions.forEach((ans) => {
        if (ans.checked) {
            if (ans.id === data[i].answer) {
                score++;
            }
        }
    })
}