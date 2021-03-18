# schools-website-template

This is a basic template for school that have adopted [FutureX](https://nuxtjs.org)FutureX.

**NB :** This template was built with [Nuxt.js](https://nuxtjs.org) & [TailwindCss](https://tailwindcss.com/).

##

You should set your school's details in the `/nuxt.config.js` file.

**E.g :**

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

**E.g :**

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

## Changing Website Content

**Importance Notice:** Do not forget to change the favicon at `/static/favicon.ico`

1. The image assets can be found and modified in the `/static/images/` directory & sub-directories.
2. The components used can be found at `/components/home/` and/or `/components/partials/`

### Gallery Section

You can change the photo for the gallery at `/components/partials/Gallery.vue`

**I.e :**

```
export default {
  data() {
    return {
      photos: [
        '/images/gallery/hero-1.jpeg',
        '/images/gallery/hero-2.jpeg',
        '/images/gallery/hero-3.jpeg',
      ],
    }
  },
}
```

### Staff Section

You can change the photo and names for the Staff at `/components/partials/OurStaff.vue`.
**NB:** Please do not overlook the staff Id. Because it will be used to process the ordering of the items [on larger screens].

**E.g :**

```
export default {
  data() {
    return {
      staff: [
        {
          id: 2,
          title: 'Principal',
          name: 'Mrs. Adenike Fashola',
          src: '/images/staff/staff-3.jpg',
        },
        {
          id: 1,
          title: 'Vice Principal (Academics)',
          name: 'Mr Omomo',
          src: '/images/staff/staff-1.jpg',
        },
        {
          id: 3,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: '/images/staff/staff-2.jpg',
        },
      ],
    }
  },
}
```

Comming soon...

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
