export const config = {
    name: 'Thang',
    occupation: 'Applied Economics Bachelor',
    location: 'Budapest, Hungary',

    github: 'Thangta03',
    gitlab: 'tathang2003 ',
    linked_in: 'thangta6174495',
    twitter: 'ThngT79814',
    email: 'tathang2003@gmail.com',

    resume: 'Thang_Ta_Resume.pdf',

    get summary() {
        return `I'm ${this.occupation} and Technology Enthusiast living in ${config.location}, and I love making things and having lots of side projects going on.`;
    },
    get headline() {
        return `Hey, my name is ${config.name}.`;
    },

    seo: {
        keywords:
            'thangta, python, r, sql, mysql, linux, nodejs, html, css, git, github',

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
