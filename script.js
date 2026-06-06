document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ) {

            link.addEventListener("click", e => {

                e.preventDefault();

                document.body.classList.remove("loaded");

                setTimeout(() => {
                    window.location.href = href;
                }, 500);

            });

        }

    });

    const tooltip = document.getElementById("tooltip");

    const modal = document.getElementById("modal-overlay");

    const modalTitle = document.getElementById("modal-title");

    const modalContent = document.getElementById("modal-content");

    const closeBtn = document.getElementById("close-modal");

    const dots = document.querySelectorAll(".timeline-dot");

    dots.forEach(dot => {

        dot.addEventListener("mousemove", e => {

            tooltip.style.opacity = "1";

            tooltip.textContent = dot.dataset.title;

            tooltip.style.left = e.pageX + 15 + "px";

            tooltip.style.top = e.pageY + 15 + "px";

        });

        dot.addEventListener("mouseleave", () => {

            tooltip.style.opacity = "0";

        });

        dot.addEventListener("click", () => {

            modalTitle.textContent = dot.dataset.title;

            modalContent.textContent = dot.dataset.content;

            modal.style.display = "flex";

        });

    });

    if(closeBtn){

        closeBtn.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

    if(modal){

        modal.addEventListener("click", e => {

            if(e.target === modal){

                modal.style.display = "none";

            }

        });

    }

});
