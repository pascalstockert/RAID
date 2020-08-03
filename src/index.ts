const dotenv = require('dotenv');

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

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DC_TOKEN);

console.log('Connecting to Discord..');
client.on('ready', () => {console.log('Connected')});
