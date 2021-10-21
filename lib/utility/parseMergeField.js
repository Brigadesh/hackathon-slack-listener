module.exports.parseDynamicContent = (content, stories) => {
    let jsonString = JSON.stringify(content);
    jsonString.replace(config.get('summaryMergeField'), stories[0].bwell__Summary__c);
    jsonString.replace(config.get('articleURLMergeField'), stories[0].bwell__Article_URL__c);
    jsonString.replace(config.get('titleMergeField'), stories[0].bwell__Title__c);
    jsonString.replace(config.get('imageURLMergeField'), stories[0].bwell__Image_URL__c);
    return JSON.parse(jsonString);
};