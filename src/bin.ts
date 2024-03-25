// import { Spot } from '@binance/connector-typescript';
const Spot = require('@binance/connector-typescript')
// const { Spot } = require('@binance/connector')

const API_KEY = '';
const API_SECRET = '';
const BASE_URL = 'https://api.binance.com';
// const client = new Spot(API_KEY, API_SECRET)

const client = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL });
client.exchangeInformation().then((res: any) => {
    console.log(res);
}).catch((error: any) => { console.log(error) });