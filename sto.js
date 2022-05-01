    //joining vc
    ytdl('https://www.youtube.com/watch?v=L_jWHffIx5E')
    .pipe(fs.createWriteStream('test_song_for_ytdl.mp4'))
    console.log(ytdl.getVideoID('https://www.youtube.com/watch?v=L_jWHffIx5E'))
    let info = await ytdl.getInfo(ytdl.getURLVideoID('https://www.youtube.com/watch?v=L_jWHffIx5E'));
    let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    console.log('Formats with only audio: ' + audioFormats.length);

    connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })
    console.log("connected to vc111!!11!!")


    const { createAudioPlayer, createAudioResource, StreamType, AudioResource, NoSubscriberBehavior } = require('@discordjs/voice');

    const player = createAudioPlayer({
        behaviors: {
            noSubscriber: NoSubscriberBehavior.Pause,
        },
    });
    const subscription = connection.subscribe(player);
    
    var resource = createAudioResource('/Users/atiksh/Downloads/test_song.mp4', { inlineVolume: true });
    resource.volume.setVolume(0.8);

    player.play(resource);
    
    
        player.on(AudioPlayerStatus.Playing, () => {
        console.log("should be playing")
    })
   