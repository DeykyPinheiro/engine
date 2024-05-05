import Redis from 'ioredis';

export function postDataToChannel(channel: string, data: string) {
    const redis = new Redis();
    data = JSON.stringify(data)
    // console.log("escrevendo no canal: " + JSON.stringify(data))
    redis.publish(channel, data);
}