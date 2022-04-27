import { Client } from "discord.js";
import interactionCreate from "./listeners/InteractionCreate";
import ready from "./listeners/Ready";
import messageCreate from "./listeners/MessageCreate";
import messageDelete from "./listeners/MessageDelete";
import messageUpdate from "./listeners/MessageUpdate";
import 'dotenv/config';

const TOKEN = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");


const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ],
    partials: [ //What the bot should react to BEFORE the bot logged in
        "MESSAGE",
        "CHANNEL",
        "REACTION",
    ]
});

//Initialize listeners
interactionCreate(client);
ready(client);
messageCreate(client);
messageDelete(client);
messageUpdate(client);

client.login(TOKEN);


