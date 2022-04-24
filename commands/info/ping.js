const Discord = require("discord.js");

module.exports = {
   name: "ping",
   aliases: [],
   description: "Returns Websocket Ping",
   botpermissions: ["ADMINISTRATOR"],
   usage: "How Fast The Bot is?",
   cooldowns: 2000,
   developersOnly: false,
   toggleOff: false,
   run: async (client, message, args) => {
      message.channel.send(`Pinging...`).then((m4) => {
         setTimeout(() => {
            m4.edit(`\`${client.ws.ping}ms\` is my latency`);
         }, 500);
      });
   },
};
 