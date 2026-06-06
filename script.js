function switchEra(id) {
  document.querySelectorAll(".era").forEach(el => {
    el.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* MODAL ELEMENTS */
const modal = document.getElementById("modal");
const titleEl = document.getElementById("modal-title");
const textEl = document.getElementById("modal-text");

/* ATTACH CLICK EVENTS TO DOTS */
document.querySelectorAll(".dot").forEach(dot => {
  dot.addEventListener("click", () => {
    titleEl.textContent = dot.dataset.title;
    textEl.textContent = dot.dataset.text;
    modal.style.display = "block";
  });
});

/* CLOSE MODAL */
function closeModal() {
  modal.style.display = "none";
}

/* CLOSE WHEN CLICKING OUTSIDE */
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
