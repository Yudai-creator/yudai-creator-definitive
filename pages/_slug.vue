<template>
  <div>
    <article>
      <!-- <div class="banner">
        <img :src="caseStudy.imgLink" :alt="caseStudy.alt" />
      </div> -->
      
      <nuxt-content :document="caseStudy" />
      <!-- <p>Article last updated: {{ formatDate(caseStudy.updatedAt) }}</p> -->

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

  .banner{
    width: 100%;
    height: 500px;

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .nuxt-content{
    padding: 2rem 10rem 2rem 10rem;
    h1 {
      font-family: 'Clash Display', normal;
      font-weight: bold;
      font-size: 4rem;;
    }

    img{
      width: 80%;
    }
  } 
    
</style>