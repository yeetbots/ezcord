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
        this.member = msg.member
    }
}