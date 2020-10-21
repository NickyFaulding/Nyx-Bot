module.exports = {
    name: 'coinflip',
    desciption: "heads or tails.",
    execute(message, args){
        var random;

        random = Math.floor(Math.floor(Math.random() * 2));
        message.channel.send(random)        

        if(random == 0){
            message.channel.send("`Heads.`")
        }
        else if(random == 1){
            message.channel.send("`Tails.`")
        }
        else{
            message.channel.send("Nicky messed up how random works but lets say it was heads...")
        }
    }
}