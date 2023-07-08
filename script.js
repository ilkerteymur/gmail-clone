//! imports
import {mailData} from "./constants.js"
import { renderMails, showModal } from "./ui.js";

//! HTML'den çağırdıklarımız
const hamburgerMenu = document.querySelector(".menu");
const navigation = document.querySelector("nav");
const mailsArea = document.querySelector(".mails-area");
const createMailBtn = document.querySelector(".create-mail");
const modal = document.querySelector(".modal-wrapper");
const closeMailBtn = document.querySelector("#close-btn");
const form = document.querySelector("#create-mail-form");




//! Olay izleyicileri
hamburgerMenu.addEventListener("click", handleMenu);
document.addEventListener("DOMContentLoaded", () => renderMails(mailsArea,mailData));
//* modal işlemleri
createMailBtn.addEventListener("click", () => showModal(modal, true));
closeMailBtn.addEventListener("click", () => showModal(modal, false));
form.addEventListener("submit", sendMail);



//! Functions
function handleMenu(){
    navigation.classList.toggle("hide");
}


function sendMail(e){
// sayfanın yenilenmesini engelleme .preventDefault
    e.preventDefault();

// formun içerisinde yer alan imputların
//degerlerine erişme


    const receiver = e.target[0].value;
    const title = e.target[1].value;
    const message = e.target[2].value;


    // yeni mail objesi oluşturma
    const newMail = {
        id: new Date().getTime(),
        sender: "Ilker",
        receiver,
        title,
        message,
        date: "13 Dec"

    }
    console.log(newMail);
   
}