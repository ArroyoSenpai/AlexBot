module.exports = {
  TOKEN: null, // توكن البوت الآن null
  ownerID: [""], // ضع ايدي الأونر هنا
  botInvite: "", // ضع رابط دعوة البوت هنا
  supportServer: "", // ضع رابط السيرفر هنا
  mongodbURL: "mongodb://username:password@localhost:27017/databaseName", // ضع رابط MongoDB هنا
  status: '', // ضع اسمك أو الحالة التي تود أن يظهر بها البوت
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "", // ضع ايدي روم المشاكل هنا

  sponsor: {
    status: true,
    url: "", // ضع رابط السيرفر الخاص بالرعاية هنا
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
