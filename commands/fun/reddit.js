const Discord = require("discord.js");
const { getPost, getImage } = require('random-reddit')
module.exports = {
   name: "reddit",
   aliases: ["subreddit"],
   cooldowns: 3000,
   description: `Sends image from subreddit u say(Make sure there's no r/ part in the value)`,
   usage: "reddit [subreddit](Make sure there's no r/ part in the value)",
   toggleOff: true,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    if (!args[0]) return message.reply("You need to provide subreddit (Make sure there's no r/ part in the value)")
    if (args[0].startsWith("r/")) return message.reply("Make sure there's no r/ part in the value")
    const image = await getImage(args[0])
    const embed = new Discord.MessageEmbed()
    .setImage(image)
    .setColor('RANDOM')
 

    const error = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription("Error with getting image from subreddit.")

        .setColor('RANDOM') 
        
    

        message.reply({ embeds: [embed] }).catch(err => message.reply({ embeds: [error.addFields({name: "More details.", value: `\`\`\`${err}\`\`\``})] }));
   },
};