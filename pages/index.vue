<template>

  <div>
    <!--Hero section-->
    <div id="hero" class="hero_section">
      <header>
        <figure>
          <img class="logo" src="~/static/imgs/yudai.png" alt="yudai_logo">
        </figure>

        <ul class="hero_nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>

        <div class="hero_contact-button">
          <ButtonSecondary textContent="Contact" link="#contact_form"/>
        </div>
        

        <svg class="header_hamburger-menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="50px" height="50px">
          <g id="surface1032491">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(20.392157%,59.607846%,85.882354%);fill-opacity:1;" d="M 5 8 C 4.277344 7.988281 3.609375 8.367188 3.246094 8.992188 C 2.878906 9.613281 2.878906 10.386719 3.246094 11.007812 C 3.609375 11.632812 4.277344 12.011719 5 12 L 45 12 C 45.722656 12.011719 46.390625 11.632812 46.753906 11.007812 C 47.121094 10.386719 47.121094 9.613281 46.753906 8.992188 C 46.390625 8.367188 45.722656 7.988281 45 8 Z M 5 23 C 4.277344 22.988281 3.609375 23.367188 3.246094 23.992188 C 2.878906 24.613281 2.878906 25.386719 3.246094 26.007812 C 3.609375 26.632812 4.277344 27.011719 5 27 L 45 27 C 45.722656 27.011719 46.390625 26.632812 46.753906 26.007812 C 47.121094 25.386719 47.121094 24.613281 46.753906 23.992188 C 46.390625 23.367188 45.722656 22.988281 45 23 Z M 5 38 C 4.277344 37.988281 3.609375 38.367188 3.246094 38.992188 C 2.878906 39.613281 2.878906 40.386719 3.246094 41.007812 C 3.609375 41.632812 4.277344 42.011719 5 42 L 45 42 C 45.722656 42.011719 46.390625 41.632812 46.753906 41.007812 C 47.121094 40.386719 47.121094 39.613281 46.753906 38.992188 C 46.390625 38.367188 45.722656 37.988281 45 38 Z M 5 38 "/>
          </g>
        </svg>

        
 
        <!-- <img id="blob-right-corner" src="~/static/landing_assets/blob shape right corner.svg" alt="blob_shape"> -->
        <img id="blob-right-corner" src="~/static/hero_assets/blob-shape-right-corner.png" alt="blob_shape">
        <svg id="blob-stroke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.655 208.389">
          <path d="M5153.72-30.667s-48.06,46-47.1,76.558,62.157,32.615,70.487,45.317,67.924-3.09,83.944,61.8,141.614-28.151,141.614-28.151" transform="translate(-5105.607 31.389)" fill="none" stroke="#001d57" stroke-width="2"/>
        </svg>
        <!-- <img id="blob-stroke" src="~/static/landing_assets/blob stroke 1.svg" alt="stroke">



        <img id="blue_cross" src="~/static/landing_assets/blue cross.svg" alt="cross">
        <img id="blue_cross2" src="~/static/landing_assets/blue cross2.svg" alt="cross"> -->
        <img id="blob-right-corner-shadow" src="~/static/hero_assets/blob-shape-right-corner-shadow.png" alt="blob_shape">

        
      </header> 

      <div class="hero_section-headline">
        <h2><span>Designers</span> visualize solutions.</h2>
        <h2><span>Developers</span> turn them into reality.</h2>

        <p>I do both!</p>

        <img id="blob-text-shadow" src="~/static/hero_assets/blob shape text shadow.svg" alt="blob_shadow">

        <svg id="blue_cross3" xmlns="http://www.w3.org/2000/svg">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" fill="#00a1ff"/>
        </svg>

        <svg id="blue_cross4" xmlns="http://www.w3.org/2000/svg">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" fill="#00a1ff"/>
        </svg>

        <!-- <img id="blue_cross3" src="~/static/hero_assets/blue cross.svg" alt="cross"> -->
        <!-- <img id="blue_cross4" src="~/static/hero_assets/blue cross2.svg" alt="cross"> -->

        <img id="dots" src="~/static/hero_assets/dots compound 1.svg" alt="dots">
      </div>

      <div class="hero_cta-button">
        <ButtonPrimary textContent="See my work"/>
      </div>
    </div>

    <!--About me section-->
    <div class="about_blobs">
      <img id="blob-left-corner" src="~/static/about-me_assets/blob-shape-left.png" alt="blob-shape">
      <img id="blob-left-corner-shadow" src="~/static/about-me_assets/blob-shape-left-shadow.png" alt="blob-shape">
    </div> 
    <div class="about_section">
      <div class="about_profile-picture-wrapper">
        <img id="horizontal-dots" src="~/static/about-me_assets/dots-compound-horizontal.svg" alt="dots">
        <img class="about_profile-picture" src="~/static/imgs/yudai-pfp-shadow.png" alt="profile-pic">
      </div>
      
      <div id="about-me" class="about_text">
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
    </div> 

    <!-- Social media spot -->
    <div class="social-media_section">
      <!-- <img id="wave-top" src="~/static/social-media_assets/waves-top.png" alt="waves"> -->
      <div class="social-media_section-divider-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
      <div class="social-media_twitter-spot">
        <h2>I share my everyday learnings and achievements in my social media accounts.</h2>
        <div class="twitter-spot_info">
          <img id="twitter-banner" src="~/static/social-media_assets/BANNER TWITTER.png" alt="banner">
          <div class="twitter-spot_feed">
            <ul>
              <li>
                UI/UX guides for beginners
              </li>
              <li>
                Frontend developer roadmap
              </li>
            </ul>
          </div>
          <div class="twitter-spot_cta">
            <svg id="twitter-logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23.333 20.333">
              <path d="M22.936,9.086c.015.223.015.445.015.666,0,6.783-4.812,14.6-13.607,14.6A12.855,12.855,0,0,1,2,22.048a9.322,9.322,0,0,0,1.155.064,9.176,9.176,0,0,0,5.938-2.192A4.847,4.847,0,0,1,4.62,16.361a5.686,5.686,0,0,0,.9.079,4.763,4.763,0,0,0,1.26-.175A5.053,5.053,0,0,1,2.949,11.23v-.064a4.581,4.581,0,0,0,2.161.651A5.23,5.23,0,0,1,2.977,7.545a5.376,5.376,0,0,1,.651-2.588,13.322,13.322,0,0,0,9.862,5.369,6.239,6.239,0,0,1-.119-1.176,4.964,4.964,0,0,1,4.783-5.131,4.625,4.625,0,0,1,3.494,1.62A9.067,9.067,0,0,0,24.683,4.4a5.073,5.073,0,0,1-2.1,2.828,9.078,9.078,0,0,0,2.753-.795A10.705,10.705,0,0,1,22.936,9.086Z" transform="translate(-2 -4.019)" fill="#25c1e9"/>
            </svg>
          </div>  
        </div>
        <p>With more than 1k connections. Would you join me?</p>
      </div>
      <!-- <svg id="wave-bottom" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 377.25 92.606">
        <path d="M309.867,72.961C285.034,56.668,258.976,24.6,233.845,11.449c-25.861-13.563-52.834-12.773-78.735.305-18.183,9.175-35.839,24.3-54.073,32.743C67.155,60,32.213,52.134,0,21.743v72.47H377.25V75.284C355.932,93.368,331.889,87.416,309.867,72.961Z" transform="translate(0 -1.607)" fill="#010713"/>
      </svg> -->
      <!-- <img id="wave-bottom" src="~/static/social-media_assets/waves-bottom.png" alt="waves"> -->
      <div class="social-media_section-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
      </div>
    </div>

    <!-- Portfolio section -->
    <div class="portfolio_section">
      <h2>Portfolio</h2>
      <div class="portfolio_section-latest-work">
        <h3 id="work">Latest work</h3>
        <div class="latest-work_layout">
          <DesignThumbnail textContent="Probando"/>
          <DesignThumbnail textContent="Probando"/>
          <DesignThumbnail textContent="Probando"/>
        </div>
      </div>
      <div class="portfolio_section-projects">
        <!-- Projects -->
      </div>
      <div class="hero_cta-button">
        <ButtonPrimary textContent="Download CV"/>
      </div>
    </div>

    <!-- Services -->
    <div class="services_section">
      <h2>You can hire my services as freelancer</h2>
      <div class="services_card-container">
        <ServiceCard icon="/services-assets/bx-customize.svg" headline="Landing page that converts" text="Do you want a place to showcase your ideas, messages or services? Let's make an ideal Landing Page, built on the basis  of your ideas."/>
        <ServiceCard icon="/services-assets/animation-ico.svg" headline="Motion graphics and animations" text="Make your website stand out, surprise your customers with a page full of life that will make their experience better."/>
        <ServiceCard icon="/services-assets/bx-devices.svg" headline="Responsive website design" text="Your website will fit perfectly in every device, making sure that your users don't miss your message."/>
      </div>
      <ButtonSecondary textContent="Learn more"/>
    </div>

    <!-- Contact -->
    <div class="contact_section">
      <h2>Get in contact with me through this form</h2>
      <div class="contact_form">
        <form id="contact_form" name="contact" action="/" method="POST" data-netlify="true">
          <div class="contact-form_control">
            <input id="input-name" name="name" type="text" required>
            <label for="input-name">Your name</label>
          </div>
          <div class="contact-form_control">
            <input id="input-email" name="email" type="text" required>
            <label for="input-email">Your email</label>
          </div>
          <div class="contact-form_control">
            <textarea id="input-message" name="message"  rows="7" required></textarea>
            <label for="input-message">Your message</label>
          </div>
          <input class="form_submit" type="submit" value="Send Message">
        </form>
      </div>
      <div class="contact_email">
        <h2>Or, email me at</h2>
        <div class="email-container">
          <p>yudaipx77@gmail.com</p>
        </div>
      </div>
    </div>
    <footer>

    </footer>
  </div>

  
  
