<template>
  <div>
    <article>
      <nuxt-content :document="caseStudy" />
    </article>
  </div>
</template>
  
<script>
  export default {
    async asyncData({ $content, params }) {
      const caseStudy = await $content('case_studies', params.slug).fetch()

      return { caseStudy }
    },

    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  
  }
</script>
  
<style lang="scss">
@use "~/assets/variables" as *;

  .nuxt-content{
    padding: 2rem 6rem 2rem 6rem;
    font-family: 'Clash Display', normal;

    img{
      width: 100%;
    }
  } 
    
</style>