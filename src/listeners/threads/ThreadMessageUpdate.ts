import {ChannelType, Client} from "discord.js";
import 'dotenv/config';
import { handleThreadMessageUpdate } from "../../MessageUploadingManager";

const supportChannelID = process.env.SUPPORT_CHANNEL_ID;

export default (client: Client): void => {
    client.on("messageUpdate", async (message) => {

        if(message.channelId != supportChannelID){
            if(message.channel.type == ChannelType.PublicThread && message.channel.parentId == supportChannelID){
                //Handle deleting the message from the REST API
                handleThreadMessageUpdate(message, message.channel);
            }
        }
    });
};
