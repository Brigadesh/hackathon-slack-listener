const { app } = require('./lib/slack/slackAuth');
const { homeView } = require('./lib/mockUI/homeView');
const { publishHomeView, publishModalView } = require('./lib/slack/slackActions');
const { sfLogin } = require('./lib/salesforce/sfAuth');
const { sfQuery } = require('./lib/salesforce/sfActions');
const { workoutModal } = require('./lib/mockUI/workoutButton');
const { meditateModal } = require('./lib/mockUI/meditate');
const { bwell } = require('./lib/mockUI/bwell');
const config = require('config');

let sfLoginQueryPublish = async (modal, queryString) => {
    try {
        let sfConnection = await sfLogin();
        let stories = await sfQuery(sfConnection, queryString);
        let result = await publishModalView(client, body, stories, modal);
        return result;
    }
    catch (error) {
        console.error(error);
    }
}

app.event('app_home_opened', async ({ event, client, context }) => {
    try {
        let result = await publishHomeView(event, client, homeView);
    }
    catch (error) {
        console.error(error);
    }
});

app.action({ action_id: "actionId-2" }, async ({ ack, client, body }) => {
    ack();
    let queryString = `Select ${config.get('sfFieldsToQuery')} from ${config.get('sfObjectToQuery')} where bwell__Journey_Name__c='Revive' and bwell__Article_URL__c!=NULL limit 1 offset ${Math.floor(Math.random() * 36)}`;
    sfLoginQueryPublish(workoutModal, queryString)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

app.action({ action_id: "actionId-3" }, async ({ ack, client, body }) => {
    ack();
    let queryString = `Select ${config.get('sfFieldsToQuery')} from ${config.get('sfObjectToQuery')} where bwell__Journey_Name__c='Thrive' and bwell__Article_URL__c!=NULL limit 1 offset ${Math.floor(Math.random() * 36)}`;
    sfLoginQueryPublish(meditateModal, queryString)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

app.action({ action_id: "actionId-4" }, async ({ ack, client, body }) => {
    ack();
    let queryString = `Select ${config.get('sfFieldsToQuery')} from ${config.get('sfObjectToQuery')} where bwell__Summary__c!= null and bwell__Article_URL__c!=NULL limit 1 offset ${Math.floor(Math.random() * 36)}`;
    sfLoginQueryPublish(bwell, queryString)
        .then(result => console.log(result))
        .catch(err => console.log(err));
});


(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log(' Bolt app is running!');
})();