// script.js
document.addEventListener("DOMContentLoaded", () => {
 const referrerLog = document.getElementById("referrer-log");

 // Capturar o site de origem
 const referrer = document.referrer;

 if (referrer) {
  if (referrer.includes("instagram.com")) {
   referrerLog.textContent = "Você chegou aqui através de um link no Instagram.";
  } else if (referrer.includes("facebook.com")) {
   referrerLog.textContent = "Você chegou aqui através de um link no Facebook.";
  } else if (referrer.includes("youtube.com")) {
   referrerLog.textContent = "Você chegou aqui através de um link no YouTube.";
  } else {
   referrerLog.textContent = `Origem: ${referrer}`;
  }
 } else {
  referrerLog.textContent = "Você acessou o site diretamente ou a origem não foi detectada.";
 }
});