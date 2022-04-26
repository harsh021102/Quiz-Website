const quesData = [
    {
        question:'Who was the father of computer?',
        a: 'Charlie Babbage',
        b: 'Dennis Ritchie',
        c: 'Charles Babbage',
        d: 'Ken Thompson',
        correct: 'a'
    },{
        question:' What is the full form of CU?',
        a: 'Compound Unit',
        b: 'Communication Unit',
        c: 'Computer Unit',
        d: 'Control Unit',
        correct: 'd'
    },{
        question:'What is the full form of CPU?',
        a: 'Central Process Unit',
        b: 'Central Processing Unit',
        c: 'Central Programming Unit',
        d: 'Central Progressive Unit',
        correct: 'b'
    }
    ,{
        question:'What is the full form of MU?',
        a: 'Management Unit',
        b: 'Masked Unit',
        c: 'Main Unit',
        d: 'Memory Unit',
        correct: 'd'
    },{
        question:'What is the full form of ALU?',
        a: 'Arithmetic Logic Unit',
        b: 'Arithmetic Local Unit',
        c: 'Advance Logical Unit',
        d: 'None of these',
        correct: 'a'
    },{
        question:'What is the full form of EEPROM?',
        a: 'Electrically Erasable Read Access Memory',
        b: 'Electrically Erasable Read Only Memory',
        c: 'Ethical Electrically Read Only Memory',
        d: 'None of these',
        correct: 'b'
    },{
        question:'What is the full form of SDRAM?',
        a: 'Special Dynamic Read Access Memory',
        b: 'Synchronous Dynamic Read Access Memory',
        c: 'Special Dynamic Random Access Memory',
        d: 'Synchronous Dynamic Random Access Memory',
        correct: 'd'
    },{
        question:'Which electronics component is used in first generation computers?',
        a: 'Transistors',
        b: 'ULSI Chips',
        c: 'Vacuum Tubes',
        d: 'LSI Chips',
        correct: 'c'
    },{
        question:'Which element/tag defines a paragraph?',
        a: '<p>',
        b: '<pre>',
        c: '<panel>',
        d: 'None of the above',
        correct: 'a'
    },{
        question:' Which tag is the root element of an HTML page?',
        a: '<html>',
        b: '<pre>',
        c: '<head>',
        d: '<body>',
        correct: 'a'
    }
]
const questionEl = document.getElementById('question');
const questionNum = document.getElementById('qNum');
const op_a = document.getElementById('a');
const op_b = document.getElementById('b');
const op_c = document.getElementById('c');
const op_d = document.getElementById('d');
const correct_ans = document.getElementById('correct');
const score = document.getElementById('score');
var quesNumber = 0,correctAnswers=0;
loadQuiz();
function loadQuiz() {
    const currentQue = quesData[quesNumber];
    questionEl.innerHTML = currentQue.question;
    questionNum.innerHTML = "Q." + (quesNumber+1);
    score.innerHTML = "Score: " + (correctAnswers)+"/10";
    op_a.innerText = currentQue.a;
    op_b.innerText = currentQue.b;
    op_c.innerText = currentQue.c;
    op_d.innerText = currentQue.d;
}
function optionClear(){
    op_a.innerText = "";
    op_b.innerText = "";
    op_c.innerText = "";
    op_d.innerText = "";
}
function remark(){
    if(correctAnswers<=5)
    {
        questionEl.innerHTML = "You can do Better!🤗";
        optionClear();
    }
    else if(correctAnswers>5&&correctAnswers<=8)
    {
        questionEl.innerHTML = "Very Good😉";
        optionClear();
    }
    else if(correctAnswers>8&&correctAnswers<=10)
    {
        questionEl.innerHTML = "Excellent Work😎";
        optionClear();
    }    
}
function backtoBlueFromGreenA(){
    document.getElementById('a').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromRedA(){
    document.getElementById('a').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromGreenB(){
    document.getElementById('b').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromRedB(){
    document.getElementById('b').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromGreenC(){
    document.getElementById('c').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromRedC(){
    document.getElementById('c').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromGreenD(){
    document.getElementById('d').style.backgroundColor = 'rgba(0,136,169,1)';
}
function backtoBlueFromRedD(){
    document.getElementById('d').style.backgroundColor = 'rgba(0,136,169,1)';
}
function answerCheckerA(id){
    const currentQue = quesData[quesNumber];
    if(currentQue.correct==id)
    {
        document.getElementById(id).style.backgroundColor = 'green';  
        quesNumber++;
        setTimeout("backtoBlueFromGreenA()", 1000); 
        if(quesNumber==quesData.length)
        {
            setTimeout("backtoBlueFromGreenA()", 1000);
            setTimeout("remark()", 500);
        }
        else
        {
            correctAnswers++;
            setTimeout("loadQuiz()", 1500); 
        }
    }
    else
    {
        document.getElementById(id).style.backgroundColor = 'red';  
        setTimeout("backtoBlueFromRedA()", 1500);
        quesNumber++;
        setTimeout("loadQuiz()", 1000);
    }
}
function answerCheckerB(id){
    const currentQue = quesData[quesNumber];
    if(currentQue.correct==id)
    {
        document.getElementById(id).style.backgroundColor = 'green';  
        quesNumber++;
        setTimeout("backtoBlueFromGreenB()", 1000); 
        setTimeout("loadQuiz()", 1500); 
        if(quesNumber==quesData.length)
        {
            setTimeout("backtoBlueFromGreenA()", 1000);
            setTimeout("remark()", 500);
        }
        else
        {
            correctAnswers++;
            setTimeout("loadQuiz()", 1500); 
        }
    }
    else
    {
        document.getElementById(id).style.backgroundColor = 'red';  
        setTimeout("backtoBlueFromRedB()", 1500);
        quesNumber++;
        setTimeout("loadQuiz()", 1000);
    }
}
function answerCheckerC(id){
    const currentQue = quesData[quesNumber];
    if(currentQue.correct==id)
    {
        document.getElementById(id).style.backgroundColor = 'green';  
        quesNumber++;
        setTimeout("backtoBlueFromGreenC()", 1000); 
        setTimeout("loadQuiz()", 1500); 
        if(quesNumber==quesData.length)
        {
            setTimeout("backtoBlueFromGreenC()", 1000);
            setTimeout("remark()", 500);
        }
        else
        {
            correctAnswers++;
            setTimeout("loadQuiz()", 1500); 
        }
    }
    else
    {
        document.getElementById(id).style.backgroundColor = 'red';  
        setTimeout("backtoBlueFromRedC()", 1500);
        quesNumber++;
        setTimeout("loadQuiz()", 1000);
    }
}
function answerCheckerD(id){
    const currentQue = quesData[quesNumber];
    if(currentQue.correct==id)
    {
        document.getElementById(id).style.backgroundColor = 'green';  
        quesNumber++;
        setTimeout("backtoBlueFromGreenD()", 1000); 
        setTimeout("loadQuiz()", 1500); 
        if(quesNumber==quesData.length)
        {
            setTimeout("backtoBlueFromGreenD()", 1000);
            setTimeout("remark()", 500);
        }
        else
        {
            correctAnswers++;
            setTimeout("loadQuiz()", 1500); 
        }
    }
    else
    {
        document.getElementById(id).style.backgroundColor = 'red';  
        setTimeout("backtoBlueFromRedD()", 1500);
        quesNumber++;
        setTimeout("loadQuiz()", 1000);
    }
}

