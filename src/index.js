
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
    ]
});


client.once('ready', () => {
    console.log('MUD online!')
});


client.on('messageCreate', message => {
    if (message.author.bot) return;
    const messageContent = message.content.toLowerCase();
    if (messageContent.includes('mud') || messageContent.includes('<:mudball:1423251589350559786>')) {
        message.reply('MUD');
        message.react('<:mudball:1423251589350559786>');
    }
});


const messagesFilePath = './text.txt';
let randomMessages = [];
try {
    const fileContent = fs.readFileSync(messagesFilePath, 'utf-8');
    randomMessages = fileContent.split('\n').filter(line => line.trim() !== '');
} catch (error) {
    console.error('Error reading messages file:', error);
}


client.on('ready', async () => {
    setInterval(async () => {
        const channelId = '1424371488571527331'; 
        const channel = await client.channels.fetch(channelId);
        const randomIndex = Math.floor(Math.random() * randomMessages.length);
        const selectedMessage = randomMessages[randomIndex];
        channel.send(selectedMessage);
    }, 50156147);
});


client.login(process.env.BOT_TOKEN)


