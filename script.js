// 1. Data (Questions)
const questions = [
    // 1. Introduction (سهل)
    {
        id: 1,
        text: "What is the output of this code: <br /> console.log('Hello JS');",
        options: ["Hello JS", "Hello", "JS", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>الكود ببساطة يطبع النص الموجود داخل console.log.</span>",
    },
    // 2. Calculations and Strings
    {
        id: 2,
        text: "What is the output of this code: <br /> console.log(2 + 3 + '5');",
        options: ["55", "25", "10", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>جافاسكربت تقرأ من اليسار لليمين: 2+3 = 5، ثم 5+'5' = '55' لأن أي رقم + نص يتحول لنص.</span>",
    },
    // 3. Variables
    {
        id: 3,
        text: "What is the output of this code: <br /> let x = 7; <br /> console.log(x);",
        options: ["7", "x", "undefined", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>تم تعريف المتغير x بقيمة 7، وبالطبع console.log يطبع القيمة.</span>",
    },
    // 4. Comprehension Check (tricky string + number)
    {
        id: 4,
        text: "What is the output of this code: <br /> console.log('3' + 2);",
        options: ["5", "'32'", "NaN", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>أي نص + رقم يتحول للنص، لذلك '3' + 2 = '32'.</span>",
    },
    // 5. If statement
    {
        id: 5,
        text: "What is the output of this code: <br /> let x = 5; <br /> if(x > 3) { console.log('Hi'); }",
        options: ["5", "Hi", "Error", "Nothing"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x أكبر من 3، لذلك تم تنفيذ جملة if وطباعة 'Hi'.</span>",
    },
    // 6. If - else statements
    {
        id: 6,
        text: "What is the output of this code: <br /> let x = 10; <br /> if(x === '10') {<br /> &nbsp; console.log('Same'); <br />} else { <br /> &nbsp; console.log('Not Same'); <br /> }",
        options: ["Same", "Not Same", "10", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x رقم و'10' نص. === يقارن النوع والقيمة، لذا الشرط خاطئ وتم تنفيذ else وطباعة 'Not Same'.</span>",
    },
    // 7. Else if
    {
        id: 7,
        text: "What is the output of this code: <br /> let x = 4; <br /> if(x > 5) { <br /> &nbsp; console.log('A'); <br /> } else if(x === 4) { <br /> &nbsp; console.log('B'); <br /> } else { <br /> &nbsp; console.log('C'); <br />}",
        options: ["A", "B", "C", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x = 4، لا يتحقق الشرط الأول، يتحقق الشرط الثاني، لذلك طباعة 'B'.</span>",
    },
    // 8. Comprehension Check (logical operator)
    {
        id: 8,
        text: "What is the output of this code: <br /> console.log(true && false);",
        options: ["true", "false", "undefined", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>&& (AND) يعيد true فقط إذا كان كلا الطرفين true، هنا false.</span>",
    },
    // 9. Logical operator
    {
        id: 9,
        text: "What is the output of this code: <br /> console.log(true || false);",
        options: ["true", "false", "undefined", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>|| (OR) يعيد true إذا كان أي طرف true، هنا الطرف الأول true.</span>",
    },
    // 10. Iterative operation
    {
        id: 10,
        text: "What is the output of this code: <br /> for(let i = 0; i < 2; i++){ console.log('Test'); }",
        options: ["Once", "Twice", "Three times", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>الحلقة تبدأ من i=0 وتكرر مرتين (i=0 و i=1)، لذلك 'Test' تظهر مرتين.</span>",
    },
    // 11. Comprehension Check (falsy value)
    {
        id: 11,
        text: "What is the output of this code: <br /> let x = 0; <br /> if(x) { <br /> &nbsp; console.log('Yes'); <br /> } else { <br /> &nbsp; console.log('No'); <br /> }",
        options: ["Yes", "No", "0", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>0 يعتبر falsy في جافاسكربت، لذلك تم تنفيذ else وطباعة 'No'.</span>",
    },
    // 12. Function (1)
    {
        id: 12,
        text: "What is the output of this code: <br /> function greet(){ <br /> &nbsp; return 'Hello'; <br /> } <br />  &nbsp;console.log(greet());",
        options: ["greet", "Hello", "undefined", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>الدالة ترجع 'Hello'، لذلك console.log يطبع 'Hello'.</span>",
    },
    // 13. Function (2)
    {
        id: 13,
        text: "What is the output of this code: <br /> function add(a,b){ <br /> &nbsp; return a+b; <br /> } <br /> &nbsp; console.log(add(2,3));",
        options: ["5", "23", "undefined", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>2+3 = 5، لذلك console.log(add(2,3)) يطبع 5.</span>",
    },
    // 14. Comprehension Check (type coercion)
    {
        id: 14,
        text: "What is the output of this code: <br /> console.log('5' - 2);",
        options: ["3", "52", "NaN", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>الطرح يجبر النص '5' على التحول لرقم، 5-2=3.</span>",
    },
    // 15. Tricky boolean logic
    {
        id: 15,
        text: "What is the output of this code: <br /> console.log(true + false + true);",
        options: ["2", "1", "truefalsetrue", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>في جافاسكربت، true يتحوّل إلى 1 و false إلى 0 عند العمليات الحسابية. إذن: 1 + 0 + 1 = 2.</span>",
    },
    // 16. Array
    {
        id: 16,
        text: "What is the output of this code: <br /> let arr = [1,2,3]; <br /> console.log(arr[3]);",
        options: ["3", "undefined", "0", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>arr[3] غير موجود، لذلك القيمة undefined.</span>",
    },
    // 17. Increment operators
    {
        id: 17,
        text: "What is the output of this code: <br /> let x = 5; <br /> x++; <br /> console.log(x);",
        options: ["5", "6", "'6'", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x++ يزيد x بمقدار 1، لذلك console.log(x) = 6.</span>",
    },
    // 18. Floating point tricky
    {
        id: 18,
        text: 'ركززززززز 🔥 (السؤال مش متكرر، خلي بالك)<br /><br /> What is the output of this code: <br /> let x = "0"; <br /> if(x) { <br /> &nbsp; console.log("Yes"); <br /> } else { <br /> &nbsp; console.log("No"); <br /> }',
        options: ["Yes", "No", "0", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>أي نص غير فارغ يعتبر true، حتى لو النص '0'. لذلك تم تنفيذ if وطباعة 'Yes'.</span>",
    },
    // 19. Tricky equality
    {
        id: 19,
        text: "What is the output of this code: <br /> console.log(0 == '0');",
        options: ["true", "false", "Error", "undefined"],
        correct: 0,
        explanation:
            "<span dir='rtl'>المساواة == تقوم بتحويل النوع قبل المقارنة، لذلك 0 (رقم) و '0' (نص) يعتبران متساويين، فتكون النتيجة true.</span>",
    },
    // 20. Types tricky (أصعب سؤال)
    {
        id: 20,
        text: "What is the output of this code: <br /> let x = 5; <br /> let y = x; <br /> y = y + 3; <br /> console.log(x);",
        options: ["5", "8", "undefined", "Error"],
        correct: 0,
        explanation:
            "<span dir='rtl'>الأرقام primitive، نسخ القيمة لا يغير المتغير الأصلي. تعديل y لا يؤثر على x.</span>",
    }
];

// 2. State Variables
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let timerInterval;
let timeInSeconds = 1200; // 20 minutes

// 3. DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const subBtn = document.getElementById("sub-btn");
const reviewBtn = document.getElementById("review-btn");

// 4. Core Functions
function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    document.getElementById("timer-text").innerText = `${
        minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;

    renderQuestion();
    startTimer();
}

function startTimer() {
    const timerText = document.getElementById("timer-text");

    timerInterval = setInterval(() => {
        timeInSeconds--;

        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        timerText.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
        }`;

        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            submitQuiz(true);
        }

        if (timeInSeconds <= 60) {
            timerText.classList.add("urgent");
        } else {
            timerText.classList.remove("urgent");
        }
    }, 1000);
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];

    let html = `
        <h3>
            <span class="q-label">Question ${currentQuestionIndex + 1} of ${questions.length} : </span> 
            <span class="q-text">${q.text}</span>
        </h3>
    `;

    q.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestionIndex] === index ? "selected" : "";
        html += `<button class="option-btn ${isSelected}" data-index="${index}">${option}</button>`;
    });

    questionContainer.innerHTML = html;

    document.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", (e) => selectAnswer(parseInt(e.currentTarget.dataset.index)));
        button.addEventListener("touchstart", (e) => {
            e.preventDefault();
            selectAnswer(parseInt(e.currentTarget.dataset.index));
        });
    });


    prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";

    const anyUnanswered = userAnswers.includes(null);
    if (!anyUnanswered) {
        subBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    } else {
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.classList.add("hidden");
            subBtn.classList.remove("hidden");
        } else {
            nextBtn.classList.remove("hidden");
            subBtn.classList.add("hidden");
        }
    }

    updateProgressBar();
}



function selectAnswer(index) {
    userAnswers[currentQuestionIndex] = index;

    // إزالة تحديد من كل الأزرار
    document.querySelectorAll(".option-btn").forEach((btn) => {
        btn.classList.remove("selected");
    });

    // تعليم الزرار اللي اختاره المستخدم
    const chosenBtn = document.querySelector(`.option-btn[data-index='${index}']`);
    if (chosenBtn) chosenBtn.classList.add("selected");

    // شيك لو كل الأسئلة محلولة، خلي Submit ظاهر فورًا
    const anyUnanswered = userAnswers.includes(null);
    if (!anyUnanswered) {
        subBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    }

    // مش محتاجين نعيد renderQuestion() بالكامل
    updateProgressBar();
}


function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

let firstSubmitAttempted = false; // علامة لمحاولة التسليم الأولى

function submitQuiz(auto = false) {
    if (!auto) {
        const firstUnansweredIndex = userAnswers.findIndex(ans => ans === null);
        if (firstUnansweredIndex !== -1) {
            if (!firstSubmitAttempted) {
                // أول محاولة submit، نوري أول سؤال ناقص
                alert(`Please answer all questions before submitting. Question ${firstUnansweredIndex + 1}.`);
                currentQuestionIndex = firstUnansweredIndex;
                renderQuestion();
                firstSubmitAttempted = true; // علمنا انه حصلت أول محاولة
                return;
            } else {
                // المستخدم حل كل الأسئلة اللي كانت ناقصة، نخلي زرار submit جاهز
                subBtn.classList.remove("hidden");
                nextBtn.classList.add("hidden");
                return;
            }
        }
    }

    clearInterval(timerInterval);

    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) score++;
    });

    document.getElementById("score").innerText = `${score} / ${questions.length}`;
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const existingMessage = document.getElementById("great-job-message");
    if (existingMessage) existingMessage.remove();

    if (score === questions.length) {
        confetti();
        const perfectMessage = document.createElement("h3");
        perfectMessage.id = "great-job-message";
        perfectMessage.innerHTML = "Great Job! All answers are correct. 🎉";
        resultScreen.insertBefore(perfectMessage, reviewBtn);
    } else {
        reviewBtn.style.display = "inline-block";
    }
}


function showReview() {
    resultScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    let hasMistakes = false;
    questions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === q.correct;
        const wrongText =
            userAnswer !== null ? q.options[userAnswer] : "Not Answered";
        const correctText = q.options[q.correct];

        if (!isCorrect) hasMistakes = true;

        reviewContainer.innerHTML += `
        <div class="review-item">
            <p><strong>Q${index + 1}: </strong> ${q.text}</p>
            <p>Your Answer: <span class="${
                isCorrect ? "correct-ans" : "wrong-ans"
            }">${wrongText}</span></p>
            <p>Correct Answer: <span class="correct-ans">${correctText}</span></p>
            <p class="explanation"><em dir="rtl">السبب: ${q.explanation}</em></p>
        </div>
        `;
    });

    if (!hasMistakes) {
        reviewContainer.innerHTML +=
            "<h3>Great Job! All answers are correct. 🎉</h3>";
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// 5. Event Listeners
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
subBtn.addEventListener("click", () => submitQuiz(false));
reviewBtn.addEventListener("click", showReview);
