module.exports = {
    name: 'marco',
    desciption: "this is a polo command",
    execute(message, args){
        message.channel.send('`Polo!`')
    }
}