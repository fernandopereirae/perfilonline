// script.js
document.addEventListener("DOMContentLoaded", () => {
 const referrerLog = document.getElementById("referrer-log");

 // Detectar o site de origem (referrer)
 const referrer = document.referrer;

 // Verificar se há um referrer ou se veio diretamente
 if (referrer) {
  referrerLog.textContent = `Você chegou ao site através de: ${referrer}`;
 } else {
  referrerLog.textContent = "Você chegou ao site diretamente (sem referrer).";
 }
});