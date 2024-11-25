document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".dropdown_trigger");

    triggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();

            const dropdown = trigger.nextElementSibling;
            const isActive = trigger.classList.contains("active");

            // Закрыть все активные меню
            document.querySelectorAll(".dropdown_trigger").forEach(el => el.classList.remove("active"));
            document.querySelectorAll(".dropdown-list").forEach(el => (el.style.display = "none"));

            // Переключить текущее меню
            if (!isActive) {
                trigger.classList.add("active");
                dropdown.style.display = "block";
            }
        });
    });
});
