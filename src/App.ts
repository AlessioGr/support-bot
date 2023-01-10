import { Client, Partials } from "discord.js";
import interactionCreate from "./listeners/InteractionCreate";
import ready from "./listeners/Ready";
import ThreadMessageCreate from "./listeners/threads/ThreadMessageCreate";
import ThreadMessageDelete from "./listeners/threads/ThreadMessageDelete";
import ThreadMessageUpdate from "./listeners/threads/ThreadMessageUpdate";
import 'dotenv/config';

const TOKEN = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");


const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
    ],
    partials: [ //What the bot should react to BEFORE the bot logged in
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ],
});

//Initialize listeners
interactionCreate(client);
ready(client);
ThreadMessageCreate(client);
ThreadMessageDelete(client);
ThreadMessageUpdate(client);

client.login(TOKEN);


