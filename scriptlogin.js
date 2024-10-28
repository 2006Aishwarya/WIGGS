// scriptlogin.js

function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside the content
window.onclick = function (event) {
  if (event.target == document.getElementById("loginModal")) {
    closeModal();
  }
};
