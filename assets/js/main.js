const form = document.querySelector("form");
const input = document.querySelector("#url");
const qrImage = document.querySelector(".qrImage");
const inputContainer = document.querySelector(".inputContainer");
const qrContainer = document.querySelector(".qrContainer");

//Share and Download Button 
const downloadBtn = document.querySelector("#download");
const shareBtn = document.querySelector("#share");

try {
    form.addEventListener("submit", generateQR);
    downloadBtn.addEventListener("click", download);
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

function download() {
    const img = qrImage.querySelector("img");

    if (!img){
        console.log("QR Code is not generator yet!");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "QR-Code";
    link.click();
}