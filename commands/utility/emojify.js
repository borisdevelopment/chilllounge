const emojify = require("discord-emojify");
const Discord = require("discord.js");
module.exports = {
   name: "emojify",
   aliases: [],
   cooldowns: 3000,
   description: "Emojifies text😁",
   usage: "emojify",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    if (!args.length) return message.channel.send("Provide text to emojify!");
    const emojified = await emojify(args.join(" ")) // Emojify all arguments!
    message.channel.send(emojified);
   },
};
