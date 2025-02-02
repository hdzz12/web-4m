// Isi dari script.js

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
let currentPage = 1;

yesBtn.addEventListener("click", () => {
    if (currentPage === 1) {
        question.innerHTML = "YPPIIIEEE I KNEW IT";
        secondQuestion.innerHTML = "U LOB ME RIGHT? MWEHEHEHEHE";
        img.src = "sample.png";
        currentPage++;
    } else if (currentPage === 2) {
        // Mengubah konten halaman ketiga secara dinamis
        question.innerHTML = "CALL ME NOW! I'LL GIVE U 99999 MWAH MWAH";
        secondQuestion.innerHTML = "WHAT ARE U WAITING FOR? CALLLLLLLLL";
        img.src = "chosomadd.png"; // Ganti dengan path gambar kamu

        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        currentPage++;
    }
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
