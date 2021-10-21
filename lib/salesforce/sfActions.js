module.exports.sfQuery = (sfConnection, queryString) => {
    return new Promise((resolve, reject) => {
        let stories = [];
        sfConnection.query(queryString)
            .on("record", (record) => {
                stories.push(record);
            })
            .on("end", async () => {
                resolve(stories)
            })
            .on("error", (error) => {
                reject(error);
            })
            .run({
                autoFetch: true,
                maxFetch: 5000
            });
    });
}