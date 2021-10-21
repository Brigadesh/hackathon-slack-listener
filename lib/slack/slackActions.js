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