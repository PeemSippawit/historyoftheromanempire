console.log("JS is running");
document.addEventListener("DOMContentLoaded", () => {

    const timelineData = [
        {
            title: "Foundation of Rome",
            year: "753 BC",
            info: "Romulus is traditionally credited with founding Rome."
        },
        {
            title: "Early Kings Period",
            year: "700–600 BC",
            info: "Early monarchy period ruled by Roman kings."
        },
        {
            title: "Fall of Tarquin the Proud",
            year: "509 BC",
            info: "Last king overthrown and Roman Republic begins."
        }
    ];

    const timelineContainer = document.getElementById("timeline");
    console.log(timelineContainer);

    timelineData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("timeline-item");

        div.dataset.title = item.title;
        div.dataset.year = item.year;
        div.dataset.info = item.info;

        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">${item.year} — ${item.title}</div>
            <div class="timeline-tooltip"></div>
        `;

        timelineContainer.appendChild(div);
    });

    // hover + click logic (must run AFTER creation)
    document.querySelectorAll(".timeline-item").forEach(item => {
        const tooltip = item.querySelector(".timeline-tooltip");

        item.addEventListener("mouseenter", () => {
            tooltip.style.display = "block";
            tooltip.textContent = `${item.dataset.year}: ${item.dataset.info}`;
        });

        item.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });

        item.addEventListener("click", () => {
            document.getElementById("modalTitle").textContent = item.dataset.title;
            document.getElementById("modalYear").textContent = item.dataset.year;
            document.getElementById("modalInfo").textContent = item.dataset.info;
            document.getElementById("timelineModal").style.display = "flex";
        });
    });

    // modal close
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.getElementById("timelineModal").style.display = "none";
    });

    window.addEventListener("click", (e) => {
        const modal = document.getElementById("timelineModal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
