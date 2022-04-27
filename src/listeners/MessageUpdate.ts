import {Client} from "discord.js";
import 'dotenv/config';
import {handleMessageUpdate} from "../MessageUploadingManager";

const supportChannelID = process.env.SUPPORT_CHANNEL_ID;

export default (client: Client): void => {
    client.on("messageUpdate", async (message) => {

        if(message.channelId != supportChannelID){
            if(message.channel.type == "GUILD_PUBLIC_THREAD" && message.channel.parentId == supportChannelID){
                //Handle deleting the message from the REST API
                handleMessageUpdate(message, message.channel);
            }
        }
    });
};
