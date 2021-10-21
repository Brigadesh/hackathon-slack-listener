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

module.exports.setStatus = (client, body, profileConfig) => {
    let expiryTime = Date.now() / 1000;
    expiryTime += expiryTime + profileConfig.timeout;
    return new Promise((resolve, reject) => {
        client.users.profile.set({
            token: config.get('slackBotCredentials.userToken'),
            profile: {
                "status_text": profileConfig.statuText,
                "status_emoji": profileConfig.statusEmoji,
                "status_expiration": expiryTime,
            },
            user: body.user.id
        })
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
};