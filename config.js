try {
    require('dotenv').config();
} catch (err) {
    console.warn('dotenv package not found, using environment variables directly');
}

module.exports = {
    bot: {
        tokens: [
          process.env.DISCORD_TOKEN,                  // Main bot token
          process.env.DISCORD_TOKEN_2,              // 2 bot token
       //   process.env.DISCORD_TOKEN_3,              // 3 bot token
      //    process.env.DISCORD_TOKEN_4,              // 4 bot token
     //     process.env.DISCORD_TOKEN_5,              // 5 bot token
        ].filter(Boolean),

        defaultLanguage: 'en', // ar | en لغة البوت
        
        activity: {
            name: '# 𝐇istori𝐐 , 𝐄mpire .', // رسالة حالة البوت
            type: 'WATCHING', // PLAYING, STREAMING, LISTENING, WATCHING, COMPETING
            status: 'idle' // online, idle, dnd, invisible
        }
    },
    server: {
        guildId: '613081875837091844',         // ايدي السيرفر
        broadcastRoleId: '1378867356750844036', // ايدي الرول اللي يستخدم عليها البوت
        reportChannelId: '1379272409575587910' // ايدي الروم اللي يرسل فيه البوت التقارير
    },
    broadcast: {
        cooldownTime: 1000, // لا تلعب فيها
        memberCooldown: 100, // لا تلعب فيها
        requestsPerSecond: 1 // لا تلعب فيها
    },

    colors: {
        primary: '#5865F2',    // Discord Blue (used for standard messages)
        success: '#57F287',    // Green (used for successful operations)
        warning: '#FEE75C',    // Yellow (used for warnings)
        error: '#ED4245',      // Red (used for errors)
        neutral: '#5D5D5D'     // Gray (used for neutral messages)
    }
};
