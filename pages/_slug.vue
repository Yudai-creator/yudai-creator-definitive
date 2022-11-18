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
    }
  
  }
</script>
  
<style scoped>
    
</style>