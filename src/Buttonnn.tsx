import React, { FC } from 'react';

import crypto from 'crypto';

const Buttonnn: FC = () => {
    const getTicketPrice = async (symbol: any) => {
        try {
            const priceFetch = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
            const priceBody = await priceFetch.json();
            console.log(parseFloat(priceBody.price))
            return parseFloat(priceBody.price)
        } catch (error) {
            console.log("Error", error);

        }
    }

    const makeTrade = async (symbol: any, price: any, action: any, quantity: any) => {
        try {
            const apiKey = 'AzPTqDI5wQyPHw7tTF9fX9xOoIfLBy4Go4h4rYjczXPiW3gIxuzLKjk0oFohIF5Z';
            const apiSecret = 'VoyphR9Rt7etuhmHwkwxzLsgSP0vj89vCQZ0R4Myg2KwQHPjRJb7AguTaP5BaaLA';
            const endpoint = 'https://api.binance.com/api/v3/order';
            const timestamp = Date.now();
            const params: any = {
                symbol,
                side: action,
                type: 'LIMIT',
                quantity,
                price,
                timestamp,
                timeInForce: 'GTC'
            };

            let queryString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
            const signature = crypto.createHmac('sha256', apiSecret)
                .update(queryString)
                .digest('hex')

            queryString += '&signature=' + signature;

            const url = endpoint + '?' + queryString;

            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'X-MBX-APIKEY': apiKey,
                    'Content-Type': 'application/x-www-urlencoded'
                }
            });

            const response = await request.json();
            return response;

        } catch (error) {
            console.log('Error', error);

        }
    }
    const trade = async () => {
        const symbol = 'SHIBUSDT';
        const price: any = await getTicketPrice(symbol);
        const action = 'BUY'; //SELL
        const quantity = Math.round(5 / price)
        const transaction = await makeTrade(symbol, price, action, quantity)
        console.log(transaction);
    }



    return (
        <div>
            <button onClick={() => getTicketPrice('SHIBUSDT')}>PRICE</button>
            <button onClick={trade}>TRADE</button>
        </div>

    )
}

export default Buttonnn;