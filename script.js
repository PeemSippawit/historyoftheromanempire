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

// ===== TIMELINE INTERACTION =====

document.querySelectorAll(".timeline-item").forEach(item => {
    const tooltip = item.querySelector(".timeline-tooltip");

    const title = item.dataset.title;
    const year = item.dataset.year;
    const info = item.dataset.info;

    item.addEventListener("mouseenter", () => {
        tooltip.style.display = "block";
        tooltip.textContent = `${year}: ${info}`;
    });

    item.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });

    item.addEventListener("click", () => {
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalYear").textContent = year;
        document.getElementById("modalInfo").textContent = info;
        document.getElementById("timelineModal").style.display = "flex";
    });
});

// close modal
document.querySelector(".modal-close").addEventListener("click", () => {
    document.getElementById("timelineModal").style.display = "none";
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("timelineModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
