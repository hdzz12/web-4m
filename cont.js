const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];


yesBtn.addEventListener("click", () => {
    question.innerHTML = "CALL ME NOW! I'LL GIVE U 99999 MWAH MWAH"
    secondQuestion.innerHTML = "WHAT ARE U WAITING FOR? CALLLLLLLLL";
    img.src = "chosomadd.png"
});
