module.exports.homeView = {
    type: "home",
    callback_id: "home_view",
    blocks: [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": ":wellbeing-hq_logo:  Welcome to Camp B-Well  :wellbeing-hq_logo:"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Reimbursement :wageworks: ",
                        "emoji": true
                    },
                    "value": "wageworks",
                    "url": "https://aloha.my.salesforce.com/idp/login?app=0spd0000000CaiN"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "B-Well :wellbeing-hq_logo: ",
                        "emoji": true
                    },
                    "value": "campBWell",
                    "url": "https://dreamjobcentral.lightning.force.com/lightning/app/06m4u000001BCWqAAO"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Lyra Health :care:",
                        "emoji": true
                    },
                    "value": "Lyra",
                    "url": "https://www.lyrahealth.com/"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Brightplan :chart: ",
                        "emoji": true
                    },
                    "value": "Brightplan",
                    "url": "https://my.brightplan.com/app/login"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Benefits :salesforce-smb: ",
                        "emoji": true
                    },
                    "value": "benefits",
                    "url": "https://salesforcebenefits.com/"
                }
            ]
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":bwell-astro: |   *B-Well Recommendations*  | :bwell-astro: \n\n _Quick actions for your mental and physical wellbeing_"
            }
        },
        {
            "type": "actions",
            "elements": [
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Lunchtime :avocado: ",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "actionId-0"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Hit Pause :pause-2: ",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "actionId-1"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Workout :workout: ",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "actionId-2"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Meditate :astro_meditate:",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "actionId-3"
                },
                {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "B-Well :bwell-astro:",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "action_id": "actionId-4"
                }
            ]
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":astro-doctor: |   *How Are You, Really?*  |:astro-doctor:  "
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`52%` *Revive* - how you recharge and recover"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Take Assessment",
                    "emoji": true,
                },
                "value": "benefits",
                "url": "https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Assessments"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`82%` *Thrive* - how you cope in stressful situations"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Take Assessment",
                    "emoji": true
                },
                "value": "benefits",
                "url": "https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Assessments"
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "`72%` *Nourish* - How you fuel your body"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Take Assessment",
                    "emoji": true
                },
                "value": "benefits",
                "url": "https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Assessments"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":codey-running: | *B-Well Microsteps* | :codey-running: "
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "??? Every time you exercise, take a minute to acknowledge that you showed up for yourself."
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": ":checkmark:",
                    "emoji": true
                }
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "??? Today, cut out one sugary item from your daily diet"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": ":checkmark:",
                    "emoji": true
                }
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "??? Pick a night each week, and take a few minutes to plan out your meals for the week ahead."
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": " :checkmark:",
                    "emoji": true
                }
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "??? If you???re feeling stressed about the news, take a minute to meditate"
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": " :checkmark:",
                    "emoji": true
                }
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": ":first_place_medal: | *Challenges* | :first_place_medal:   "
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*<https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Challenges | ??? Work out 3x a week>* \n\n *<https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Challenges | ??? Halloween steps challenge>* \n\n*<https://dreamjobcentral.lightning.force.com/lightning/n/bwell__Challenges | ??? October wellness challenge>*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": ":pushpin: _*your smile is contagious, keep smiling!*_."
                }
            ]
        }
    ],
}