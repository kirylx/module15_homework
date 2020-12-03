const downLeftCircle = document.querySelector("#down-left-circle");
const leftCircleFill = document.querySelector("#left-circle-fill");

document.querySelector(".btn").addEventListener("click", () => {
    downLeftCircle.classList.toggle("d-none");
    leftCircleFill.classList.toggle("d-none");
});
