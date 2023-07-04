const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector("nav");


hamburgerMenu.addEventListener("click", handleMenu);

function handleMenu(){
    navigation.classList.toggle("hide")
}

