const { Client, Intents, Message, Options, VoiceChannel, BaseGuildVoiceChannel, GuildChannel, Interaction, GuildMemberRoleManager, GuildMember, ClientUser } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]});
var PREFIX = "-"
var connection;
const sleep = require('sleep');
var count = 0;
const fs = require('fs');
const ytdl = require("ytdl-core");
const { OpusEncoder } = require('@discordjs/opus');

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
const encoder = new OpusEncoder(48000, 2);

// Encode and decode.
// const encoded = encoder.encode(buffer);
// const decoded = encoder.decode(encoded); 





const { joinVoiceChannel, AudioPlayerStatus } = require('@discordjs/voice');
const { url } = require('inspector');
const { createAudioPlayer, createAudioResource, StreamType, AudioResource, NoSubscriberBehavior } = require('@discordjs/voice');


// const connection = joinVoiceChannel({
// 	channelId: channel.id,
// 	guildId: channel.guild.id,
// 	adapterCreator: channel.guild.voiceAdapterCreator,
// });
// const { createAudioPlayer, createAudioResource, StreamType, AudioResource, NoSubscriberBehavior } = require('@discordjs/voice');

// const player = createAudioPlayer({
// 	behaviors: {
// 		noSubscriber: NoSubscriberBehavior.Pause,
// 	},
// });
// const subscription = connection.subscribe(player);

// const resource = createAudioResource('/Users/atiksh/Downloads/test_song.mp3', { inlineVolume: true });
// resource.volume.setVolume(0.5);
// player.play(resource);

//     player.on(AudioPlayerStatus.Playing, () => {
//     console.log("should be playing")
// })





client.once('ready', () => {
    console.log('Cory is Online!')
});

client.on("ready", () => {
    console.log(client.user.username)
    
})
          
client.on("voiceStateUpdate", (oldMember, newMember) => {
    console.log("a user changes voice state");
});

