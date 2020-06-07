/** 
 * @class
 * Represents a message.
 */
class Message {
    /** 
     * Create a message from a Discord.js message
     * @constructor
     */
    constructor(msg) {
        super()
        /** Represents the author of the message. (Discord.JS)
         * @memberof Message
         * @type {User}
         */
        this.author = msg.author
        /** Represents the content of the message.
         * @memberof Message
         * @type {String}
         */
        this.text = msg.content
        /** Represents the guild member of this.author.
         * @memberof Message
         * @type {String}
         */
        this.member = msg.member
        /**
         * The client that read the message. (Discord.JS)
         * @memberof Message
         * @type {Client}
         */
        this.client = msg.client
        /** 
         * The channel that the message was sent in. (Discord.JS)
         * @memberof Message
         * @type {Channel}
         */
        this.channel = msg.channel
    }
}