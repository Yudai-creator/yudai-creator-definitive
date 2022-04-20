<template>

  <div>
    <!--Hero section-->
    <div class="hero_section">
      <header>
        <figure>
          <img class="logo" src="~/static/imgs/yudai.png" alt="yudai_logo">
        </figure>

        
        <div class="wrapper">
            <svg class="fries_menu" xmlns="http://www.w3.org/2000/svg" width="39" height="17" viewBox="0 0 39 17">
            <g id="fries_menu" data-name="fries menu" transform="translate(-3362 30)">
              <rect id="Rectángulo_101" data-name="Rectángulo 101" width="39" height="3" rx="1.5" transform="translate(3362 -16)" fill="#00a1ff"/>
              <rect id="Rectángulo_148" data-name="Rectángulo 148" width="27" height="3" rx="1.5" transform="translate(3374 -23)" fill="#00a1ff"/>
              <rect id="Rectángulo_102" data-name="Rectángulo 102" width="39" height="3" rx="1.5" transform="translate(3362 -30)" fill="#00a1ff"/>
            </g>
          </svg>
          

          
          <img id="blob-right-corner" src="~/static/landing_assets/blob shape right corner.svg" alt="blob_shape">
          <img id="blob-stroke" src="~/static/landing_assets/blob stroke 1.svg" alt="stroke">
          <img id="blue_cross" src="~/static/landing_assets/blue cross.svg" alt="cross">
          <img id="blue_cross2" src="~/static/landing_assets/blue cross2.svg" alt="cross">
          <img id="blob-right-corner-shadow" src="~/static/landing_assets/blob shape right corner shadow.svg" alt="blob_shape">
        </div>
      </header> 

      <div class="hero_text-headline">
        <h2><span>Designers</span> visualize solutions.</h2>
        <h2><span>Developers</span> turn them into reality.</h2>

        <p>I do both!</p>

        <img id="blob-text-shadow" src="~/static/landing_assets/blob shape text shadow.svg" alt="blob_shadow">

        <img id="blue_cross3" src="~/static/landing_assets/blue cross.svg" alt="cross">
        <img id="blue_cross4" src="~/static/landing_assets/blue cross2.svg" alt="cross">

        <img id="dots" src="~/static/landing_assets/dots compound 1.svg" alt="dots">
      </div>

      <div class="hero_cta-button">
        <ButtonPrimary textContent="See my work"/>
      </div>
    </div>

    <!--About me section-->
    <div class="about_blobs">
      <img id="blob-left-corner" src="~/static/about-me_assets/blob-shape-left-corner.svg" alt="blob_shape">
      <img id="blob-left-corner-shadow" src="~/static/about-me_assets/blob-shape-left-corner-shadow.svg" alt="blob_shape">
    </div>
    <div class="about_section">
      <img class="about_profile-picture" src="~/static/imgs/yudai-pfp-shadow.png" alt="profile-pic">
      <div class="about_text">
        <p >
          Hello dear visitant, Yudai here🖐
          I'm a <span>web developer</span> and <span>UI designer</span>.
        </p>
        
        <p>
          I've been programming for 5 years, 
          and now I'm doing my best to get 
          into the tech industry as a 
          Frontend Developer.
        </p>
        
        <p>
          I'm passionate about design and
          animations, love to be creative.
          I feel like building projects and 
          doing design is my way to help
          and contribute with the society.
        </p>
      </div>
    </div>
  </div>

  
  
</template>

<script>
import ButtonPrimary from '../components/ButtonPrimary.vue'
import {gsap} from "gsap" 
export default {
  components: {
    ButtonPrimary
  },
  mounted(){
    const {intro, yudai, warning, texts, brand, social, building} = this.$refs

    const tl = new gsap.timeline({
      stagger: .5
    })

    tl.fromTo(intro, {scale: 0}, {duration: 1.5, scale: 1, ease: "circ"})
      .fromTo(yudai, {scale: 0}, {duration: 1.5, scale: 1, ease: "circ"})
      .fromTo(warning, {scale: 0}, {duration: 2, scale: 1, ease: "circ"})
      //.fromTo(building, {y: -2, rotate: -10}, {duration: 1, y: 2, rotate: 10})
      .fromTo(texts, {opacity: 1}, {duration: .6, opacity: 0, x: 20, ease: "expo"})
      .fromTo(brand, {opacity: 0, x: 100}, {duration: .6, opacity:1, x: -50, ease: "circ"})
      //.fromTo(social, {opacity: 0}, {duration: .5, opacitiy: 1})
  }
};
</script>

<style lang="scss" >
@use '~/assets/variables' as *;
@import '~/assets/styles/landing_section';
@import '~assets/styles/about-me_section';

// global styles
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  overflow-x: hidden;
}

body {
    position: relative;
    overflow-x: hidden;

    //overflow-y: hidden;

    width: 100%;
    background-color: $bg-color;
    color: $text-color;

    font-family: Verdana, Geneva, Tahoma, sans-serif;

    // scrollbar-width: none;
    // -webkit-box-sizing: border-box;
    // -moz-box-sizing: border-box;
    
}

// body::-webkit-scrollbar{
//   display: none;
// }



@media (max-width: 480px){
  
  
}

</style>
