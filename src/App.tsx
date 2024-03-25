import React, { useEffect, useState } from 'react';
import './App.css';
import Buttonnn from './Buttonnn'
// import { Spot } from '@binance/connector-typescript';
// const { Spot } = require('@binance/connector')



function App() {

    // const API_KEY = '0DO5mG4mGblZrqfKze2bbIiCYA1WJndhdBmONHbKuowuRVwuO8gbC6K6rbkXCvHo';
    // const API_SECRET = 'WeK0g638VMiMegdhyL2UDVv7uPZEAFQguoPNotOVfDJeea1kySKtDulfJWrk4NxY';
    // const BASE_URL = 'https://api.binance.com';
    // // const client = new Spot(API_KEY, API_SECRET)

    // const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
    // client.exchangeInformation().then((res) => {
    //     console.log(res);
    // }).catch(err => { console.log(err) });
    // const [binanceData, setBinanceData] = useState<any>([]);
    // const [commexData, setCommexData] = useState<any>(null);
    // const fetchCryptoInfoBinance = () => {
    //     fetch('https://api.binance.com/sapi/v1/convert/exchangeInfo', {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json"
    //         }
    //         // headers: {
    //         //     "fromAsset": "BTC",
    //         //     "toAsset": "USDT",
    //         // }
    //     }).then(res => res.json()).then(data => setBinanceData(data))
    // }

    // const fetchCryptoInfoCommex = () => {
    //     fetch("https://api.commex.com/api/v1/exchangeInfo?symbol=BTC", {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json"
    //         }
    //         // headers: {
    //         //     "fromAsset": "BTC",
    //         //     "toAsset": "USDT",
    //         // }
    //     }).then(res => res.json()).then(data => console.log(data)
    //     )
    // }

    // const fetchCryptoInfoCommexSymbol = () => {
    //     fetch("https://api.commex.com/fapi/v1/ticker/price?symbol=BTCUSDT", {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json"
    //         }
    //         // headers: {
    //         //     "fromAsset": "BTC",
    //         //     "toAsset": "USDT",
    //         // }
    //     }).then(res => res.json()).then(data => console.log(data)
    //     )
    // }
    return (
        <Buttonnn />
    );

    // return (
    //     <div className="App">
    //         <div style={{ 'display': 'flex', 'justifyContent': 'center', 'columnGap': '20px', }}>
    //             <div style={{ 'border': '1px', 'display': 'flex', 'flexDirection': 'column', 'rowGap': '5px', 'justifyContent': 'center', 'width': '40vw' }}>
    //                 <button onClick={fetchCryptoInfoBinance}>FETCH BINANCE</button>
    //                 {binanceData.map((inf: any) => <div key={inf.fromAsset}> - From asset: {inf.fromAsset}, To asset: {inf.toAsset} -</div>)}
    //             </div>
    //             <div style={{ 'border': '1px', 'display': 'flex', 'flexDirection': 'column', 'rowGap': '5px', 'justifyContent': 'center', 'width': '40vw' }}>
    //                 <button onClick={fetchCryptoInfoCommex}>FETCH COMMEX</button>
    //                 {/* {commexData.map((inf: any, index: number) => <div key={index + 1}>{inf}</div>)} */}
    //             </div>
    //             <div style={{ 'border': '1px', 'display': 'flex', 'flexDirection': 'column', 'rowGap': '5px', 'justifyContent': 'center', 'width': '40vw' }}>
    //                 <button onClick={fetchCryptoInfoCommexSymbol}>FETCH SYMBOL</button>
    //                 {/* {commexData.map((inf: any, index: number) => <div key={index + 1}>{inf}</div>)} */}
    //             </div>

    //         </div>

    //     </div>
    // );
}

export default App;
