<template>
  <div id="q-app">
    <router-view />
   

  </div>
</template>

<script>
import meta  from 'quasar'
/*const metaData = {
  // sets document title
  title: 'Index Page',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - My Website`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Page 1' },
    keywords: { name: 'keywords', content: 'Quasar website' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle:  {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template (ogTitle) {
        return `${ogTitle} - My Website`
      }
    }
  },

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{ "@context": "http://schema.org" }`
    }
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
}*/
export default {
  name: 'App',
  title:'Delivery App',
  
  meta () {
    return {
      title: this.metaTitle,
      meta: {
        title: {
          name: 'title',
          content: this.metaTitle
        },
        ogTitle: {
          name: 'og:title',
          content: this.metaTitle
        },
        twitterTitle: {
          name: 'twitter:title',
          content: this.metaTitle
        },

        description: {
          name: 'description',
          content: this.metaShortDesc
        },
        ogDesc: {
          name: 'og:description',
          content: this.metaShortDesc
        },
        twitterDesc: {
          name: 'twitter:description',
          content: this.metaShortDesc
        },
        ogImage: {
          name: 'og:image',
          content: this.metaImage
        },
        twitterImage: {
          name: 'twitter:image',
          content: this.metaImage
        }
      }
    }
  },

  computed: {
    metaTitle () {
      return "Delivery App"
    },

    metaShortDesc () {
      return "This is the short description"
    },

    metaImage () {
      return 'app-logo-128x128.png'
    }
  }
  
}

</script>
<style>

</style>