client.on("messageCreate", async (message) => {
    if(message.author.id == 937393596598980629) return; // Harold Hoyle ID Here 
    if(message.author.id == 670021365797224468) message.channel.send("shitter") 
    if(message.author.id == 670021365797224468) return;

    if(message.author == 697603727397486593)
    {
        message.reply("<:shrek:744992881273471026>")
    }
    
    var trigger = message.content.toLowerCase()
    if(trigger.includes('<@') && trigger.includes("j") && count != 1)
    {
        
        if(message.author.id == 937393596598980629)
        {
            message.channel.send(message.content)
            console.log("spam")
            count = 0; 
        }
        else
        {
            message.channel.send(message.content)
            console.log("spam2")
            count = 0; 
        }
        // if(message.author.bot)
        // {
        //     count = 1
        //     console.log("bot")
        // }
        if(message.author.id == 503720029456695306)
        {
            message.channel.send("i ain't falling for that.")
            count = 1;
        }

        
        
    }    
    else
    {
        count = 0
    }
    if(message.author.bot || message.author.id == 697603727397486593) return;

    if(trigger.includes("stop"))
    {
        message.channel.send("Ok I'll stop :(")
    }
    if(trigger.includes("crash"))
    {
        if(message.author.id != 670021365797224468)
        {
             message.channel.send("I SOLEMNLY SWEAR TO STOP PINGING <:simp:937542255714127944> <:simp:937542255714127944> <:simp:937542255714127944> ")
            message.channel.send("<:simp:937542255714127944> ")
            count = 1;
        }
        else
        {
            message.channel.send("You don't have the right perms " + message.author.username)
            count = 0;
            return;
        }
       

    } 
   

    console.log(message.author.tag)
    console.log(message.content)
    if(trigger.includes("asia"))
    {
        console.log("workking")
        console.log(message.channel.id)
        message.channel.send("<@&930207806152380447> Happy Chinese New Year <:simp:937542255714127944> <:shrek:744992881273471026>")
        console.log(message.author.username)

    }
    if(trigger.includes("hello") || trigger.includes("hi") || trigger.includes("hey"))
    {
        message.channel.send("Hey")
    }
    if(trigger.includes("the"))
    {
        message.channel.send("<:simp:937542255714127944>")
    }
    if(message.content.startsWith(PREFIX))
    {
        const cmd = message.content.substring(PREFIX.length)
        console.log(cmd)
        if(cmd.startsWith("help"))
        {   
            message.reply("My prefix is " + PREFIX)

    
        } 
        if(cmd.startsWith('p htt'))
        {
            
            
           
            try
            {
                const { createAudioPlayer, createAudioResource, StreamType, AudioResource, NoSubscriberBehavior } = require('@discordjs/voice');
                var outputFs
                var url = message.content.substring(3)
                ytdl(url)
                .pipe(outputFs = fs.createWriteStream('test_song_for_ytdl.mp4'))
                outputFs.on('close', () => {
                    console.log("output fs close event")


                    connection = joinVoiceChannel({
                        channelId: message.member.voice.channel.id,
                        guildId: message.guild.id,
                        adapterCreator: message.guild.voiceAdapterCreator
                    })
    
                    const player = createAudioPlayer({
                        behaviors: {
                            noSubscriber: NoSubscriberBehavior.Pause,
                        },
                    });
                    const subscription = connection.subscribe(player);
                    connection.subscribe(player)
                    console.log("subscribed")
    
                    const resource = createAudioResource('/Users/atiksh/Coding2021/DiscordBot/test_song_for_ytdl.mp4', { inlineVolume: true });
                    
                    resource.volume.setVolume(0.5);
    
                    player.play(resource)
    
                    console.log(resource)
    
                })

                

                



                // console.log(ytdl.getVideoID('https://www.youtube.com/watch?v=L_jWHffIx5E'))
                
                // let info = await ytdl.getInfo(ytdl.getURLVideoID('https://www.youtube.com/watch?v=L_jWHffIx5E'));
                // let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
                // console.log('Formats with only audio: ' + audioFormats.length);





            }
            catch (err)
            {
                message.channel.send("seems to be an internal error")
                console.log("err", + console.error(err))
            }
            
                
        }
       
        if(cmd.startsWith("dc"))
        {

            try
            {
                connection.destroy()
            }
            catch
            {
                message.channel.send("I ain't in a vc you moron")
            }
         
            //player.stop() // stops the player, destroys it, not sure if works 
            
        }
        if(cmd.startsWith("kick") || cmd.startsWith("ban"))
        {
                var person = message.mentions.users.first()
                console.log("person" + person)
                
            
                if(person == undefined || person.bot)
                {
                    message.channel.send("Please ping a real person!")
                    console.log("undefined")
                    return;
                }
                var personK = message.guild.members.cache.get(person.id)
                var inviteLink
                inviteLink = await message.channel.createInvite({
                    maxUses: 1
                })
                console.log(inviteLink.code)
                //.then(invite => console.log(`Created an invite with a code of ${invite.code}`))
                await person.send("Hey! You seem to be in a spot of trouble! Click this link to get back into the server! -->  https://discord.gg/" + inviteLink)
                console.log("sent message")

                if(personK == 936023718860308511 || personK == 768483086689370182 || personK == 936391906965995570 || personK.bot)
                {
                    message.channel.send("Do I look like an idiot to you?")
                    message.author.send("Why would you do something like that.")

                    console.log("message.author: " + personK + "  " + message.author + "  " + person)
                }
                else
                {
                    message.author.send("Why would you do something like that.")
                    message.channel.send("Sure!")
                    console.log(person)
                    console.log(person.id)
                    console.log(personK)
                    console.log("kicked")
                    personK.kick()
                }
                if(cmd.startsWith("ban"))
                {
                    message.author.send("Why would you do something like that.")
                    message.channel.send("Sure!")
                    personK.ban()
                }

            

        }
        if(cmd.startsWith("rolegive"))
        {
            var person = message.mentions.users.first();
            if(person == undefined)
            {
                message.channel.send("Please ping a real person!")
                return;
            }            
            var personK = message.guild.members.cache.get(person.id)
            if(message.author.id == 768483086689370182)
            { 
               try
               {
                    //let role = message.guild.roles.cache.find(r => r.id === 744243983445655623);
                    //message.author.roles.add(role)
                
                    //console.log("Role Manager -->        " + GuildMemberRoleManager.add(824807929538281484, "hey"))
                    //console.log(person.roles)
                    var user = message.mentions.members.first();
                    user.roles.add('824807929538281484')
               }
               catch
               {
                    message.channel.send("You don't have the right permissions!")
               }
               

            }
            
            
        }   
        if(cmd.startsWith("roles"))
        {
            var person = message.mentions.users.first();
            if(person == undefined)
            {
                message.channel.send("Please ping a real person!")
                console.log(person)
                return;
            }            
            var personK = message.guild.members.cache.get(person.id)
            if(message.author.id != 697603727397486593)
            {
                var user = message.mentions.members.first();
                user.roles.add('765031022814691372')
                user.roles.add('930605181916286988')
                user.roles.add('930603068066762812')
                user.roles.add('753263670896623668')
                user.roles.remove('824807929538281484')
                message.channel.send("Giving em starter roles!!!")
            }
            else
            {
                message.reply("Aw geez")
            }
            
        }
    }
    

})

client.on("guildMemberAdd", (member) => {
    console.log("Giving them roles automatically? ")
    member.roles.add('765031022814691372')
    member.roles.add('930605181916286988')
    member.roles.add('930603068066762812')
    message.channel.send("Giving em starter roles!!!")

})



client.login('OTM2MDIzNzE4ODYwMzA4NTEx.YfHKBQ.oq4GaoxBL6d7TgnDVpFv-s6PuQo')
