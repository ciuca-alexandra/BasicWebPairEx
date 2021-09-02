window.addEventListener("DOMContentLoaded", function (e) {

    const order = localStorage.getItem("order");
    const petOrder = JSON.parse(order);

    if (order) {
        const pet = document.querySelector(".pet");
        const name = pet.querySelector(".name");
        const desc = pet.querySelector(".desc");
        const orderInput = document.querySelector("#pet-order");

        name.innerText = petOrder.name;
        desc.innerText = petOrder.desc;

        orderInput.value = order;

        const img = pet.querySelector("img");
        img.setAttribute("src", `images/${petOrder.id}.jpg`);
        img.setAttribute("alt", petOrder.name);
    }
});