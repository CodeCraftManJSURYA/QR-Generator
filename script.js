function generateQr() {
  const inputText = qrtext.value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (inputText.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(inputText);
    imgBox.classList.add("show-img");
    errorMessage.style.display = "none"; // Hide error message
  } else {
    qrtext.classList.add("errors");
    errorMessage.style.display = "block"; // Show error message
    setTimeout(() => {
      qrtext.classList.remove("errors");
      errorMessage.style.display = "none"; // Hide error message after 1s
    }, 1000);
  }
}

qrImg.onload = function () {
  imgBox.classList.add("show-img");
};

function downloadQr() {
  if (qrImg.src && qrImg.complete) {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qrcode.png";
    link.click();
  } else {
    alert("Please generate a QR code first.");
  }
}
