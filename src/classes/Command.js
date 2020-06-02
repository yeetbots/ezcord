const { User, Message } = require('discord.js')
const EzcordClient = require('./EzcordClient')
const { Embed } = require('./Embed')

/**
 * @class
 * Class representing a bot command.
 */
class Command {
    /**
     * Create a command message.
     * @constructor
     * @param {Message} msg The message that you wish to turn into a command.
     * @param {EzcordClient} bot The client that instansiated this.
     */
    constructor(msg, bot) {
        /** The author of the message.
         * @memberof Command
         */
        this.sender = msg.author
        /** The args provided.
         * @memberof Command
         */
        // @ts-ignore
        this.args = msg.content.slice(bot.prefix.length).split(/ +/)
        /** The command provided.
         * @memberof Command
         */
        // @ts-ignore
        this.cmd = this.args.shift().toLowerCase()
        /** The whol
         * e message as a Message object.
         * @memberof Command
         */
        this.msg = msg
    }
    /**
     * Responds to a command.
     * @memberof Command
     * @param {String} content The message (use '' if you are sending an embed)
     * @param {Embed} [embed] The message embed to send
     */
    respond(content, embed) {
        if(embed) {
            this.msg.channel.send(content, embed.djs)
        } else {
            this.msg.channel.send(content)
        }
    }


}

exports.Command = Command