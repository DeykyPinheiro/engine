import { postDataToChannel } from "./services/RedisService";

const StockSocket = require("stocksocket");

const channelName = 'PaperData';

StockSocket.addTicker("ETH-USD", stockPriceChanged);

function stockPriceChanged(data: any) {
    postDataToChannel(channelName, data);
}