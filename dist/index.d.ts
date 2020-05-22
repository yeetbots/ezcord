import { EventEmitter } from "events";
import { Client, User, Message } from "discord.js";
import { StatusOptions } from './interfaces/StatusOptions'
import { Embed } from './classes/Embed'

declare module 'ezcord' {
    class EzcordClient extends EventEmitter {
        client: Client
        token: string
        prefix: string
        constructor(token: string, prefix: string)
        connect(): void
        setStatus(status: string, options?: StatusOptions): void
    }
    class Command {
        author: User
        args: Array<string>
        cmd: string | undefined
        msg: Message
        constructor(msg: Message, bot: EzcordClient)
        respond(content: string, embed?: Embed): void
    }
    interface EmbedAuthor {
        name?: string
        url?: string
    }
    interface EmbedField {
        name: String
        value: String
    }
    interface StatusOptions {
        streamingUrl?: string
        statusType: 'WATCHING' | 'PLAYING' | 'LISTENING' | 'STREAMING'
    }
}