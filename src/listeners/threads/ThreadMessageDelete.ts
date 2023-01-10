import { ChannelType, Client, EmbedBuilder, TextChannel } from "discord.js";
import 'dotenv/config';
import { handleThreadMessageDeletion } from "../../MessageUploadingManager";

const supportChannelID = process.env.SUPPORT_CHANNEL_ID;

export default (client: Client): void => {
    client.on("messageDelete", async (message) => {

        if(message.channelId != supportChannelID){
            if(message.channel.type == ChannelType.PublicThread && message.channel.parentId == supportChannelID){
                //Handle deleting the message from the REST API
                handleThreadMessageDeletion(message, message.channel);
            }
            return;
        }

        if(!(message.channel instanceof TextChannel)){
            return;
        }

        if(message.author && (message.author.bot || message.author.system)){
            return;
        }


        const threadAttachedToMessage = await message.channel.threads.fetch(message.id);

        //Archive thread
        if(threadAttachedToMessage) {
            const deletedEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle(`Thread Archived`)
                .setDescription(`This thread has been archived because the original message was deleted.`);

            threadAttachedToMessage.send({
                embeds: [deletedEmbed]
            });

            threadAttachedToMessage.setArchived(true);
            console.log("Deleted thread: ",  threadAttachedToMessage.name);
        }

    });
};
