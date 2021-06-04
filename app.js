const nav = document.getElementById("navbar");
const btn = document.querySelector(".list-of-content");
const li = document.querySelectorAll(".list-content li");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

li.forEach((id) => {
    id.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
    



