import { Client, MessageEmbed, TextChannel, ThreadChannel } from "discord.js";
import 'dotenv/config';
import { handleMessageCreation}  from "../MessageUploadingManager";

const supportChannelID = process.env.SUPPORT_CHANNEL_ID;

export default (client: Client): void => {
    client.on("messageCreate", async (message) => {

        if(message.channelId != supportChannelID){
            if(message.channel.type == "GUILD_PUBLIC_THREAD" && message.channel.parentId == supportChannelID){
                //Handle deleting the message from the REST API
                handleMessageCreation(message, message.channel);
            }
            return;
        }

        if(!(message.channel instanceof TextChannel)){
            return;
        }

        if(message.author.bot || message.author.system){
            return;
        }
        const thread: ThreadChannel = await message.startThread({
            name: message.content,
            autoArchiveDuration: 1440,
            reason: 'Needed a separate thread for food',
        });

        console.log(`Created thread: ${thread.name}`);


        const suggestEmbed = new MessageEmbed()
            .setColor('#FEE75C')
            .setTitle(`Thread Created`)
            .setAuthor({
                name: ``,
            })
            .setDescription(`Please continue your support request here.`)
            .setTimestamp()
            .setFooter({
                text: `Requested by ${message.author.tag}.`,
                iconURL: message.author.displayAvatarURL(),
            });

        thread.send({embeds: [suggestEmbed]});
    });
};
