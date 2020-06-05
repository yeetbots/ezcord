# EzCord
[![NPM](https://nodei.co/npm/ezcord.png)](https://nodei.co/npm/ezcord/)
~~Hello everyone, we understand the issues that we are having at the moment. You can downgrade to 2.7.8 to fix this.~~ Fixed
## Example usage:
```js
const { EzcordClient } = require('ezcord');
const bot = new EzcordClient('token', 'prefix');
bot.on('command', (command) => {
    if(command.cmd === 'ping') {
        command.respond('Pong!');
    };
});
bot.connect();
```
EzCord is a quick and easy way for you to develop a discord bot.
