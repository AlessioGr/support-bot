# Support bot for discord

## Deploying
1. Deploy the project with the Dockerfile to some host (I use Northflank, you can just select Dockerfile there). The command to start the bot is pnpm start - it's included in the Dockerfile as well.
2. Make sure all the environment variables are set (as seen in the .env.sample). You get all those tokens by "registering/creating" your bot with discord right here: https://discord.com/developers/applications/. That's also where you set stuff like the Bot name, permissions and profile picture.

When deploying with the bot token set as environment variable and the bot registered in Discord, the discord bot will be online.
