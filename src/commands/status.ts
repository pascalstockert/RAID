import { Channel, Client, Message } from "discord.js";
import { randomSelection } from "../helpers";

const strings = [
  'Hello there!',
  'I\'m working!',
  'Boop beep boop!',
  'Beep boop beep!',

]

export const _status = (message: Message) => {
  message.channel.send(randomSelection(strings));
};