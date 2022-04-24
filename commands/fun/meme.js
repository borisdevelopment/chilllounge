const Discord = require("discord.js");
const { getPost, getImage } = require('random-reddit')
const memecommandsubreddit = require("../../botconfig/emoji.json")
module.exports = {
   name: "meme",
   aliases: [],
   cooldowns: 3000,
   description: `Sends meme from ${memecommandsubreddit.memecommandsubreddit}`,
   usage: "meme",
   toggleOff: false,
   developersOnly: false,
   userpermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
   botpermissions: ["ADMINISTRATOR"],

   run: async (client, message, args) => {
    const image = await getPost(memecommandsubreddit.memecommandsubreddit)
    const embed = new Discord.MessageEmbed()
    .setImage(image.url)
    .setAuthor(`${image.title} | ⬆ ${image.ups} upvotes!`)
    .setFooter(`Author: ${image.author} | Subreddit: ${image.subreddit_name_prefixed} `)
    .setColor('RANDOM')
    message.reply({
        embeds: [embed]
    })

   },
};