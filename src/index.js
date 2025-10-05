
const { Client, GatewayIntentBits } = require('discord.js');
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


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content === 'MUD' || message.content === 'mud' || message.content === 'Mud'|| message.content === 'MUD!'|| message.content === 'mud!'|| message.content === 'Mud!'|| message.content === '<:mudball:1423251589350559786>') {
        message.reply('MUD');
        message.react('<:mudball:1423251589350559786>');
    }
})


client.login('MTQyMzU5NzIyODI2MTUxMTE4OQ.GQInj4.blQcQOPlUoMFX9Ko6bQIC8ckFQoIINOiihdySo');


