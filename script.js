// 1. Data (Questions)
const questionsA = [
    {
        id: 1,
        text: "What is the output of this code: <br /> console.log('Hello JS');",
        options: ["Error", "Hello", "Hello JS", "JS"],
        correct: 2,
        explanation:
            "<span dir='rtl'>الكود ببساطة يطبع النص الموجود داخل console.log.</span>",
    },
    {
        id: 2,
        text: "What is the output of this code: <br /> console.log(2 + 3 + '5');",
        options: ["25", "Error", "55", "10"],
        correct: 2,
        explanation:
            "<span dir='rtl'>2+3=5 ثم 5+'5' = '55' لأن الرقم + نص يتحول إلى نص.</span>",
    },
    {
        id: 3,
        text: "What is the output of this code: <br /> let x = 7; <br /> console.log(x);",
        options: ["x", "7", "Error", "undefined"],
        correct: 1,
        explanation:
            "<span dir='rtl'>تم تعريف المتغير x بقيمة 7، console.log يطبع القيمة.</span>",
    },
    {
        id: 4,
        text: "What is the output of this code: <br /> console.log('3' + 2);",
        options: ["5", "Error", "NaN", "'32'"],
        correct: 3,
        explanation:
            "<span dir='rtl'>أي نص + رقم يتحول للنص، لذلك '3' + 2 = '32'.</span>",
    },
    {
        id: 5,
        text: "What is the output of this code: <br /> let x = 5; <br /> if(x > 3) <br /> &nbsp; { console.log('Hi'); }",
        options: ["Error", "Hi", "Nothing", "5"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x أكبر من 3، لذلك تم تنفيذ جملة if وطباعة 'Hi'.</span>",
    },
    {
        id: 6,
        text: "What is the output of this code: <br /> let x = 10; <br /> if(x === '10') <br /> &nbsp; { console.log('Same'); <br /> } else { console.log('Not Same'); }",
        options: ["Error", "Not Same", "Same", "10"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x رقم و'10' نص. === يقارن النوع والقيمة، الشرط خاطئ، لذلك 'Not Same'.</span>",
    },
    {
        id: 7,
        text: "What is the output of this code: <br /> let x = 4; <br /> if(x > 5) { console.log('A'); } else if(x === 4) { console.log('B'); } else { console.log('C'); }",
        options: ["C", "B", "Error", "A"],
        correct: 1,
        explanation:
            "<span dir='rtl'>x = 4، الشرط الثاني يتحقق، لذلك طباعة 'B'.</span>",
    },
    {
        id: 8,
        text: "What is the output of this code: <br /> console.log(true && false);",
        options: ["true", "Error", "undefined", "false"],
        correct: 3,
        explanation:
            "<span dir='rtl'>&& (AND) يعيد true فقط إذا كان كلا الطرفين true، هنا false.</span>",
    },
    {
        id: 9,
        text: "What is the output of this code: <br /> console.log(true || false);",
        options: ["false", "true", "Error", "undefined"],
        correct: 1,
        explanation:
            "<span dir='rtl'>|| (OR) يعيد true إذا كان أي طرف true، هنا الطرف الأول true.</span>",
    },
    {
        id: 10,
        text: "What is the output of this code: <br /> for(let i = 0; i < 2; i++){ console.log('Test'); }",
        options: ["Error", "Three times", "Twice", "Once"],
        correct: 2,
        explanation:
            "<span dir='rtl'>الحلقة تبدأ من i=0 وتكرر مرتين، لذلك 'Test' تظهر مرتين.</span>",
    },
    {
        id: 11,
        text: "What is the output of this code: <br /> let x = 0; <br /> if(x) { console.log('Yes'); } else { console.log('No'); }",
        options: ["0", "No", "Yes", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>0 يعتبر falsy، لذلك تم تنفيذ else وطباعة 'No'.</span>",
    },
    {
        id: 12,
        text: "What is the output of this code: <br /> function greet(){ return 'Hello'; } <br /> console.log(greet());",
        options: ["greet", "Error", "undefined", "Hello"],
        correct: 3,
        explanation:
            "<span dir='rtl'>الدالة ترجع 'Hello'، لذلك console.log يطبع 'Hello'.</span>",
    },
    {
        id: 13,
        text: "What is the output of this code: <br /> function add(a,b){ return a+b; } <br /> console.log(add(2,3));",
        options: ["23", "5", "undefined", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>2+3 = 5، لذلك console.log(add(2,3)) يطبع 5.</span>",
    },
    {
        id: 14,
        text: "What is the output of this code: <br /> console.log('5' - 2);",
        options: ["NaN", "Error", "3", "52"],
        correct: 2,
        explanation:
            "<span dir='rtl'>الطرح يجبر النص '5' على التحول لرقم، 5-2=3.</span>",
    },
    {
        id: 15,
        text: "What is the output of this code: <br /> console.log(true + false + true);",
        options: ["2", "truefalsetrue", "1", "Error"],
        correct: 0,
        explanation: "<span dir='rtl'>true=1 وfalse=0، لذلك 1+0+1=2.</span>",
    },
    {
        id: 16,
        text: "What is the output of this code: <br /> let arr = [1,2,3]; <br /> console.log(arr[3]);",
        options: ["0", "undefined", "3", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>arr[3] غير موجود، لذلك القيمة undefined.</span>",
    },
    {
        id: 17,
        text: "What is the output of this code: <br /> let x = 5; <br /> x++; <br /> console.log(x);",
        options: ["6", "Error", "5", "'6'"],
        correct: 0,
        explanation:
            "<span dir='rtl'>x++ يزيد x بمقدار 1، لذلك console.log(x) = 6.</span>",
    },
    {
        id: 18,
        text: 'What is the output of this code: <br /> let x = "0"; <br /> if(x) { console.log("Yes"); } else { console.log("No"); }',
        options: ["No", "Error", "Yes", "0"],
        correct: 2,
        explanation:
            "<span dir='rtl'>أي نص غير فارغ يعتبر true، حتى '0'. لذلك if ينفذ وطباعة 'Yes'.</span>",
    },
    {
        id: 19,
        text: "What is the output of this code: <br /> console.log(0 == '0');",
        options: ["Error", "true", "false", "undefined"],
        correct: 1,
        explanation:
            "<span dir='rtl'>== يقوم بتحويل النوع قبل المقارنة، 0 و '0' يعتبران متساويين.</span>",
    },
    {
        id: 20,
        text: "What is the output of this code: <br /> let x = 5; <br /> let y = x; <br /> y = y + 3; <br /> console.log(x);",
        options: ["Error", "8", "5", "undefined"],
        correct: 2,
        explanation:
            "<span dir='rtl'>الأرقام primitive، تعديل y لا يؤثر على x.</span>",
    },
];

const questionsB = [
    {
        id: 1,
        text: "What is the output of this code: <br /> console.log(typeof undefined);",
        options: ["null", "object", "undefined", "Error"],
        correct: 2,
        explanation:
            "<span dir='rtl'>undefined هو نوع بيانات موجود في جافاسكربت.</span>",
    },
    {
        id: 2,
        text: "What is the output of this code: <br /> console.log(NaN === NaN);",
        options: ["false", "Error", "true", "undefined"],
        correct: 0,
        explanation:
            "<span dir='rtl'>NaN لا يساوي أي قيمة حتى نفسه، لذلك النتيجة false.</span>",
    },
    {
        id: 3,
        text: "What is the output of this code: <br /> console.log('4' - '2' + '3');",
        options: ["Error", "1", "13", "23"],
        correct: 3,
        explanation: "<span dir='rtl'>4-2=2 ثم 2+'3'='23' كـ string.</span>",
    },
    {
        id: 4,
        text: "What is the output of this code: <br /> console.log(Boolean('false'));",
        options: ["undefined", "false", "Error", "true"],
        correct: 3,
        explanation:
            "<span dir='rtl'>أي نص غير فارغ يعتبر truthy، حتى لو النص 'false'.</span>",
    },
    {
        id: 5,
        text: "What is the output of this code: <br /> let x = ''; <br /> if(x || x === ''){ console.log('Yes'); } else { console.log('No'); }",
        options: ["Error", "undefined", "No", "Yes"],
        correct: 3,
        explanation:
            "<span dir='rtl'>x='' falsy، لكن الشرط x || x=='' يتحقق، لذلك if ينفذ.</span>",
    },
    {
        id: 6,
        text: "What is the output of this code: <br /> console.log(0 && 'Hello');",
        options: ["Hello", "0", "false", "undefined"],
        correct: 1,
        explanation:
            "<span dir='rtl'>&& يعيد أول قيمة falsy، 0 falsy، لذلك النتيجة 0.</span>",
    },
    {
        id: 7,
        text: "What is the output of this code: <br /> console.log(null || 0 || '' || 'Hi');",
        options: ["0", "Hi", "null", "''"],
        correct: 1,
        explanation:
            "<span dir='rtl'>|| يعيد أول قيمة truthy، 'Hi' هي الأولى.</span>",
    },
    {
        id: 8,
        text: "What is the output of this code: <br /> let arr = [1,,3]; <br /> console.log(arr.length);",
        options: ["undefined", "3", "2", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>حتى لو كان هناك عنصر فارغ، طول المصفوفة = 3.</span>",
    },
    {
        id: 9,
        text: "What is the output of this code: <br /> let arr = [1,2,3]; <br /> console.log(arr[-1]);",
        options: ["3", "-1", "Error", "undefined"],
        correct: 3,
        explanation:
            "<span dir='rtl'>المصفوفات لا تدعم الفهرسة السالبة في جافاسكربت، لذلك undefined.</span>",
    },
    {
        id: 10,
        text: "What is the output of this code: <br /> let a = 5; <br /> console.log(a++); <br /> console.log(a);",
        options: ["6,6", "5,5", "5,6", "Error"],
        correct: 2,
        explanation:
            "<span dir='rtl'>a++ يرجع القيمة قبل الزيادة، ثم a=6.</span>",
    },
    {
        id: 11,
        text: "What is the output of this code: <br /> function f(){ return } <br /> console.log(f());",
        options: ["0", "undefined", "null", "Error"],
        correct: 1,
        explanation: "<span dir='rtl'>return بدون قيمة ترجع undefined.</span>",
    },
    {
        id: 12,
        text: "What is the output of this code: <br /> { let x = 10; } <br /> console.log(typeof x);",
        options: ["number", "Error", "undefined", "object"],
        correct: 2,
        explanation:
            "<span dir='rtl'>x معرف داخل block scope، خارجها undefined.</span>",
    },
    {
        id: 13,
        text: "What is the output of this code: <br /> let a = 5; <br /> console.log(`${a} + 1`);",
        options: ["5 + 1", "Error", "6", "51"],
        correct: 0,
        explanation:
            "<span dir='rtl'>Template literal تطبع النص كما هو مع استبدال المتغيرات، النتيجة '5 + 1'.</span>",
    },
    {
        id: 14,
        text: "What is the output of this code: <br /> let obj1 = {a:1}; <br /> let obj2 = obj1; <br /> obj2.a = 5; <br /> console.log(obj1.a);",
        options: ["undefined", "5", "1", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>المتغيرات التي تحتوي على object تخزن مرجع، تعديل obj2 يؤثر على obj1.</span>",
    },
    {
        id: 15,
        text: "What is the output of this code: <br /> let x = 0; <br /> console.log(x ?? 5);",
        options: ["5", "0", "undefined", "Error"],
        correct: 1,
        explanation:
            "<span dir='rtl'>?? يعيد القيمة إذا لم تكن null أو undefined، 0 ليست null/undefined، لذلك النتيجة 0.</span>",
    },
    {
        id: 16,
        text: "What is the output of this code: <br /> let obj = {}; <br /> console.log(obj?.prop?.sub);",
        options: ["null", "Error", "{}", "undefined"],
        correct: 3,
        explanation:
            "<span dir='rtl'>?. تمنع الخطأ إذا الخاصية غير موجودة، النتيجة undefined.</span>",
    },
    {
        id: 17,
        text: "What is the output of this code: <br /> console.log('a' * 3);",
        options: ["'aaa'", "0", "Error", "NaN"],
        correct: 3,
        explanation:
            "<span dir='rtl'>نص * رقم = NaN إذا النص لا يمكن تحويله لرقم.</span>",
    },
    {
        id: 18,
        text: "What is the output of this code: <br /> console.log(1/0);",
        options: ["0", "NaN", "Infinity", "Error"],
        correct: 2,
        explanation:
            "<span dir='rtl'>1 مقسوم على 0 يعطي Infinity في جافاسكربت.</span>",
    },
    {
        id: 19,
        text: "What is the output of this code: <br /> console.log(false == '0'); <br /> console.log(false === '0');",
        options: ["false,true", "true,false", "true,true", "false,false"],
        correct: 1,
        explanation:
            "<span dir='rtl'>== يقوم بتحويل النوع، false == '0' صحيح، === يقارن النوع والقيمة، false === '0' خطأ.</span>",
    },
    {
        id: 20,
        text: "What is the output of this code: <br /> let a, b; <br /> a = b = 5; <br /> console.log(a, b);",
        options: ["Error", "5,5", "5,undefined", "undefined,5"],
        correct: 1,
        explanation:
            "<span dir='rtl'>التعيين المتسلسل يبدأ من اليمين: b=5، ثم a=b=5، لذلك كلاهما 5.</span>",
    },
];

// 2. State Variables
let studentName = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let timeInSeconds = 1200; // 20 minutes

let firstSubmitAttempted = false; // علامة لمحاولة التسليم الأولى


let questions = [];
let currentQuizType = "A";

let passingScore;

// 3. DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const subBtn = document.getElementById("sub-btn");
const reviewBtn = document.getElementById("review-btn");

// 4. Core Functions

function displayModel2() {
    const model2Card = document.getElementById("model-2");
    const model2Btn = document.getElementById("start-model-2");
    model2Card.classList.remove("locked");
    model2Card.querySelector("h3").innerText = "Model 2 (Unlocked)";
    model2Btn.disabled = false;
}
// start modedl 1
document.getElementById("start-model-1").addEventListener("click", () => {
    const nameInput = document.getElementById("student-name").value.trim();

    if (!nameInput) {
        alert("Please enter your name!");
        return;
    }

    currentQuizType = "A";
    questions = questionsA;
    userAnswers = new Array(questions.length).fill(null);

    studentName = nameInput;

    const model2Unlocked = localStorage.getItem(
        studentName + "_model2_unlocked"
    );

    if (model2Unlocked === "true") {
        displayModel2();
    }

    startQuiz();
});

// start model 2
document.getElementById("start-model-2").addEventListener("click", () => {
    
    const nameInput = document.getElementById("student-name").value.trim();

    if (!nameInput) {
        alert("Please enter your name!");
        return;
    }

    studentName = nameInput;
    
    currentQuizType = "B";
    questions = questionsB;
    userAnswers = new Array(questions.length).fill(null);
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    firstSubmitAttempted = false;
    timeInSeconds = 1200; // Reset to 20 minutes

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
            <span class="q-label">Question ${currentQuestionIndex + 1} of ${
        questions.length
    } : </span> 
            <span class="q-text">${q.text}</span>
        </h3>
    `;

    q.options.forEach((option, index) => {
        const isSelected =
            userAnswers[currentQuestionIndex] === index ? "selected" : "";
        html += `<button class="option-btn ${isSelected}" data-index="${index}">${option}</button>`;
    });

    questionContainer.innerHTML = html;

    document.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", (e) =>
            selectAnswer(parseInt(e.currentTarget.dataset.index))
        );
        button.addEventListener("touchstart", (e) => {
            e.preventDefault();
            selectAnswer(parseInt(e.currentTarget.dataset.index));
        });
    });

    prevBtn.style.display =
        currentQuestionIndex === 0 ? "none" : "inline-block";

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
    const chosenBtn = document.querySelector(
        `.option-btn[data-index='${index}']`
    );
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


async function submitQuiz(auto = false) {
    if (!auto) {
        const firstUnansweredIndex = userAnswers.findIndex(
            (ans) => ans === null
        );
        if (firstUnansweredIndex !== -1) {
            if (!firstSubmitAttempted) {
                // أول محاولة submit، نوري أول سؤال ناقص
                alert(
                    `Please answer all questions before submitting. Question ${
                        firstUnansweredIndex + 1
                    }.`
                );
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

    passingScore = Math.ceil(questions.length / 1.2);

    if (score >= passingScore) {
        localStorage.setItem(studentName + "_model2_unlocked", "true");
        alert("Congratulations! You have unlocked the Model 2.");
        displayModel2();
    } else {
        alert("Keep practicing! you couldn't unlock Model 2 yet.");
    }

    document.getElementById(
        "score"
    ).innerText = `${score} / ${questions.length}`;
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    document.getElementById(
        "student-name-display"
    ).innerText = `Student: ${studentName}`;

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
            <p class="explanation"><em dir="rtl">السبب: ${
                q.explanation
            }</em></p>
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

// عند تحميل الصفحة، شيك لو الموديل 2 مفتوح من قبل
window.addEventListener("DOMContentLoaded", () => {
    const storedStudents = Object.keys(localStorage);
    storedStudents.forEach((key) => {
        if (
            key.endsWith("_model2_unlocked") &&
            localStorage.getItem(key) === "true"
        ) {
            displayModel2();
        }
    });
});

// 5. Event Listeners
nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
subBtn.addEventListener("click", () => submitQuiz(false));
reviewBtn.addEventListener("click", showReview);
