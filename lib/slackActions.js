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