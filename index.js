// Require the Bolt package (github.com/slackapi/bolt)
const { app } = require('./lib/slackAuth');
const { homeView } = require('./lib/mockUI/homeView');
const { publishHomeView, publishModalView } = require('./lib/slackActions');
const { sfLogin } = require('./lib/salesforce/sfAuth');
const { sfQuery } = require('./lib/salesforce/sfActions');
const { workoutModal } = require('./lib/mockUI/workoutButton');



app.event('app_home_opened', async ({ event, client, context }) => {
    try {
        let result = await publishHomeView(client, homeView);
    }
    catch (error) {
        console.error(error);
    }
});




app.action({ action_id: "actionId-2" }, async ({ ack, client, body }) => {
    ack();
    try {
        let sfConnection = await sfLogin();
        let queryString = `Select ${config.get('sfFieldsToQuery')} from ${config.get('sfObjectToQuery')} where bwell__Journey_Name__c='Revive' and bwell__Article_URL__c!=NULL limit 1`;
        let stories = await sfQuery(sfConnection, queryString);
        let result = await publishModalView(client, body, stories, workoutModal);
    }
    catch (error) {
        console.error(error.data.response_metadata);
    }
});



(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log(' Bolt app is running!');
})();