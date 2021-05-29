const nav = document.getElementById("navbar");
const btn = document.querySelector(".list-of-content");
const li = document.querySelectorAll(".list-content li");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
})

// li[0].addEventListener("click", () => {
//     nav.classList.toggle("active");
// })

toggle = (id) => {
    li[id].addEventListener("click", () => {
        nav.classList.remove("active");
    })
}



