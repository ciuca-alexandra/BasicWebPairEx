window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]");

    orderButtons.forEach(function(button) {
      
      button.addEventListener("click", function(e) {
        const button = e.currentTarget;
        const container = button.parentNode;

        const order = {
          id: (id = button.getAttribute("data-order")),
          name: container.querySelector(".name").innerText,
          desc: container.querySelector(".desc").innerText
        };

        localStorage.setItem("order", JSON.stringify(order));

        const url = window.location.href.replace("html/animals.html", "html/form.html");
        window.location.href = url;
      });
    });
  });