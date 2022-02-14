import dotenv from "dotenv";
dotenv.config(); // load discord token from .env

import Discord from "discord.js";
import { log } from "./utils/log";
import { handleInteractionCreate } from "./events/interactionCreate";
import { context } from "./context";

const intents: Discord.IntentsString[] = [
    "GUILDS",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGES",
];
const client = new Discord.Client({
    intents: intents,
});
context.client = client;

client.once("ready", async () => {
    log(
        `🤖 Bot ${client.user?.username}#${client.user?.tag} successfully started 🚀`,
    );
});

client.on("interactionCreate", handleInteractionCreate);

client.login(process.env.BOT_TOKEN);
