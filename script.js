document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    // ===== PAGE TRANSITION LINKS =====
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

    // ===== TIMELINE INTERACTION (SAFE GUARDED) =====
    const timelineItems = document.querySelectorAll(".timeline-item");

    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            const tooltip = item.querySelector(".timeline-tooltip");

            const title = item.dataset.title;
            const year = item.dataset.year;
            const info = item.dataset.info;

            item.addEventListener("mouseenter", () => {
                if (!tooltip) return;
                tooltip.style.display = "block";
                tooltip.textContent = `${year}: ${info}`;
            });

            item.addEventListener("mouseleave", () => {
                if (!tooltip) return;
                tooltip.style.display = "none";
            });

            item.addEventListener("click", () => {
                const modal = document.getElementById("timelineModal");
                if (!modal) return;

                document.getElementById("modalTitle").textContent = title;
                document.getElementById("modalYear").textContent = year;
                document.getElementById("modalInfo").textContent = info;

                modal.style.display = "flex";
            });
        });
    }

    // ===== MODAL CLOSE (SAFE) =====
    const closeBtn = document.querySelector(".modal-close");
    const modal = document.getElementById("timelineModal");

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // click outside modal
    window.addEventListener("click", (e) => {
        if (!modal) return;
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
