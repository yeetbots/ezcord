/**
 * Options for a status.
 * @interface
 */
const StatusOptions = {
    streamingUrl: String,
    statusType: 'WATCHING' || 'PLAYING' || 'LISTENING' || 'STREAMING'
}
exports.StatusOptions = StatusOptions