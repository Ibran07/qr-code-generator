const form = document.querySelector("form");
const input = document.querySelector("#url");
const qrImage = document.querySelector(".qrImage");
const inputContainer = document.querySelector(".inputContainer");
const qrContainer = document.querySelector(".qrContainer");

try {
    form.addEventListener("submit", generateQR);
} catch (err){
    console.log("Error is ",err);
}

async function generateQR(e) {
    e.preventDefault();
    
    const url = input.value.trim();

    qrImage.innerHTML = "";
    new QRCode (qrImage, {
        text: url,
        width: 160,
        height: 170,
        correctLevel : QRCode.CorrectLevel.H
    });
    inputContainer.style.display = "none";
    qrContainer.style.display = "flex";
}
