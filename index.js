const mineflayer = require('mineflayer')
const fs = require('fs');
let rawdata = fs.readFileSync('config.json');
let data = JSON.parse(rawdata);
var host = data["ip"];
var username = data["name"]
var bot = mineflayer.createBot({
  host: host,
  username: username
});

const mineflayer = require('mineflayer');
const antiAfk = require("."); // require("mineflayer-antiafk");
const bot = mineflayer.createBot({ 
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4],
    password: process.argv[5]
});



bot.on("spawn", ()=>{
    bot.loadPlugin(antiAfk);
    bot.afk.start();
})
