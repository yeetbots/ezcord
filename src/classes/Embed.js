const { MessageEmbed } = require('discord.js')
/**
 * A field of an embed.
 * @typedef {{
    name: String,
    value: String
   }} EmbedField
 * @memberof Embed
 * @type {Object}
 * @property {string} name Name of the field.
 * @property {string} value Value of the field.
 */
/** 
 * @class
 * Represents an embed.
*/
// @ts-ignore
class Embed {
    /** 
     * Create an embed
     * @constructor
     */
    constructor() {
        /** The embed as a MessageEmbed.
         * @memberof Embed
         * @type {MessageEmbed}
         */
        this.djs = new MessageEmbed()
        /** The embed's title.
         * @memberof Embed
         * @type {String}
         */
        this.title = ''
        /** The embed's description.
         * @memberof Embed
         * @type {String}
         */
        this.description = ''
        /** The embed's thumbnail URL.
         * @memberof Embed
         * @type {String}
         */
        this.thumbnail = ''
        /**
         * The embed's fields.
         * @memberof Embed
         * @type {EmbedField[]}
         */
        this.fields = []

    }
    
    /**
     * Sets the title of the embed.
     * @param {String} title The title of the embed.
     * @returns {Embed} The new embed.
     */
    sTitle(title) {
        this.djs.setTitle(title)
        this.title = title
        return this
    }
    /**
     * Sets the description of the embed.
     * @memberof Embed
     * @param {String} desc The description of the embed.
     * @returns {Embed} The new embed.
     */
    sDescription(desc) {
        this.djs.setDescription(desc)
        this.description = desc
        return this
    }
    /**
     * Sets the fields of the embed.
     * @memberof Embed
     * @param {EmbedField[]} fields The title of the embed.
     * @returns {Embed} The new embed.
     */
    sFields(fields) {
        for(var field of fields) {
            this.djs.addField(field.name, field.value)
            this.fields.push(field)
        }
        return this
    }


}
exports.Embed = Embed