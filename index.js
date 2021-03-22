const tel = require('telegram-wrapper');

var Telegram;
var list = {};

const run = async() => {
    const data = await Telegram.getUpdates();
    console.log("before: ",list);
    for(var it of data) {
            if(list[it.text] === undefined) {
                list[it.text] = [];
            }
            if(list[it.text].find(item => item === it.chat.id) === undefined) {
            list[it.text].push(it.chat.id);
            await Telegram.sendMessage(it.chat.id, "hello:" + it.text);
            }
    }
    console.log("after: ",list);
}

const init = async () => {
    const Teleconfig = {
        botid: "1706257510:AAH5yQcu3-JVGhUa-5MyltUiudgsNBeEBHI"
    };

    Telegram = tel.connectBot(Teleconfig.botid);
    setInterval(run, 1000 *10);
    console.log("init");
}

init();