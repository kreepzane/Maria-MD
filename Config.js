const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "27842930255"],
global.ownername = process.env.OWNER_NAME || "😴kreep",
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "South Africa"

global.botname = process.env.BOTNAME || "Kreep4pres",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "opium typeshii",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "Kreep",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *you got what you wanted* ',
    prem: '🍭 *Nah Uh you aint premium*',
    admin: '🍭 *You aint admin*',
    botAdmin: '🍭 *Give me adminship for tht to happen* ',
    owner: '🍭 *No pooks, only Kreep can do so*',
    group: '🍭 *only for groups.*',
    private: '🍭 *only wokrs in priv chat*',
    wait: '🍭 *Gimme a sec* ',    
    error: '🍭 *ErOrR failed.*',
}

module.exports = {
ownernumber: global.ownernumber,27842930255
ownername: global.ownername,kreep
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
