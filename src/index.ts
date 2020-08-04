import * as dotenv from 'dotenv';

const res = dotenv.config();

if (res.error) {
  console.log(res.error);
}

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
};
const discordToken = process.env.DC_TOKEN;

import * as Discord from 'discord.js'
import { _status } from './commands/status';
import { sendMessage, concat } from './helpers';
const client = new Discord.Client();
client.login(process.env.DC_TOKEN);

console.log('Connecting to Discord..');

client.on('ready', () => console.log('Connecting to Discord successful!'));

client.on('message', (message: Discord.Message) => {
  if (client.user !== null) {
    if (message.mentions.has(client.user)) {
      _status(message);
    }
  }
  if (message.content.startsWith('.gr')) {
    sendMessage(message.channel, concat(' ', 'Executed command', message.content));
  }
})
