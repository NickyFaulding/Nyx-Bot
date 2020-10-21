module.exports = {
    name: 'tellmeiamstupid',
    desciption: "this command tells the truth",
    execute(message, args){
        message.channel.send('`You are stupid.`')
    }
}