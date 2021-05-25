function urlVisitor() {

const https = "https://";
const urlAddressValue = document.getElementById("urlAddress").value;

if (urlAddressValue.includes("http://")) {
    if (confirm("HTTP link detected. Proceed?")) {
      window.location.href = urlAddressValue;
    } else {
      return 0;
    }
}

else if (urlAddressValue.includes(https)) {
    window.open(urlAddressValue);
}

else {
    window.open(https.concat(urlAddressValue));
  }
  
}

const subButton = document.getElementById("subButton");
const urlAddress = document.getElementById("urlAddress");

subButton.addEventListener("click", urlVisitor, false);
urlAddress.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      urlVisitor();
    }
});
