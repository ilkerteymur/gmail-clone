//! imports
import { months } from "./constants.js"
import { renderMails, showModal } from "./ui.js";

// locakstorage'dan veri alma
const strMailData = localStorage.getItem("data");

// gelen string veriyi obje ve dizilere çevirme
const mailData = JSON.parse(strMailData) || [];

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

//! tarih oluşturan function
function getDate(){
    // bugünün tarihini almak
    
       const dateArr = new Date().toLocaleDateString().split(".");
       //tarih dizisinden gün almak
       const day = dateArr[0];
       //tarih dizisinden kaçıncı ayda olduğumuz bilgisini almak
       const monthNumber = dateArr[1];
       //ayın sırasına karşı geleni tanımlamak
       const month = months[monthNumber -1];
       // fonksiyonun çağrıldığı yere gönderilecek cevap
       return [day,month].join(" ");
       // ikinci yol -> return day + " " + month;
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
        date: getDate(),
    };
    //oluşturdugumuz objeyi dizinin başına ekleme
    mailData.unshift(newMail);

    //Todo veritabanı ( locakstorage ) güncellemek
    //! storage ' a göndermek için string'e çeviriyoruz
   const strData = JSON.stringify(mailData);
    //! storage' a gönderme
   localStorage.setItem("data",strData);


    //ekranı güncellemek
renderMails(mailsArea,mailData);   

//modal kapatma
showModal(modal, false);

// modalı temizlemek
e.target[0].value = "";
e.target[1].value = "";
e.target[2].value = "";
}
