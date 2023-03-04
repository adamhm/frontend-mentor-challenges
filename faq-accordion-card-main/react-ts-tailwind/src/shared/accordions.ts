import {Accordion} from './accordion';

const accordions: Accordion[] = [
    {
        id: 1,
        headerText: "How many team members can I invite?",
        sectionText:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
        id: 2,
        headerText: "What is the maximum file upload size?",
        sectionText:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        id: 3,
        headerText: "How do I reset my password?",
        sectionText:
            "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
        id: 4,
        headerText: "Can I cancel my subscription?",
        sectionText:
            "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
        id: 5,
        headerText: "Do you provide additional support?",
        sectionText: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
]

export default accordions;
