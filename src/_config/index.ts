export const config = {
    name: 'Thang',
    occupation: 'Applied Economics Bachelor',
    location: 'Budapest, Hungary',

    github: '@Thangta03',
    gitlab: '',
    linked_in: 'thangta',
    twitter: 'thangta03',
    email: 'thangta03@gmail.com',

    resume: 'Thangta_Resume.pdf',

    get summary() {
        return `I'm a ${this.occupation} and Technology Enthusiast living in ${config.location}, and I love making things and having lots of side projects going on.`;
    },
    get headline() {
        return `Hey, my name is ${config.name}.`;
    },

    seo: {
        keywords:
            'thangta, python, r, sql, mysql, node, nodejs, html, css, git, github',

        get description() {
            return config.summary;
        },

        site_type: 'website',

        site_url: 'https://thangtaportfolio.netlify.app',

        twitter_card_image: 'images/twitter_card.png',
        get twitter_card_description() {
            return config.summary;
        },
    },
};
