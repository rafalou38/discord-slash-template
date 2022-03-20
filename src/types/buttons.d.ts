import { Client, ButtonInteraction } from "discord.js";
import { CommandReturn } from "./commands";

declare interface IButtonList {
    [key: string]: {
        run: (
            interaction: ButtonInteraction,
            args: string | undefined,
        ) => Promise<CommandReturn>;
    };
}
