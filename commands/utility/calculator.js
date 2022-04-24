const math = require('math-expression-evaluator');
const ms = require("ms");
const moment = require("moment")
const {
  MessageEmbed,
  MessageAttachment
} = require("discord.js");
const { MessageButton, MessageActionRow } = require('discord.js')
const { Calculator } = require('weky');

const Discord = require("discord.js");
module.exports = {
   name: "calculator",
   aliases: ["calc"],
   cooldowns: 3000,
   description: "Sends you an advanced calculator.",
   usage: "calculator",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    await Calculator({
        message: message,
        embed: {
            title: 'Calculator',
            color: "ff000",
            footer: `${message.author.username}'s calculator!`,
            timestamp: false,
        },
        disabledQuery: 'Calculator got disabled!',
        invalidQuery: 'The provided equation is invalid!',
        othersMessage: 'Only <@{{author}}> can use the buttons!',
    });
   },
};
