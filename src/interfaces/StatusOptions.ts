/**
 * Options for a status.
 * @interface
 */
interface StatusOptions {
    streamingUrl?: string,
    statusType?: 'WATCHING' | 'PLAYING' | 'LISTENING'| 'STREAMING'
}
export { StatusOptions }