// Require the Bolt package (github.com/slackapi/bolt)
const { app } = require('./lib/slackAuth');
const { homeView } = require('./mockUI/homeView');
const { publishHomeView } = require('./lib/slackActions')

app.event('app_home_opened', async ({ event, client, context }) => {
    try {
        const result = await publishHomeView(client, homeView);
    }
    catch (error) {
        console.error(error);
    }
});




/*app.action('dupekey_to_score', async ({ ack, body, context }) => {
    // Acknowledge the button request
    ack();

    try {
        // Update the message
        const result = await app.client.chat.postMessage({
            token: context.botToken,
            // ts of message to update
            //ts: body.message.ts,
            // Channel of message
            channel: "C02J7DM5ZMY",
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: '*The button was clicked!*'
                }
              }
            ],
            text: 'DupeKeytobeScored was clicked'
        });
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
});*/



(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log(' Bolt app is running!');
})();