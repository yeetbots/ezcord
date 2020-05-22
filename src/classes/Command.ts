import { User, Message } from "discord.js"
import { EzcordClient } from "./EzcordClient"
import { Embed } from './Embed'

/**
 * @class
 * Class representing a bot command.
 */
class Command {
    author: User
    args: Array<string>
    cmd: string | undefined
    msg: Message
    /**
     * Create a command message.
     * @constructor
     * @param {Message} msg The message that you wish to turn into a command.
     * @param {EzcordClient} bot The client that instansiated this.
     */
    constructor(msg: Message, bot: EzcordClient) {
        /** The author of the message.
         * @memberof Command
         */
        this.author = msg.author
        /** The args provided.
         * @memberof Command
         */
        this.args = msg.content.slice(bot.prefix.length).split(/ +/)
        /** The command provided.
         * @memberof Command
         */
        this.cmd = this.args.shift()?.toLowerCase()
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
    respond(content: string, embed?: Embed) {
        if(embed) {
            this.msg.channel.send(content, embed.djs)
        } else {
            this.msg.channel.send(content)
        }
    }


}

export { Command }