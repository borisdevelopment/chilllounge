

const Discord = require("discord.js");
module.exports = {
    name: "play",
    aliases: ["p"],
    cooldowns: 3000,
    description: "Plays song you want!",
    usage: "",
    toggleOff: false,
    developersOnly: false,
    userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    botpermissions: ["ADMINISTRATOR"],
    inVoiceChannel: true,
    run: async (client, message, args) => {

        const string = args.join(' ')
        if (!string) return message.channel.send(`Please enter a song url or query to search.`)
        client.distube.play(message.member.voice.channel, string, {
          member: message.member,
          textChannel: message.channel,
          message
        })
    },
};
  