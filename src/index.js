const client = new tmi.Client(tmiOptions);

client.connect();
client.on("connected", (address, port) => {
    client.say("diverdragoon", "Bot is connected");
});