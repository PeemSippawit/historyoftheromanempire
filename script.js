document.addEventListener("DOMContentLoaded", () => {
    // Page load fade-in
    document.body.classList.add("loaded");

    // Page transition fade-out
    document.querySelectorAll("a").forEach(link => {
        const href = link.getAttribute("href");

        if (href && !href.startsWith("#") && !href.startsWith("http")) {
            link.addEventListener("click", e => {
                e.preventDefault();
                document.body.classList.remove("loaded");
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });

    // Timeline Modal Logic
    const modal = document.getElementById("timeline-modal");
    
    if (modal) { 
        const closeBtn = document.querySelector(".close-btn");
        const modalTitle = document.getElementById("modal-title");
        const modalYear = document.getElementById("modal-year");
        const modalDesc = document.getElementById("modal-description");

        // Open modal when dot is clicked
        document.querySelectorAll(".timeline-dot").forEach(dot => {
            dot.addEventListener("click", () => {
                modalTitle.textContent = dot.getAttribute("data-title");
                modalYear.textContent = dot.getAttribute("data-year");
                modalDesc.textContent = dot.getAttribute("data-description");
                
                modal.style.display = "flex";
                setTimeout(() => {
                    modal.classList.add("show");
                }, 10);
            });
        });

        // Close modal on 'X' click
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); 
        });

        // Close modal when clicking on the dark background
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    }
});
