/* General helper functions */

export const randomSelection = <T>(array: Array<T>): T => {
  const arrayLength = array.length;
  const randomIndex = Math.floor(Math.random() * arrayLength);
  return array[randomIndex];
};

export const concat = (separator: string, ...strings: Array<string>): string => {
  let concatString = '';
  for (const string of strings) {
    concatString += string + separator;
  }
  return concatString;
};

/* D.JS helper functions */
import { Message, TextChannel, DMChannel, NewsChannel } from "discord.js";

export const sendMessage = (channel: (TextChannel | DMChannel | NewsChannel), message: string): Promise<Message | Array<Message>> => {
  return channel.send(message);
};
