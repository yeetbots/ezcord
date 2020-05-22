# EzCord
[![NPM](https://nodei.co/npm/ezcord.png)](https://nodei.co/npm/ezcord/)
## Example usage:
```js
const { EzcordClient } = require('ezcord');
const bot = new EzcordClient('token', 'prefix');
bot.on('command', (command) => {
    if(command.cmd === 'ping') {
        command.msg.reply('Pong!');
    };
});
bot.connect();
```
EzCord is a quick and easy way for you to develop a discord bot.