module.exports = {
    name: 'ping',
    desciption: "this is a ping command",
    execute(message, args){
        message.channel.send('`pong!`')
    }
}