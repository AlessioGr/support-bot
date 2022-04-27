import { Message, PartialMessage, ThreadChannel } from "discord.js";

export function handleMessageDeletion(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Deleted message from support thread! Message content: ", message.content);
}

export function handleMessageCreation(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Created message in support thread! Message content: ", message.content);
}

export function handleMessageUpdate(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Updated message in support thread! Message content: ", message.content);
}
