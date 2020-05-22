"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
const discord_js_1 = require("discord.js");
/**
 * A field of an embed.
 * @typedef EmbedField
 * @memberof Embed
 * @type {Object}
 * @property {string} name Name of the field.
 * @property {string} value Value of the field.
 */
/**
 * The author (name and pfp) at the top of an embed.
 * @typedef EmbedAuthor
 * @memberof Embed
 * @type {Object}
 * @property {string} [name] The name of the author.
 * @property {string} [url] The url to the author's PFP.
 */
/**
 * @class
 * Represents an embed.
*/
class Embed {
    /**
     * Create an embed
     * @constructor
     */
    constructor() {
        /** The embed as a MessageEmbed.
         * @memberof Embed
         */
        this.djs = new discord_js_1.MessageEmbed();
        /** The embed's title.
         * @memberof Embed
         */
        this.title = '';
        /** The embed's description.
         * @memberof Embed
         */
        this.description = '';
        /** The embed's author.
         * @memberof Embed
         */
        this.author;
        /** The embed's thumbnail URL.
         * @memberof Embed
         */
        this.thumbnail = '';
        /** The embed's fields.
         * @memberof Embed
         */
        this.fields = [];
    }
    /**
     * Sets the title of the embed.
     * @param {String} title The title of the embed.
     * @returns {Embed} The new embed.
     */
    sTitle(title) {
        this.djs.setTitle(title);
        this.title = title;
        return this;
    }
    /**
     * Sets the description of the embed.
     * @memberof Embed
     * @param {String} desc The description of the embed.
     * @returns {Embed} The new embed.
     */
    sDescription(desc) {
        this.djs.setDescription(desc);
        this.description = desc;
        return this;
    }
    /**
     * Sets the fields of the embed.
     * @memberof Embed
     * @param {Array<EmbedField>} fields The title of the embed.
     * @returns {Embed} The new embed.
     */
    sFields(fields) {
        for (var field of fields) {
            this.djs.addField(field.name, field.value);
            this.fields.push(field);
        }
        return this;
    }
}
exports.Embed = Embed;
