// Require the Bolt package (github.com/slackapi/bolt)
const { app } = require('./lib/slackAuth');

app.event('app_home_opened', async ({ event, client, context }) => {
    try {
        /* view.publish is the method that your app uses to push a view to the Home tab */
        const result = await client.views.publish({

            /* the user that opened your app's app home */
            user_id: event.user,


            /* the view object that appears in the app home*/
            view: {
                type: 'home',
                callback_id: 'home_view',

                "blocks": []
            }
        });
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