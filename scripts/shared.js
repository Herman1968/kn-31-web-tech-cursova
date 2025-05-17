const modal = document.getElementById("myModal");
const btn = document.querySelector(".connect_button");
const span = document.querySelector(".close");

// Open modal
btn.onclick = () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
};

// Close modal with 'x'
span.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

// Close modal when clicking outside the content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

document
  .getElementById("internetForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // зупиняємо стандартну відправку
    alert("Дякуємо за заявку! Ми з вами скоро зв’яжемося!");
    this.reset(); // очищення форми
  });
