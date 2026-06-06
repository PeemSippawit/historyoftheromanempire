document.addEventListener("DOMContentLoaded", () => {

document.body.classList.add("loaded");

const overlay = document.getElementById("overlay");
const popupTitle = document.getElementById("popup-title");
const popupContent = document.getElementById("popup-content");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".event-btn").forEach(button => {

    button.addEventListener("click", () => {

        if (!overlay) return;

        popupTitle.textContent = button.dataset.title;
        popupContent.textContent = button.dataset.content;

        overlay.style.display = "flex";

    });

});

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        overlay.style.display = "none";

    });

}

if(overlay){

    overlay.addEventListener("click", (e) => {

        if(e.target === overlay){

            overlay.style.display = "none";

        }

    });

}

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if(
        href &&
        !href.startsWith("#") &&
        !href.startsWith("http")
    ){

        link.addEventListener("click", (e) => {

            e.preventDefault();

            document.body.classList.remove("loaded");

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        });

    }

});

});
