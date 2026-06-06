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
});
