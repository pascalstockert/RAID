/* Command finder and handler */
/* Mainly created to prevent cluttering of the index file */

/* Command finder tries to find a command for given string, returns undefined if none found */

import { _status } from "./status";

export const commandFinder = (command: string): (Function | undefined) => {
  if (command === 'status') {
    return _status;
  }
  return undefined;
};

/* Command handler executes provided command */

import { Message } from "discord.js";
import { sendMessage, concat } from "../helpers";

export const commandHandler = (command: (Function | undefined), message: Message) => {
  if (command === undefined) {
    return sendMessage(message.channel, 'Command not found!');
  }
  command(message);
};
