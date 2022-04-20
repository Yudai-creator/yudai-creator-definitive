<template>

  <div>
    <!--Hero section-->
    <div class="hero_section">
      <header>
        <figure>
          <img class="logo" src="~/static/imgs/yudai.png" alt="yudai_logo">
        </figure>

        <svg class="header_hamburger-menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="50px" height="50px">
          <g id="surface1032491">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(20.392157%,59.607846%,85.882354%);fill-opacity:1;" d="M 5 8 C 4.277344 7.988281 3.609375 8.367188 3.246094 8.992188 C 2.878906 9.613281 2.878906 10.386719 3.246094 11.007812 C 3.609375 11.632812 4.277344 12.011719 5 12 L 45 12 C 45.722656 12.011719 46.390625 11.632812 46.753906 11.007812 C 47.121094 10.386719 47.121094 9.613281 46.753906 8.992188 C 46.390625 8.367188 45.722656 7.988281 45 8 Z M 5 23 C 4.277344 22.988281 3.609375 23.367188 3.246094 23.992188 C 2.878906 24.613281 2.878906 25.386719 3.246094 26.007812 C 3.609375 26.632812 4.277344 27.011719 5 27 L 45 27 C 45.722656 27.011719 46.390625 26.632812 46.753906 26.007812 C 47.121094 25.386719 47.121094 24.613281 46.753906 23.992188 C 46.390625 23.367188 45.722656 22.988281 45 23 Z M 5 38 C 4.277344 37.988281 3.609375 38.367188 3.246094 38.992188 C 2.878906 39.613281 2.878906 40.386719 3.246094 41.007812 C 3.609375 41.632812 4.277344 42.011719 5 42 L 45 42 C 45.722656 42.011719 46.390625 41.632812 46.753906 41.007812 C 47.121094 40.386719 47.121094 39.613281 46.753906 38.992188 C 46.390625 38.367188 45.722656 37.988281 45 38 Z M 5 38 "/>
          </g>
        </svg>

        
 
        <!-- <img id="blob-right-corner" src="~/static/landing_assets/blob shape right corner.svg" alt="blob_shape"> -->
        <img id="blob-right-corner" src="~/static/landing_assets/blob-shape-right-corner.png" alt="blob_shape">
        <!-- <img id="blob-stroke" src="~/static/landing_assets/blob stroke 1.svg" alt="stroke">
        <img id="blue_cross" src="~/static/landing_assets/blue cross.svg" alt="cross">
        <img id="blue_cross2" src="~/static/landing_assets/blue cross2.svg" alt="cross"> -->
        <img id="blob-right-corner-shadow" src="~/static/landing_assets/blob-shape-right-corner-shadow.png" alt="blob_shape">

        
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
    <!-- <div class="about_blobs">
      <img id="blob-left-corner" src="~/static/about-me_assets/blob-shape-left-corner.svg" alt="blob_shape">
      <img id="blob-left-corner-shadow" src="~/static/about-me_assets/blob-shape-left-corner-shadow.svg" alt="blob_shape">
    </div> -->
    <!-- <div class="about_section">
      <img class="about_profile-picture" src="~/static/imgs/yudai-pfp-shadow.png" alt="profile-pic">
      <div class="about_text">
        <p>
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
    </div> -->
    <!-- Social media spot -->
    <div class="social-media_section">
      <img id="wave-top" src="~/static/social-media_assets/waves-top.png" alt="waves">
      <div class="social-media_spot-twitter">
        <h2>I share my everyday learnings and achievements</h2>
        <div class="spot-twitter_banner">
          <img id="twitter-banner" src="~/static/social-media_assets/BANNER TWITTER.png" alt="banner">
        </div>
      </div>
      <!-- <svg id="wave-bottom" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 377.25 92.606">
        <path d="M309.867,72.961C285.034,56.668,258.976,24.6,233.845,11.449c-25.861-13.563-52.834-12.773-78.735.305-18.183,9.175-35.839,24.3-54.073,32.743C67.155,60,32.213,52.134,0,21.743v72.47H377.25V75.284C355.932,93.368,331.889,87.416,309.867,72.961Z" transform="translate(0 -1.607)" fill="#010713"/>
      </svg> -->
      <img id="wave-bottom" src="~/static/social-media_assets/waves-bottom.png" alt="waves">
    </div>
    <footer>

    </footer>
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
@import '~assets/styles/social-media_section';

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

footer{
  background-color: black;
  width: 100%;
  height: 200px;
}

// body::-webkit-scrollbar{
//   display: none;
// }



@media (max-width: 480px){
  
  
}

</style>
