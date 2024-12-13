let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrtext = document.getElementById("qrtext");

function generateQr() {
  const inputText = qrtext.value.trim(); // Trim any leading/trailing spaces

  if (inputText.length > 0) {
    // Generate the QR code image URL
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(inputText); // Properly encode the input string

    // Show the QR code image box
    imgBox.classList.add("show-img");
  } else {
    // If input is empty, add an error class to the input field and show an error briefly
    qrtext.classList.add("errors");
    setTimeout(() => {
      qrtext.classList.remove("errors");
    }, 1000);
  }
}

function downloadQr() {
  if (qrImg.src) {
    const link = document.createElement("a");
    link.href = qrImg.src;
    link.download = "qrcode.png"; // Set the file name for download
    link.click(); // Trigger the download
  } else {
    alert("Please generate a QR code first.");
  }
}
