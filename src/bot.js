import { Client } from 'discord.js';
import { readFile } from 'fs/promises';
const token = JSON.parse(await readFile(new URL('../config.json', import.meta.url))).token;

//Discord.js setup
const client = new Client({ intents: [256, 1, 512, 32768] })
client.once('ready', () => {
	console.log('Ready!')
})

client.login(token)

client.on('interactionCreate', async interaction => {
    
})