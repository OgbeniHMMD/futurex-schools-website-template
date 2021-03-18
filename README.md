# schools-website-template

This is a basic template for school that have adopted [FutureX](https://nuxtjs.org)FutureX.

**NB:** This template was built with [Nuxt.js](https://nuxtjs.org) & [TailwindCss](https://tailwindcss.com/).

##

You should set your school's detials in the `nuxt.config.js` file.

**E.g:**

```
export default {
  head: {
    title: 'Your-School-Name-Here',
  },

  publicRuntimeConfig: {
    schoolLogo: '/images/school-logo.svg',
    schoolName: 'Iwerekun Community Senior High School',

    schoolEmail: 'support@myteckplus.com',
    schoolTelephone: '+234 8092 750 000',
    schoolLocation: 'Lakowe, Ibeju-Lekki L.G.A, Lagos State',

    schoolFacebook: 'https://facebook.com/futurexEdu',
    schoolTwitter: 'https://twitter.com/futurexEdu',
    schoolInstagram: 'https://instagram.com/futurexEdu',
    schoolYoutube: 'https://youtube.com/futurexEdu',
  },
}

```

## Theme setup

You can tweak the color scheme in the `/tailwind.config.js` file.

**E.g:**

```
export default {
  theme: {
        extend: {
            colors: {
            primary: '#066d36',
            secondary: '#A6EBC9',
            accent: '#fffbdb',
            },
        },
    },
}
```

##

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
