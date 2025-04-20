// Знаходимо всі елементи з класом "accordion-header"
document.querySelectorAll(".accordion-header").forEach((header) => {
  // Для кожного заголовка додаємо обробник події на клік
  header.addEventListener("click", () => {
    // Отримуємо батьківський елемент (accordion-item), до якого належить цей заголовок
    const item = header.parentElement;

    // Перемикаємо клас "active" у батьківського елемента
    // Якщо клас вже є — він видалиться, якщо немає — додасться
    item.classList.toggle("active");
  });
});
