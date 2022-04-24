
const { Fight } = require('weky')
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
module.exports = {
   name: "fight",
   aliases: ["battle"],
   cooldowns: 3000,
   description: "Battle with AI or mentioned user.",
   usage: "fight @user(optional)",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    
    const member = message.mentions.users.first()
    if (member.bot) return message.reply("You cant fight a bot!")
    await Fight({
        message: message,
        opponent: member,
        embed: {
            title: 'Fight',
            color: '#5865F2',
            footer: '©️ Made by BorisIvanic#3552',
            timestamp: true
        },
        buttons: {
          hit: 'Hit',
          heal: 'Heal',
          cancel: 'Stop',
          accept: 'Accept',
          deny: 'Deny'
        },
        acceptMessage: '<@{{challenger}}> has challenged <@{{opponent}}> for a fight!',
        winMessage: 'GG, <@{{winner}}> won the fight!',
        endMessage: '<@{{opponent}}> didn\'t answer in time. So, I dropped the game!',
        cancelMessage: '<@{{opponent}}> refused to have a fight with you!',
        fightMessage: '{{player}} you go first!',
        opponentsTurnMessage: 'Please wait for your opponents move!',
        highHealthMessage: 'You cannot heal if your HP is above 80!',
        lowHealthMessage: 'You cannot cancel the fight if your HP is below 50!',
        returnWinner: true,
        othersMessage: 'Only {{author}} can use the buttons!'
    });
   },
};
