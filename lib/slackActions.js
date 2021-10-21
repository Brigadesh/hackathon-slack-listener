const { parseDynamicContent } = require('./lib/utility/parseMergeField');

module.exports.publishHomeView = (client, homeView) => {
    return new Promise((resolve, reject) => {
        try {
            client.views.publish({
                user_id: event.user,
                view: homeView
            })
                .then(result => resolve(result));
        }
        catch (error) {
            reject(error);
        }
    });
};

module.exports.publishModalView = (client, body, stories, modalContent) => {
    return new Promise((resolve, reject) => {
        try {
            client.views.open({
                trigger_id: body.trigger_id,
                view: parseDynamicContent(modalContent, stories)
            })
                .then(result => resolve(result));
        }
        catch (error) {
            reject(error);
        }
    });
};