<template>
  <div class="container">

    <div ref="texts" class="text">
      <p ref="intro" class="anim">Hello dear visitant 🖐🏻</p>
      <p ref="yudai" class="anim">Yudai here!</p>
      <p ref="warning" class="anim">This site is currently under constrution <span ref="building">🚧</span></p>
    </div>

    <div ref="brand" class="brand-wrapper">
      <img src="~/static/imgs/yudai-creator.png">
      <p ref="social">You can follow me on <a href="https://twitter.com/creator_yudai" target="_blank">twitter</a> <br>
      to know more about the buliding process</p>
    </div>

    <!--
      
    -->
    
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

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  background-color: #e5e5e5;
}

.container{
  position: relative;
  display: flex;
  flex-direction: column;
  .text{
    position: relative;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
      //background-color: gray;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 600;
      padding: 1rem;
      font-size: 2rem;
      color: #010c22;
    }

    .anim{
      transform-origin: center;
      transform: scale(0);
    }
  }

  .brand-wrapper{
    position: absolute;
    opacity: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 50%;
    }

    p{
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 600;
      color: #010c22;
      font-size: 1.2rem;

      a{
        color: rgb(77, 207, 207);
      }
    }
  }
  
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
