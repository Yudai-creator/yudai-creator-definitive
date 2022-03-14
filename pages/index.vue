<template>

  <!--Hero section-->
  <div class="hero_section">
    <header>
      <figure>
        <img class="logo" src="~/static/imgs/yudai.png" alt="yudai_logo">
      </figure>

      
      <svg class="fries_menu" xmlns="http://www.w3.org/2000/svg" width="39" height="17" viewBox="0 0 39 17">
        <g id="fries_menu" data-name="fries menu" transform="translate(-3362 30)">
          <rect id="Rectángulo_101" data-name="Rectángulo 101" width="39" height="3" rx="1.5" transform="translate(3362 -16)" fill="#00a1ff"/>
          <rect id="Rectángulo_148" data-name="Rectángulo 148" width="27" height="3" rx="1.5" transform="translate(3374 -23)" fill="#00a1ff"/>
          <rect id="Rectángulo_102" data-name="Rectángulo 102" width="39" height="3" rx="1.5" transform="translate(3362 -30)" fill="#00a1ff"/>
        </g>
      </svg>
      

      
      <img class="blob-right-corner" src="~/static/landing_assets/blob shape right corner.svg" alt="blob_shape">
      <img class="blob-stroke" src="~/static/landing_assets/blob stroke 1.svg" alt="stroke">
      <img class="blob-right-corner-shadow" src="~/static/landing_assets/blob shape right corner shadow.svg" alt="blob_shape">
      
      

    </header> 
  </div>
  
</template>

<script>
import {gsap} from "gsap" 
export default {
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

// global styles
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    background-color: $bg-color;
    overflow-x: hidden;
}



@media (max-width: 480px){
  
    .anim{
      font-size: 1.2rem;
      padding: 0;
    }

  .brand-wrapper{
    flex-direction: column;
    align-items: center;
    justify-content: center;

    left: 20%;
    top: 20%;
  }
}

</style>
