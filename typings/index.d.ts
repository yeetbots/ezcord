declare module 'ezcord' {
    import { EventEmitter } from "events";
    import { Client, Presence, User, Message, MessageEmbed } from "discord.js";
    class EzcordClient extends EventEmitter {
        client: Client
        token: string
        prefix: string
        constructor(token: string, prefix: string)
        connect(): void
        setStatus(status: String, options?: {
            statusType: 'WATCHING' | 'PLAYING' | 'LISTENING' | 'STREAMING',
            streamingUrl?: string
        }): Promise<Presence>

        on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        once<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => void): this;
        emit<K extends keyof ClientEvents>(event: K, ...args: ClientEvents[K]): boolean;
    }
    class Command {
        sender: User
        args: Array<string>
        cmd: string
        msg: Message
        constructor(msg: Message, bot: EzcordClient)
        respond(content: string, embed: Embed): Message
    }
    class Embed {
        djs: MessageEmbed
        title: string
        description: string
        thumbnail: string
        fields: Array<{ name: string, value: string }>
        constructor()
        sTitle(title: string): Embed
        sDescription(desc: string): Embed
        sFields(fields: Array<{ name: string, value: string }>): Embed
    }
    interface ClientEvents {
        ready: []
        command: [Command]
        debug: [string]
    }
}