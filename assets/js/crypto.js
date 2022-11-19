Cryptos = [

    {
        "id": 1,
        "nombre": "Bitcoin",
        "MarketCap": "465,11B",
        "porcentajeUltimas24": "-0,23%",
        "estado": "crypto-bajada",
        "icono": "../img/btclogo.png",
    },
    {
        "id": 2,
        "nombre": "Ethereum",
        "MarketCap": "236,65B",
        "porcentajeUltimas24": "+12,65%",
        "estado": "crypto-subida",
        "icono": "../img/Ethereum.png",
    },
    {
        "id": 3,
        "nombre": "BNB",
        "MarketCap": "51,32B",
        "porcentajeUltimas24": "-1,08%",
        "estado": "crypto-bajada",
        "icono": "../img/bnb.png",
    },
    {
        "id": 4,
        "nombre": "Cardano",
        "MarketCap": "19,36B",
        "porcentajeUltimas24": "-2,43%",
        "estado": "crypto-bajada",
        "icono": "../img/cardanologo.png",
    },
    {
        "id": 5,
        "nombre": "XRP",
        "MarketCap": "18,68B",
        "porcentajeUltimas24": "+5,65%",
        "estado": "crypto-subida",
        "icono": "../img/xrp.png",
    },
    {
        "id": 6,
        "nombre": "Polygon",
        "MarketCap": "7,8B",
        "porcentajeUltimas24": "+4,78%",
        "estado": "crypto-subida",
        "icono": "../img/matic.png",
    },
    {
        "id": 7,
        "nombre": "Dogecoin",
        "MarketCap": "10,74B",
        "porcentajeUltimas24": "-0,67%",
        "estado": "crypto-bajada",
        "icono": "../img/dogecoin.png",
    },
    {
        "id": 8,
        "nombre": "Binance USD",
        "MarketCap": "17,73B",
        "porcentajeUltimas24": "+1,25%",
        "estado": "crypto-subida",
        "icono": "../img/binance-usd.png",
    },
    {
        "id": 9,
        "nombre": "Solana",
        "MarketCap": "15,83B",
        "porcentajeUltimas24": "-5,33%",
        "estado": "crypto-bajada",
        "icono": "../img/solana.png",
    },
    {
        "id": 10,
        "nombre": "Polkadot",
        "MarketCap": "9,95B",
        "porcentajeUltimas24": "-2,89%",
        "estado": "crypto-bajada",
        "icono": "../img/polkadot.png",
    },
    {
        "id": 11,
        "nombre": "Avalanche",
        "MarketCap": "8,1B",
        "porcentajeUltimas24": "+3,10%",
        "estado": "crypto-subida",
        "icono": "../img/avalanche.png",
    },
    {
        "id": 12,
        "nombre": "Shiba Inu",
        "MarketCap": "9,4B",
        "porcentajeUltimas24": "-10,47%",
        "estado": "crypto-bajada",
        "icono": "../img/shiba-inu.png",
    }

]
// llamada a la API de Binance (con los parametros que seleccione de la documentacion de la api)
// Fetch - Promesas - JSON
let endpoint = 'https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","BUSDUSDT","ADAUSDT","XRPUSDT","SOLUSDT","DOGEUSDT","MATICUSDT","DOTUSDT","SHIBUSDT","AVAXUSDT"]'
    fetch(endpoint)
    .then (response => response.json())
    .then (data => mostrarData(data))
    .catch(e => console.log(e))

// funcion para tabla de cryptos
const mostrarData = (data)=>{
    console.log(data);
    // concatene siemplemente para probar y utilizar otra herramienta
    const dataTotal = Cryptos.concat(data);
    console.log(dataTotal);
    let body = ''
    for (let i=0; i < data.length; i++) {
        body += `<tr>
                        <th scope="row"> 
                        <div class="d-flex justify-content-center numero-top">${i+1}</div>
                    </th>
                    <td>
                        <div class="d-flex">
                            <img class="imagen-logo-de-monedas" src="${dataTotal[i].icono}" alt="imagen-coin-bitcoin">
                            <div class="moneda-tabla">
                                <a href="">${dataTotal[i].nombre}</a>
                                <span>${data[i].symbol}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <div>$${parseFloat(data[i].price)}</div>
                            <div class=${dataTotal[i].estado}>${dataTotal[i].porcentajeUltimas24}</div>
                        </div>
                    </td>
                    <td>$${dataTotal[i].MarketCap}</td>
                    <td>
                        <button type="button" class="btn btn-dark btn-sm bg-dark">Comprar</button>
                    </td>
                </tr>
        `
    }
    document.getElementById('data').innerHTML = body

}