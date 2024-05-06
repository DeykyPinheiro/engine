import Redis from 'ioredis';

import { PaperDataModel } from '../models/PaperDataModel';

export function postDataToChannel(channel: string, data: PaperDataModel) {
    const redis = new Redis();
    const dataConvert = JSON.stringify(new PaperDataModel(data))
    // console.log("escrevendo no canal: " + JSON.stringify(data))
    redis.publish(channel, dataConvert);
}