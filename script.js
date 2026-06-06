document.addEventListener("DOMContentLoaded", () => {

    /* SIMPLE PAGE FADE IN */
    document.body.classList.add("loaded");

    /* POPUP SYSTEM */
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const content = document.getElementById("popup-content");
    const closeBtn = document.getElementById("close");

    document.querySelectorAll(".event-btn").forEach(btn => {

        btn.addEventListener("click", () => {

            title.textContent = btn.dataset.title;
            content.textContent = btn.dataset.content;

            overlay.style.display = "flex";

        });

    });

    function closePopup() {
        overlay.style.display = "none";
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closePopup);
    }

    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                closePopup();
            }
        });
    }

    /* OPTIONAL: smooth page transition */
    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if (href && !href.startsWith("#") && !href.startsWith("http")) {

            link.addEventListener("click", (e) => {

                e.preventDefault();

                document.body.classList.remove("loaded");

                setTimeout(() => {
                    window.location.href = href;
                }, 250);

            });

        }

    });

});
