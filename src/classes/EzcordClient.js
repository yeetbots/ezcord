const { Client } = require('discord.js')
const { EventEmitter } = require('events')
const { Command } = require('./Command')
const { StatusOptions } = require('../interfaces/StatusOptions')

/**
 * @class
 * Represents a discord bot.
 * @extends EventEmitter
 * @example
 * const bot = new EzcordClient('token', 'prefix');
 * bot.connect();
 */
class EzcordClient extends EventEmitter {
    /**
     * Create a bot.
     * @constructor
     * @param {String} token Your bot's token.
     * @param {String} prefix Your bot's prefix.
     */
    constructor(token, prefix) {
        const bot = new Client()
        super()
        /** The discord.js client.
         * @memberof EzcordClient */
        this.client = bot
        /** The bot's token.
         * @memberof EzcordClient */
        this.token = token
        /** The bot's prefix.
         * @memberof EzcordClient */
        this.prefix = prefix
        this.client.on('message', (msg) => {
            if(!msg.content.startsWith(this.prefix) || msg.author.bot || msg.channel.type === 'dm') return;
            this.emit('command', new Command(msg, this))
        })
        this.client.on('ready', () => {
            this.emit('ready')
            console.log('ready')
        })
        

    }

    /**
     * Connects to Discord with the token you set
     * @memberof EzcordClient
     */
    connect() {
        this.client.login(this.token)
    }
    /**
     * Options for a status.
     * @typedef {{
        streamingUrl: String,
        statusType: 'WATCHING' | 'PLAYING' | 'LISTENING' | 'STREAMING'
       }} StatusOptions
     * @memberof EzcordClient
     * @type {Object}
     * @property {string} [streamingUrl] Url for the Streaming status
     * @property {'WATCHING' | 'PLAYING' | 'LISTENING'| 'STREAMING'} [statusType] The status type
     */

    /**
     * Sets the bot's status.
     * @param {String} status What you want the status to be.
     * @param {StatusOptions} options Options for the status.
     * @memberof EzcordClient
     */
    setStatus(status, options) {
        if(!this.client.user) throw new Error('Not logged in yet.');
        if(!options) {
            return this.client.user.setActivity(status)
        }
        this.client.user.setActivity(status, {
            type: options.statusType,
            url: options.streamingUrl
        })
    }
    
}
exports = EzcordClient