</template>

<script>
import ButtonPrimary from '../components/ButtonPrimary.vue'
import ButtonSecondary from '../components/ButtonSecondary.vue'
import DesignThumbnail from '../components/DesignThumbnail.vue'
import ServiceCard from '../components/ServiceCard.vue'
// import {gsap} from "gsap" 
export default {
  components: {
    ButtonPrimary,
    DesignThumbnail,
    ServiceCard,
    ButtonSecondary
  },
  // mounted(){
  //   const {intro, yudai, warning, texts, brand, social, building} = this.$refs

  //   const tl = new gsap.timeline({
  //     stagger: .5
  //   })

  //   tl.fromTo(intro, {scale: 0}, {duration: 1.5, scale: 1, ease: "circ"})
  //     .fromTo(yudai, {scale: 0}, {duration: 1.5, scale: 1, ease: "circ"})
  //     .fromTo(warning, {scale: 0}, {duration: 2, scale: 1, ease: "circ"})
  //     //.fromTo(building, {y: -2, rotate: -10}, {duration: 1, y: 2, rotate: 10})
  //     .fromTo(texts, {opacity: 1}, {duration: .6, opacity: 0, x: 20, ease: "expo"})
  //     .fromTo(brand, {opacity: 0, x: 100}, {duration: .6, opacity:1, x: -50, ease: "circ"})
  //     //.fromTo(social, {opacity: 0}, {duration: .5, opacitiy: 1})
  // }
};
</script>

<style lang="scss" >
@use '~/assets/variables' as *;
@import '~/assets/styles/hero_section';
@import '~assets/styles/about-me_section';
@import '~assets/styles/social-media_section';
@import '~assets/styles/portfolio_section';
@import '~assets/styles/services_section';
@import '~assets/styles/contact_section';

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
    //font-size: 2vw;

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
