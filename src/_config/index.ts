export const config = {
    name: 'Thangta',
    occupation: 'Software Engineer',
    location: 'Arizona',

    github: 'Thangta03',
    gitlab: '',
    linked_in: 'thangta',
    twitter: 'thangta03',
    email: 'thangta03@gmail.com',

    resume: 'Thangta_Software_Engineer_Resume.pdf',

    get summary() {
        return `I'm a ${this.occupation} and aspiring entrepreneur living in ${config.location}, and I love making things and having lots of side projects going on.`;
    },
    get headline() {
        return `Hey, my name is ${config.name}.`;
    },

    seo: {
        keywords:
            'thangta, software developer, software engineer, php, sql, mysql, node, nodejs, html, css, git, github',

        get description() {
            return config.summary;
        },

        site_type: 'website',

        site_url: 'https://thangta03.github.io/Portfolio/',

        twitter_card_image: 'images/twitter_card.png',
        get twitter_card_description() {
            return config.summary;
        },
    },
};
