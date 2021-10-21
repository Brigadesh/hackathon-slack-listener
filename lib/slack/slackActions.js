const config = require('config');
const { parseDynamicContent } = require('./../utility/parseMergeField');

module.exports.publishHomeView = (event, client, homeView) => {
    return new Promise((resolve, reject) => {
        client.views.publish({
            user_id: event.user,
            view: homeView
        })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
};

module.exports.publishModalView = (client, body, stories, modalContent) => {
    return new Promise((resolve, reject) => {
        client.views.open({
            trigger_id: body.trigger_id,
            view: parseDynamicContent(modalContent, stories)
        })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
};

module.exports.setStatus = (client, body, stories, modalContent) => {
    let expiryTime = Date.now() + 900;
    return new Promise((resolve, reject) => {
        client.users.profile.set({
            token: config.get('slackBotCredentials.botToken'),
            profile: {
                "status_text": "Having Lunch!",
                "status_emoji": ":avocado:",
                "status_expiration": expiryTime
            }
        })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
};