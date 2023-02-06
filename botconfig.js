module.exports = {
  Admins: ["1071575166645186692"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/", //Support Server Link
  Token: process.env.Token || "MTA3MTU3NTE2NjY0NTE4NjY5Mg.GDVFe_.ssl6oqUWbpU2cux67I3S7XICXAf2qtNhQ1lIw4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1071575166645186692", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "RKSsXuRCdetzpCuYYV-BJFMYl1AMWjNr", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Why is the color orange so hot?", //A Secret like a password
  IconURL:
    "https://23.84.38.245/logo.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "ssl.freelavalink.ga",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "www.freelavalink.ga",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "c5a2c6eb1af04335a167edda8bb865a8", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "bbf1e243173247759ee972bc6ecb30ea", //Spotify Client Secret
  },
};
