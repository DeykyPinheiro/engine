export class PaperDataModel {
    id: string;
    price: number;
    // time: number,
    // exchange: string,
    // quoteType: string,
    // marketHours: string,
    // changePercent: number,
    // dayVolume: number,
    // change: number,
    // priceHint: number

    constructor(data: any) {
        this.id = data.id;
        this.price = data.price;
    }
}

// {
//     id: 'ETH-USD',
//     price: 3145.190185546875,
//     time: '1714931820000',
//     currency: 'USD',
//     exchange: 'CCC',
//     quoteType: 'CRYPTOCURRENCY',
//     marketHours: 'REGULAR_MARKET',
//     changePercent: 0.7866740226745605,
//     dayVolume: '8933581824',
//     dayHigh: 3166.859130859375,
//     dayLow: 3077.27587890625,
//     change: 24.54931640625,
//     openPrice: 3117.541015625,
//     lastSize: '8933581824',
//     priceHint: '2',
//     vol_24hr: '8933581824',
//     volAllCurrencies: '8933581824',
//     fromcurrency: 'ETH',
//     circulatingSupply: 120097744,
//     marketcap: 377730269000
//   }