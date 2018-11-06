let xhr = new XMLHttpRequest();
let bitButton = document.getElementById("btn1");

//Bitcoin Current Price

bitButton.addEventListener("click", function(){
  xhr.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD");
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){
    let result = JSON.parse(xhr.responseText).BTC.USD;
    document.getElementById("btcResults").innerHTML = `$${result} USD`;
  };
}
xhr.send();
});

//Ethereum Current Price

let xhr2 = new XMLHttpRequest();
let ethButton = document.getElementById("btn2");

ethButton.addEventListener("click", function(){
  xhr.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD");
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){
    let result = JSON.parse(xhr.responseText).ETH.USD;
    document.getElementById("ethResults").innerHTML = `$${result} USD`;
  };
}
xhr.send();
});

//Litecoin Current Price

let xhr3 = new XMLHttpRequest();
let litButton = document.getElementById("btn3");

litButton.addEventListener("click", function(){
  xhr.open("GET", "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD");
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){
    let result = JSON.parse(xhr.responseText).LTC.USD;
    document.getElementById("ltcResults").innerHTML = `$${result} USD`;
  };
}
xhr.send();
});

console.log("Hi, I'm Jonathan Peters, web developer. I created this app using the CryptoCompare API and XHR, feel free to use my code in your own applications. Cheers!! - Nov. 2018" )