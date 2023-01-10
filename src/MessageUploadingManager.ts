import { Message, PartialMessage, ThreadChannel, ForumChannel } from "discord.js";

export function handleThreadMessageDeletion(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Deleted message from support thread! Message content: ", message.content);
}

export function handleThreadMessageCreation(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Created message in support thread! Message content: ", message.content);
}

export function handleThreadMessageUpdate(message: Message<boolean> | PartialMessage, thread: ThreadChannel){
    if(message.content?.length == 0){
        return;
    }
    console.log("Updated message in support thread! Message content: ", message.content);
}
