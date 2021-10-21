module.exports.meditateModal = {
    type: "modal",
    title: {
        type: "plain_text",
        text: "B-Well Astro"
    },
    close: {
        type: "plain_text",
        text: "close"
    },
    blocks: [
        {
            type: "section",
            text: {
                type: "mrkdwn",
                text: "*" + "{summaryMergeField}" + "*\n\n <" + "{articleURLMergeField}" + "|" + "{titleMergeField}" + "!>"
            },
            accessory: {
                type: "image",
                image_url: "{imageURLMergeField}",
                alt_text: "alt text for image"
            }
        }
    ]
};