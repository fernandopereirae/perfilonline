// script.js
document.addEventListener("DOMContentLoaded", async () => {
 // Referência ao HTML
 const referrerElement = document.getElementById("referrer");
 const locationElement = document.getElementById("location");
 const deviceInfoElement = document.getElementById("device-info");

 // Capturar o site de origem (referrer)
 const referrer = document.referrer || "Acesso direto (sem origem)";
 referrerElement.textContent = `Origem: ${referrer}`;

 // Capturar localização usando a API de geolocalização
 try {
  const response = await fetch("https://ip-api.com/json");
  const data = await response.json();

  if (data.status === "success") {
   locationElement.textContent = `Localização aproximada: ${data.city}, ${data.regionName}, ${data.country}`;
  } else {
   locationElement.textContent = "Não foi possível determinar a localização.";
  }
 } catch (error) {
  locationElement.textContent = "Erro ao buscar a localização.";
 }

 // Capturar informações do dispositivo
 const userAgent = navigator.userAgent;
 const platform = navigator.platform;

 deviceInfoElement.textContent = `Dispositivo: ${platform} | Navegador: ${userAgent}`;
});