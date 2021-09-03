window.addEventListener("DOMContentLoaded", function(e) {

    const adoption = localStorage.getItem("adoption");
    const petAdoption = JSON.parse(adoption);

    if (petAdoption) {
        const pet = document.querySelector(".pet");
        const name = pet.querySelector(".name");
        const desc = pet.querySelector(".desc");
        const adoptionInput = document.querySelector("#pet-adoption");

        name.innerText = petAdoption.name;
        desc.innerText = petAdoption.desc;

        adoptionInput.value = adoption;

        const img = pet.querySelector("img");
        img.setAttribute("src", `../images/${petAdoption.id}.jpg`);
        img.setAttribute("alt", petAdoption.name);
    }
});