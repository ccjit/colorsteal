// ==UserScript==
// @name         colorsteal
// @namespace    https://multiplayerpiano.org/#
// @version      1.1-alpha2.3
// @description  steal colorssss >:33333
// @author       ccjt
// @match        https://multiplayerpiano.*/*
// @icon         data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAAXNSR0IArs4c6QAAAnpJREFUeF7tmlFShDAMhrfjDdRX9XLO6JH0ePqsZ8AJM2FiJ23DJiTAxhdZKIV8Tf4kQJmmabrc8F9JAOkBGQKpATesgZcUwcwCnSxQSmGj40yJoxkCYPyZDG3p3KYAjgAxAbRE0GL1LObYOkWrPaAWSqobNQDJWBzjpT8qANwK032tbVzV+jjs9zJ8uQdNCFgD8DYeIOzKAxJAQGPa7QUklaBE2GjMU1XvCebW6j/UAK8biL5OdoOR3SAXYt5CGOYBEVUim7ajPCABBLTbh/QAS0/ZFYC5DGWeONW1AaZJ3N+rO7g5R7VGmAg2n9BUobG2oaqzyPB8rQj+fn4Pa5mHt+fhGK5DxBVtrT7nHa4AJMbjTUohcM8QKIBenbCmO1WXwmg8GAbb+L+31BIIhwMABnPGc2BqACMRrENgrXCKQuRaDaDuTwG0thGUWAycBqqywBYa4GT3chkVAJhFAuHx/eWfXd4NTw+qGoBkxUbFi2SOrca4A4DVtyxvtWBcAfx8fM33C0K5FwguAGiVtzcIrgAwjyME+A0CGSmKIQDAcIQAACiQUUxLqsnRHPS4OwBMnZga1xi/tq+QgHAHIKkbRjde7srl/vVpNEx0PBwAunTdXLV6DGsvCAUwaqLQWM5rrLRgtwBO6wF1/0BDoPaI1jMGq9Wf0/K17bBIYTqDrhVDS+NDAWgBWp0f5gFWBmjnSQBRGqBdOavz0wPSAyJ7USs/VsyTIZAhkCHQ/jqx9bIRQu4s3LqfytaGjt61K7Qo7FQWABqqeVMbZtHKC88AJAbPnRP5emMvz/Wl9nKf5i/d4C0BqG1dQqD3dQVH70giiO8m6Ws5tOkPIuP6YibZoUkAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==
// please change these variables with your name:
let name = "insert name"
let color = "insert color in hex, example: #123456"
// "u": "n", derwear haha gottem
// (^preserve^)
MPP.client.on('a', function(m) {
    let args = m.a.split(' ');
    let cmd = args[0];
    let randomhex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    // cmds
    if (m.p.id == MPP.client.participantId) {
        if (cmd == "fave") {
            localStorage.setItem("fave", localStorage.fave + ", " + m.a.substring(4).trim())
            MPP.chat.send("faved!")
        }
        if (cmd == "faves") {
            if (localStorage.fave == "") {
                MPP.chat.send("you have no faves! (maybe you wiped your faves..?)")
            } else {
                MPP.chat.send(localStorage.fave)
            }
        }
        if (cmd == "wipefaves") {
            if (args.length == 0) {
                MPP.chat.send("ARE YOU SURE? [y/n]")
            } else {
                if (args[1] == "y") {
                    MPP.chat.send("wiped!")
                    localStorage.setItem("fave", "")
                } else {
                    if (args[1] == "n") { MPP.chat.send("ok!") }
                }
            }
        }
        if (cmd == "favestats") {
            MPP.chat.send(localStorage.stat)
        }
        if (cmd == "stat") {
            if (m.a.substring(4).trim().length + m.p.name + 2 > 39) {
                MPP.chat.send("stat too long!! (final name length: " + (m.a.substring(4).trim().length + m.p.name.length + 2) + ")")
            } else {
                MPP.chat.send("name " + m.p.name + " [" + m.a.substring(4).trim() + "]")
                MPP.chat.send("set!")
            }
        }
        if (cmd == "favestat") {
            let stat = localStorage.stat
            localStorage.setItem("stat", localStorage.stat + ", " + m.a.substring(8).trim())
            MPP.chat.send("set!")
        }
        if (cmd == "wipestats") {
            localStorage.setItem("stat", "")
            MPP.chat.send("wiped!")
        }
        if (cmd == "flip") {
            if (Math.random() < (69/100)) {
                MPP.chat.send("\*flips*")
            } else {
                MPP.chat.send("\*fails*")
            }

        }
        if (cmd == "shuffle") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    color: randomhex
                }
            }]);
        }
        if (cmd == "steal") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    color: MPP.client.ppl[`${args[1]}`].color
                }
            }]);
        }
        if (cmd == "reset") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    name: name,
                    color: color
                }
            }]);
        }
        if (cmd == "mycolor") {
            MPP.chat.send(MPP.client.ppl[MPP.client.participantId].color)
        }
        if (cmd == "settings") {
            console.log(JSON.stringify(MPP.client.channel.settings))
        }
        if (cmd == "define") {
            if (args[1] == "reset") {
                if (args[2] == "name") {
                    let resetname = `${m.a.substring(17).trim()}`
                } else if (args[2] == "color") {
                    let resetcolor = `${m.a.substring(18).trim()}`
                }
            }
        }
        if (cmd == "about") {
            MPP.chat.send(JSON.stringify(MPP.client.ppl[args[1]]))
        }
        if (cmd == "colorsteal") {
            MPP.chat.send(`Bot made using pure JavaScript and a little bit of code theft - you can find this bot at https://github.com/ccjit/colorsteal - made by @a6e8d7759ace24004ef54998 in 2024-2025`)
        }
        if (cmd == "goto") {
            MPP.client.setChannel(args[1])
        }
        if (cmd == "whereami") {
            MPP.chat.send(MPP.client.channel._id)
        }
        if (cmd == "name") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    name: m.a.substring(4).trim()
                }
            }]);
        }
        if (cmd == "color") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    color: args[1]
                }
            }]);
        }
    }
});
// since no one is gonna see this i'll just back up my username here
// ꧁⌬♩♪♫ ⋰〈 🏳️‍⚧️ ᴄᴄᴊᴛ 🏳️‍⚧️ ⌨ 〉⋱ ♫♪♩⌬꧂
