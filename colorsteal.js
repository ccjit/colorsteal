// ==UserScript==
// @name         colorsteal
// @namespace    https://multiplayerpiano.org/#
// @version      1.1.1
// @description  steal colorssss >:33333
// @author       ccjt
// @match        https://multiplayerpiano.org/*
// @match        https://multiplayerpiano.net/*
// @icon         data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAAXNSR0IArs4c6QAAAnpJREFUeF7tmlFShDAMhrfjDdRX9XLO6JH0ePqsZ8AJM2FiJ23DJiTAxhdZKIV8Tf4kQJmmabrc8F9JAOkBGQKpATesgZcUwcwCnSxQSmGj40yJoxkCYPyZDG3p3KYAjgAxAbRE0GL1LObYOkWrPaAWSqobNQDJWBzjpT8qANwK032tbVzV+jjs9zJ8uQdNCFgD8DYeIOzKAxJAQGPa7QUklaBE2GjMU1XvCebW6j/UAK8biL5OdoOR3SAXYt5CGOYBEVUim7ajPCABBLTbh/QAS0/ZFYC5DGWeONW1AaZJ3N+rO7g5R7VGmAg2n9BUobG2oaqzyPB8rQj+fn4Pa5mHt+fhGK5DxBVtrT7nHa4AJMbjTUohcM8QKIBenbCmO1WXwmg8GAbb+L+31BIIhwMABnPGc2BqACMRrENgrXCKQuRaDaDuTwG0thGUWAycBqqywBYa4GT3chkVAJhFAuHx/eWfXd4NTw+qGoBkxUbFi2SOrca4A4DVtyxvtWBcAfx8fM33C0K5FwguAGiVtzcIrgAwjyME+A0CGSmKIQDAcIQAACiQUUxLqsnRHPS4OwBMnZga1xi/tq+QgHAHIKkbRjde7srl/vVpNEx0PBwAunTdXLV6DGsvCAUwaqLQWM5rrLRgtwBO6wF1/0BDoPaI1jMGq9Wf0/K17bBIYTqDrhVDS+NDAWgBWp0f5gFWBmjnSQBRGqBdOavz0wPSAyJ7USs/VsyTIZAhkCHQ/jqx9bIRQu4s3LqfytaGjt61K7Qo7FQWABqqeVMbZtHKC88AJAbPnRP5emMvz/Wl9nKf5i/d4C0BqG1dQqD3dQVH70giiO8m6Ws5tOkPIuP6YibZoUkAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==
if (localStorage.resetname == undefined) {
    let resetname = "꧁⌬♩♪♫ ⋰〈 🏳️‍⚧️ ᴄᴄᴊᴛ 🏳️‍⚧️ ⌨ 〉⋱ ♫♪♩⌬꧂" // you can change this using "define reset name [name]"
    localStorage.setItem('resetname', resetname)
}
if (localStorage.resetcolor == undefined) {
    let resetcolor = "#b3acf1" // you can change this using "define reset color [color]"
    localStorage.setItem('resetcolor', resetcolor)
}
// "u": "n", derwear haha gottem
// (^preserve^)
MPP.client.on('a', function(m) {
    let args = m.a.split(' ');
    let cmd = args[0];
    let randomhex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    let colorname = new Color(m.p.color).getName().substring(10).trim()
    // cmds
    if (m.p.id == MPP.client.participantId) {
        if (cmd == "help") {
            if (args.length == 1) {
                MPP.chat.send("Please choose a category: userset, info, fun, other")
            } else if (args.length == 2) {
                if (args[1] == "userset") {
                    MPP.chat.send("Commands: steal - steals color from ID | color - sets color to hex | name - sets name | shuffle - makes you a random color | reset - resets you to your defaults | stat - this command sets a status for you")
                } else if (args[1] == "info") {
                    MPP.chat.send("Commands: mycolor - tells you your current color | settings - logs room settings to console | about - info about bot OR says info about user - Usage: about - tells you bot info ; about [ID] - tells you info about user | help - lists commands OR lists info about command - Usage: help - tells you possible commands ; help usage [command name] - tells you command usage | define - defines a variable. | whereami - tells you the room name.")
                } else if (args[1] == "fun") {
                    MPP.chat.send("Commands: flip - flips or fails")
                } else if (args[1] == "other") {
                    MPP.chat.send("Commands: fave - favorites an item | faves - tells you favorited items | wipefaves - erases favorited items|| | Deleted commands: favestat - favorites a status | wipestats - wipes favorited stats | favestats - views favorited stats||")
                } else if (args[1] == "usage") {
                    if (args.length == 2) {
                        MPP.chat.send("Please specify a command to know about. Example: help usage steal")
                    } else if (args[2] == "steal") {
                        MPP.chat.send("Steal - This command takes the color from the ID you specify and sets your color to it. - Example: steal [ID]")
                    } else if (args[2] == "color") {
                        MPP.chat.send("Color - This command sets your color to the hex code you specify. - Example: color #bababa - This example command sets your color to Baby Talk Grey.")
                    } else if (args[2] == "name") {
                        MPP.chat.send("Name - This command sets your name to the text you specify. - Example: name Anonymous is using colorsteal - This example command sets your name to \"Anonymous is using colorsteal\".")
                    } else if (args[2] == "shuffle") {
                        MPP.chat.send("Shuffle - This command sets your color to a completely random color. - Example: shuffle - This example sets your color to a random color that you've probably never seen before.")
                    } else if (args[2] == "reset") {
                        MPP.chat.send("Reset - This command resets your name and color to your default name and color. You can change your reset name and color by doing \"define reset name [name]\" and \"define reset color [hex code]\" respectively. - Example: reset")
                    } else if (args[2] == "mycolor") {
                        MPP.chat.send("MyColor - This command tells you your current color in hex. - Example: mycolor - This example command tells you your current color.")
                    } else if (args[2] == "settings") {
                        MPP.chat.send("Settings - This command logs the current room settings in your DevTools console. You can access it by pressing F12 or CTRL+Shift+I and clicking on \"Console\" on the tabs on the top of the menu that opens.")
                    } else if (args[2] == "about") {
                        MPP.chat.send("About - This command tells you bot info when no ID is provided, but if you specify an ID, it will tell you the info about that user. - Example 1: about ; This example sends a message with bot info. - Example 2: about [ID] ; This example sends a message with the info about the specified ID.")
                    } else if (args[2] == "help") {
                        MPP.chat.send("Help - This command displays the list of commands in a category, or tells you the usage of a command. - Example 1: help info ; This example shows the commands in the \"info\" category. - Example 2: help usage steal ; This command shows the usage of the \"steal\" command.")
                    } else if (args[2] == "define") {
                        MPP.chat.send("Define - This command defines a variable. - Example: define reset name Anonymous | This example command sets your reset name to Anonymous, so that when you use the \"reset\" command, your name is set to \"Anonymous\".")
                    } else if (args[2] == "whereami") {
                        MPP.chat.send("WhereAmI - This command says your current room name. - Example: whereami - This example command says that \"You're in the room \"" + MPP.client.channel.id + "\".\"")
                    } else if (args[2] == "stat") {
                        MPP.chat.send("Stat - This command adds a status at the end of your name. - Example: stat AFK - This example command sets your name to \"" + m.p.name + " [AFK]\".")
                    } else if (args[2] == "flip") {
                        MPP.chat.send("Flip - This command has a 69% chance of saying \"*flips*\", and a 31% chance of saying \"*fails*\".")
                    } else if (args[2] == "fave") {
                        MPP.chat.send("Fave - This command favorites an item. - Example: fave #bababa - baby gray - This example command favorites the string \"#bababa - baby gray\". You can check your favorited items with \"faves\".")
                    } else if (args[2] == "faves") {
                        MPP.chat.send("Faves - This command tells you your favorited items.")
                    } else if (args[2] == "wipefaves") {
                        MPP.chat.send("WipeFaves - This command erases all your favorited items permanently, with no way to bring them back.")
                    /*} else if (args[2] == "favestat") {
                        MPP.chat.send("FaveStat - This command favorites a status. This command is prone to deletion because you can also use the \"fave\" command for the same effect.")
                    } else if (args[2] == "wipestats") {
                        MPP.chat.send("WipeStats - This command wipes all of your favorited statuses, with no way to recover them.")
                    } else if (args[2] == "favestats") {
                        MPP.chat.send("FaveStats - This command shows your favorited statuses.")*/
                    }
                }
            }
        }
        if (cmd == "fave") {
            if (args.length == 1) {
                localStorage.setItem("fave", localStorage.fave + ", color: " + m.p.color + " - name: " + m.p.name)
                MPP.chat.send('faved!')
            } else {
                localStorage.setItem("fave", localStorage.fave + ", " + m.a.substring(4).trim())
                MPP.chat.send("faved!")
            }
        }
        if (cmd == "faves") {
            if (localStorage.fave == "") {
                MPP.chat.send("you have no faves! (maybe you wiped your faves..?)")
            } else {
                MPP.chat.send(localStorage.fave)
            }
        }
        if (cmd == "wipefaves") {
            if (args.length == 1) {
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
        if (cmd == "stat") {
            if (m.a.substring(4).trim().length + m.p.name.length + 2 > 40) {
                MPP.chat.send("stat too long!! (final name length: " + (m.a.substring(4).trim().length + m.p.name.length + 2) + ")")
            } else {
                MPP.chat.send("name " + m.p.name + " [" + m.a.substring(4).trim() + "]")
                MPP.chat.send("set!")
            }
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
            MPP.chat.send("Shuffled color: " + randomhex + " - " + colorname)
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
                    name: resetname,
                    color: resetcolor
                }
            }]);
        }
        if (cmd == "mycolor") {
            MPP.chat.send(m.p.color + " - *" + colorname + "*")
        }
        if (cmd == "settings") {
            console.log(JSON.stringify(MPP.client.channel.settings))
        }
        if (cmd == "define") {
            if (args.length == 1) {
                MPP.chat.send("Please insert a category to define. Categories: reset, help - or get a variable with \"get\"")
            } else {
                if (args[1] == "reset") {
                    if (args.length == 2) {
                        MPP.chat.send("Please insert a variable to define. Variables: name, color - or reset to defaults with \"default\"")
                    } else {
                        if (args[2] == "name") {
                            let resetname = `${m.a.substring(17).trim()}`
                            localStorage.setItem("resetname", resetname)
                            MPP.chat.send("Your reset name is now " + localStorage.resetname + ".")
                        } else if (args[2] == "color") {
                            let resetcolor = `${m.a.substring(18).trim()}`
                            localStorage.setItem("resetcolor", resetcolor)
                            MPP.chat.send("Your reset color is now " + localStorage.resetcolor + ".")
                        } else if (args[2] == "default") {
                            let resetname = `Anonymous`
                            localStorage.setItem("resetname", resetname)
                            MPP.chat.send("Your reset name is now Anonymous.")
                            let resetcolor = randomhex
                            localStorage.setItem("resetcolor", resetcolor)
                            MPP.chat.send("Your reset color is now " + localStorage.resetcolor + ".")
                        }
                    } else if (args[1] == 'get') {
                        if (args.length == 2) {
                            MPP.chat.send("Please insert a variable. Variables: name, color")
                        } else if (args[2] == "name") {
                            MPP.chat.send("Your reset name is " + localStorage.resetname)
                        } else if (args[2] == "color") {
                            MPP.chat.send('Your reset name is ' + lccaoStorage.resetcolor)
                        }
                    }
                }
            }
        }
        if (cmd == "about") {
            if (args.length == 0) {
                MPP.chat.send(`Bot made using pure JavaScript and a little bit of code theft - you can find this bot at https://github.com/ccjit/colorsteal - made by ccjt in 2024-2025`)
            } else {
                MPP.chat.send(args[1] + "'s info - Name: " + MPP.client.ppl[args[1]].name + " Color: " + MPP.client.ppl[args[1]].color + " - Mouse Position: X" + MPP.client.ppl[args[1]].x + ", Y" + MPP.client.ppl[args[1]].y + " - AFK: " + MPP.client.ppl[args[1]].afk + " ||You can use \"steal " + args[1].trim() + "\" to steal their color!||")
            }
        }
        if (cmd == "goto") {
            MPP.client.setChannel(m.a.substring(4).trim())
        }
        if (cmd == "whereami") {
            MPP.chat.send("You're in the room \"" + MPP.client.channel._id + "\".")
        }
        if (cmd == "name") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    name: m.a.substring(4).trim()
                }
            }]);
            MPP.chat.send("Name set to " + args[1] + ".")
        }
        if (cmd == "color") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    color: args[1]
                }
            }]);
            MPP.chat.send("Color set to " + args[1] + ".")
        }
    }
});
