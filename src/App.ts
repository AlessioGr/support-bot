import { Client } from "discord.js";
import interactionCreate from "./listeners/InteractionCreate";
import ready from "./listeners/Ready";
import 'dotenv/config';

const TOKEN = process.env.DISCORD_TOKEN;

console.log("Bot is starting...");


const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

interactionCreate(client);
ready(client);

//Legacy listeners:
client.on("messageCreate", async (message) => {
    if (message.content.startsWith("!ping")) {
        message.reply("pong!");
    }
});

client.login(TOKEN);


