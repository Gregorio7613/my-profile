// Modal logic
function openModal(imgSrc, title) {
  document.getElementById("modal").classList.add("active");
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-title").textContent = title;
}
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
