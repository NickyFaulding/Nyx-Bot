module.exports = {
    name: 'random',
    desciption: "random number between 1 - 100.",
    execute(message, args){
        message.channel.send("`Your random number is : " + Math.random(Math.floor() * 101)+"`")
    }
}