const QR_CODE_API_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

async function generate() {
  const inputField = document.getElementById("input-box");
  const searchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputField.value);
  const res = await fetch(QR_CODE_API_URL + searchURL);
  const data = await res.blob(); // handle images fetched through API using blob()
  const imageURL = URL.createObjectURL(data);

  const qrCode = document.getElementById("qrImage");
  qrCode.setAttribute("src", imageURL);
}
