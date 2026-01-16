const gasStations = [
  {
    name: "豊通エネルギー】セルフ川中島SS / (株)玉井",
    price: "レギュラー 146円/L",
    embedUrl: "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.210109942656!2d138.15224657582885!3d36.591376472307395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d836862bbb9f7%3A0x8ee292bab3e46686!2zVE9ZT1RTVSBFTkVSR1kg44K744Or44OV5bed5Lit5bO2U1PvvI_vvIjmoKrvvInnjonkupU!5e1!3m2!1sja!2sjp!4v1768556315520!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>",
    mapUrl: "https://maps.app.goo.gl/afWYUNoPESWSJQcT8"
  },
  {
    name: "白馬村SS",
    price: "レギュラー 172円/L",
    embedUrl: "ここにGoogleMap埋め込みURL",
    mapUrl: "ここに通常のGoogleMap URL"
  }
];

const container = document.getElementById("gas-list");

gasStations.forEach(station => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${station.name}</h3>
    <p>${station.price}</p>
    <iframe src="${station.embedUrl}"></iframe>
    <div class="url-box">${station.mapUrl}</div>
  `;

  container.appendChild(card);
});
