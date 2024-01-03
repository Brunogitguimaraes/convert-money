const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".convert-other-currencies");
const currencySelectConvert = document.querySelector(".convert-currency");
const currencyConversionAudio = document.querySelector(
  ".currency-convert-audio"
);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-to-convert"); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value-usa"); // Outras moedas

  console.log(currencySelect.value);

  const dolarToday = 4.85;
  const euroToday = 5.34;
  const libraToday = 6.13;
  const bitcoinToday = 208495.97;

  const dollarToEuro = 0.9;
  const dollarToLibra = 0.78;
  const dollarToBitcoin = 0.000024;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

  if (currencySelectConvert.value == "dolar-tow") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  //Conversão a partir do real

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }
  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      minimumSignificantDigits: 2,
      maximumSignificantDigits: 6,
    }).format(inputCurrencyValue / bitcoinToday);
  }
  //Conversão a partir do Dólar Americano
  if (
    currencySelectConvert.value == "dolar-two" &&
    currencySelect.value == "dolar"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }
  if (
    currencySelectConvert.value == "dolar-two" &&
    currencySelect.value == "real"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }
  if (
    currencySelectConvert.value == "dolar-two" &&
    currencySelect.value == "euro"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * dollarToEuro);
  }
  if (
    currencySelectConvert.value == "dolar-two" &&
    currencySelect.value == "libra"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * dollarToLibra);
  }
  if (
    currencySelectConvert.value == "dolar-two" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      minimumSignificantDigits: 2,
      maximumSignificantDigits: 6,
    }).format(inputCurrencyValue * dollarToBitcoin);
  }
  currencyConversionAudio.play();
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/Real.png";
  }
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/USA.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/Euro.png";
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }
  convertValues();
}
function changeValuesConvert() {
  const currencyNameValue = document.getElementById("currency-value-convert");
  const currencyImageConvert = document.querySelector(".currency-image");

  if (currencySelectConvert.value == "real-two") {
    currencyNameValue.innerHTML = "Real";
    currencyImageConvert.src = "./assets/Real.png";
  }
  if (currencySelectConvert.value == "dolar-two") {
    currencyNameValue.innerHTML = "Dólar americano";
    currencyImageConvert.src = "./assets/USA.png";
  }
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
currencySelectConvert.addEventListener("change", changeValuesConvert);
convertButton.addEventListener("click", convertValues);
