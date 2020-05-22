"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
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
        var _a;
        /** The author of the message.
         * @memberof Command
         */
        this.author = msg.author;
        /** The args provided.
         * @memberof Command
         */
        this.args = msg.content.slice(bot.prefix.length).split(/ +/);
        /** The command provided.
         * @memberof Command
         */
        this.cmd = (_a = this.args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        /** The whol
         * e message as a Message object.
         * @memberof Command
         */
        this.msg = msg;
    }
    /**
     * Responds to a command.
     * @memberof Command
     * @param {String} content The message (use '' if you are sending an embed)
     * @param {Embed} [embed] The message embed to send
     */
    respond(content, embed) {
        if (embed) {
            this.msg.channel.send(content, embed.djs);
        }
        else {
            this.msg.channel.send(content);
        }
    }
}
exports.Command = Command;
