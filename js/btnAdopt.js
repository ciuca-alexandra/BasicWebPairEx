window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-adoption]");

    orderButtons.forEach(function(button) {

        button.addEventListener("click", function(e) {
            const button = e.currentTarget;
            const container = button.parentNode;

            const adoption = {
                id: (id = button.getAttribute("data-adoption")),
                name: container.querySelector(".name").innerText,
                desc: container.querySelector(".desc").innerText
            };

            localStorage.setItem("adoption", JSON.stringify(adoption));

            const url = window.location.href.replace("html/animals.html", "html/form.html");
            window.location.href = url;
        });
    });
});