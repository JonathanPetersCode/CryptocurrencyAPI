const bitButton = document.querySelector(".btn1");
const ethButton = document.querySelector(".btn2");
const litButton = document.querySelector(".btn3");
const ethResultsData = document.querySelector("#ethResults");
const btcResultsData = document.querySelector("#btcResults");
const ltcResultsData = document.querySelector("#ltcResults");

fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD")
.then(response => response.json())
  .then(data => bitButton.addEventListener("click", function (){
    btcResultsData.innerHTML = "$" + data.BTC.USD;
  }));

fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD")
.then(response => response.json())
  .then(data => ethButton.addEventListener("click", function(){
    ethResultsData.innerHTML = "$" + data.ETH.USD;
}));

fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD")
  .then(response => response.json())
  .then(data => litButton.addEventListener("click", function () {
    ltcResultsData.innerHTML = "$" + data.LTC.USD;
  }));

(function() {
  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }

  function startTime() {
      var today = new Date(),
          hours = checkTime(today.getHours()),
          minutes = checkTime(today.getMinutes()),
          seconds = checkTime(today.getSeconds());
      document.querySelector('#time').innerHTML = hours + ":" + minutes + ":" + seconds + " EST";
      t = setTimeout(function () {
          startTime()
      }, 500);
  }
  startTime();
})();



