// ==UserScript==
// @name         object steal
// @namespace    https://multiplayerpiano.org/#
// @version      1.1.2
// @description  colorsteal but it's a javascript object you can use
// @author       ccjt
// @match        https://multiplayerpiano.org/*
// @match        https://multiplayerpiano.net/*
// @icon         data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAAAXNSR0IArs4c6QAAAnpJREFUeF7tmlFShDAMhrfjDdRX9XLO6JH0ePqsZ8AJM2FiJ23DJiTAxhdZKIV8Tf4kQJmmabrc8F9JAOkBGQKpATesgZcUwcwCnSxQSmGj40yJoxkCYPyZDG3p3KYAjgAxAbRE0GL1LObYOkWrPaAWSqobNQDJWBzjpT8qANwK032tbVzV+jjs9zJ8uQdNCFgD8DYeIOzKAxJAQGPa7QUklaBE2GjMU1XvCebW6j/UAK8biL5OdoOR3SAXYt5CGOYBEVUim7ajPCABBLTbh/QAS0/ZFYC5DGWeONW1AaZJ3N+rO7g5R7VGmAg2n9BUobG2oaqzyPB8rQj+fn4Pa5mHt+fhGK5DxBVtrT7nHa4AJMbjTUohcM8QKIBenbCmO1WXwmg8GAbb+L+31BIIhwMABnPGc2BqACMRrENgrXCKQuRaDaDuTwG0thGUWAycBqqywBYa4GT3chkVAJhFAuHx/eWfXd4NTw+qGoBkxUbFi2SOrca4A4DVtyxvtWBcAfx8fM33C0K5FwguAGiVtzcIrgAwjyME+A0CGSmKIQDAcIQAACiQUUxLqsnRHPS4OwBMnZga1xi/tq+QgHAHIKkbRjde7srl/vVpNEx0PBwAunTdXLV6DGsvCAUwaqLQWM5rrLRgtwBO6wF1/0BDoPaI1jMGq9Wf0/K17bBIYTqDrhVDS+NDAWgBWp0f5gFWBmjnSQBRGqBdOavz0wPSAyJ7USs/VsyTIZAhkCHQ/jqx9bIRQu4s3LqfytaGjt61K7Qo7FQWABqqeVMbZtHKC88AJAbPnRP5emMvz/Wl9nKf5i/d4C0BqG1dQqD3dQVH70giiO8m6Ws5tOkPIuP6YibZoUkAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==
let Colorsteal = {
    things: {
        randomhex: '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'),
        colorname: function (hex) {
            if (new Color(hex).getName().length > 10) {
                new Color(hex).getName().substring(10).trim
            } else {
                new Color(hex).getName()
            }
        }
    },
    variables: {
        resetname: localStorage.resetname,
        resetcolor: localStorage.resetcolor,
        set: function (variableName, value) {
            if (variableName == undefined) {
                console.log("Please specify a variable to change. - Variables: resetname, resetcolor")
            } else {
                if (variableName == "resetname") {
                    if (value == undefined) {
                        console.log("Please specify a value to set to. - Value type: string aka text")
                    } else {
                        if (value.length > 40) {
                            console.log('Value is too long. | Length: ' + value.length + ", Maximum length: 40")
                        } else {
                            localStorage.setItem('resetname', value)
                        }
                    }
                } else if (variableName == "resetcolor") {
                    if (value == undefined) {
                        console.log("Please specify a value to set to. - Value type: string, hex color")
                    } else {
                        if (!value.includes('#') || !["#", "a", "b", "c", "d", "e", "f"].some(letters => value.includes(letters)) || value.length > 7) {
                            console.log("Value is invalid. Please insert a proper hex color. Example: #b3acf1")
                        } else {
                            localStorage.setItem('resetcolor', value)
                        }
                    }
                }
            }
        },
        get: function (variableName) {
            if (variableName == undefined) {
                console.log("Please specify a variable to view. - Variables: resetname, resetcolor")
            } else if (variableName == "resetname") {
                console.log("Your reset name is " + Colorsteal.variables.resetname)
            } else if (variableName == "resetcolor") {
                console.log("Your reset color is " + Colorsteal.variables.resetcolor)
            }
        }
    },
    get: {
        name: MPP.client.ppl[MPP.client.getOwnParticipant()._id].name,
        color: MPP.client.ppl[MPP.client.getOwnParticipant()._id].color,
        _id: MPP.client.getOwnParticipant()._id,
        id: MPP.client.participantId,
        channelName: MPP.client.channel._id,
        user: {
            color: function (userId) {
                MPP.client.ppl[userId].color
            }
        }
    },
    shuffle: function() {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: this.things.randomhex
            }
        }]);
        console.log(`Shuffled color: ${this.things.randomhex} - ${this.things.colorname(randomhex)}`)
    },
    steal: function(id) { 
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: MPP.client.ppl[id].color
            }
        }]); 
    },
    reset: function() { 
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: Colorsteal.variables.resetname,
                color: Colorsteal.variables.resetcolor
            }
        }]); 
    },
    setColor: function(hexColor) {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: hexColor
            }
        }]); 
    },
    setName: function(string) {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: string
            }
        }]); 
    },
    setUser: function(name, hexColor) {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: name,
                color: hexColor
            }
        }]); 
    },
    goTo: function(channelId) {
        MPP.client.setChannel(channelId)
    },
    whereAmI: console.log(MPP.client.channel._id),
    about: function (_id) {
        if (_id == undefined) {
            MPP.chat.send(`Bot made using pure JavaScript and a little bit of code theft - you can find this bot at https://github.com/ccjit/colorsteal - made by ccjt in 2024-2025`)
        } else {
            MPP.chat.send(_id + "'s info - Name: " + MPP.client.ppl[_id].name + " Color: " + MPP.client.ppl[_id].color + " - *" + new Color(MPP.client.ppl[_id].color).getName + "* - Mouse Position: X" + MPP.client.ppl[_id].x + ", Y" + MPP.client.ppl[_id].y + " - AFK: " + MPP.client.ppl[_id].afk + " | You can use Colorsteal.steal(\"" + _id + "\") to steal their color!")
        }
    },
}
