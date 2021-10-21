const config = require('config');
const appdebug = require('debug')('appdebug');
const { app } = require('./lib/slack/slackAuth');
const { homeView } = require('./lib/mockUI/homeView');
const { publishHomeView, publishModalView, setStatus } = require('./lib/slack/slackActions');
const { sfLogin } = require('./lib/salesforce/sfAuth');
const { sfQuery } = require('./lib/salesforce/sfActions');
const { workoutModal } = require('./lib/mockUI/workoutButton');
const { meditateModal } = require('./lib/mockUI/meditate');
const { bwellModal } = require('./lib/mockUI/bwell');

let sfLoginQueryPublish = async (modal, queryString, client, body) => {
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
    let queryString = `${config.get('sfFieldsToQuery')} ${config.get('sfObjectToQuery')} ${config.get('workoutWhereClause')}`;
    sfLoginQueryPublish(workoutModal, queryString, client, body)
        .then(result => appdebug(result))
        .catch(err => appdebug(err));
});

app.action({ action_id: "actionId-3" }, async ({ ack, client, body }) => {
    ack();
    let queryString = `${config.get('sfFieldsToQuery')} ${config.get('sfObjectToQuery')} ${config.get('meditateWhereClause')}`;
    sfLoginQueryPublish(meditateModal, queryString, client, body)
        .then(result => appdebug(result))
        .catch(err => appdebug(err));
});

app.action({ action_id: "actionId-4" }, async ({ ack, client, body }) => {
    ack();
    let queryString = `${config.get('sfFieldsToQuery')} ${config.get('sfObjectToQuery')} ${config.get('bwellWhereClause')} ${Math.floor(Math.random() * 36)}`;
    sfLoginQueryPublish(bwellModal, queryString, client, body)
        .then(result => appdebug(result))
        .catch(err => appdebug(err));
});

app.action({ action_id: "actionId-0" }, async ({ ack, payload, client, body }) => {
    ack();
    appdebug(`Payload - ${JSON.stringify(payload)}`);
    appdebug(`client - ${JSON.stringify(client)}`);
    appdebug(`body - ${JSON.stringify(body)}`);
    setStatus(client, body)
        .then(result => appdebug(` result -> ${JSON.stringify(result)}`))
        .catch(err => appdebug(err));
});


(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);
    appdebug(' Bolt app is running!');
})();