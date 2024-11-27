document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".dropdown_trigger");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();

            const dropdown = trigger.nextElementSibling;
            const isActive = trigger.classList.contains("active");
            const svgIcon = trigger.querySelector("use"); // Найти SVG иконку в текущем триггере

            // Закрыть все активные меню
            document.querySelectorAll(".dropdown_trigger").forEach(el => {
                el.classList.remove("active");

                // Вернуть исходную иконку
                const icon = el.querySelector("use");
                if (icon) {
                    icon.setAttribute("xlink:href", "images/sprte.svg#dropdown"); // Исходная иконка
                }
            });

            document.querySelectorAll(".dropdown-list").forEach(el => (el.style.display = "none"));

            // Переключить текущее меню
            if (!isActive) {
                trigger.classList.add("active");
                dropdown.style.display = "block";

                // Изменить иконку на активную
                if (svgIcon) {
                    svgIcon.setAttribute("xlink:href", "images\chevron-up-svgrepo-com.svg"); // Новая иконка
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (event) {
        if (!searchInput.value.trim()) {
            event.preventDefault();
            alert("Voer een zoekterm in!"); // Сообщение об ошибке, если поле пустое
        }
    });
});

