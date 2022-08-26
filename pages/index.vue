<template>
  <div>
    <!--Hero section-->
    <div class="hero__section">
      <header>
        <figure id="hero">
          <img class="logo" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/yudai_UDBphSZy8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108298328" alt="Yudai H brand mark" />
        </figure>

        <ul class="hero__nav-links">
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

        <div class="hero__contact-button">
          <ButtonSecondary textContent="Contact"/>
        </div>

        <HamburgerMenu />

        <!-- <svg class="header_hamburger-menu" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" width="50px" height="50px">
          <g id="surface1032491">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(20.392157%,59.607846%,85.882354%);fill-opacity:1;" d="M 5 8 C 4.277344 7.988281 3.609375 8.367188 3.246094 8.992188 C 2.878906 9.613281 2.878906 10.386719 3.246094 11.007812 C 3.609375 11.632812 4.277344 12.011719 5 12 L 45 12 C 45.722656 12.011719 46.390625 11.632812 46.753906 11.007812 C 47.121094 10.386719 47.121094 9.613281 46.753906 8.992188 C 46.390625 8.367188 45.722656 7.988281 45 8 Z M 5 23 C 4.277344 22.988281 3.609375 23.367188 3.246094 23.992188 C 2.878906 24.613281 2.878906 25.386719 3.246094 26.007812 C 3.609375 26.632812 4.277344 27.011719 5 27 L 45 27 C 45.722656 27.011719 46.390625 26.632812 46.753906 26.007812 C 47.121094 25.386719 47.121094 24.613281 46.753906 23.992188 C 46.390625 23.367188 45.722656 22.988281 45 23 Z M 5 38 C 4.277344 37.988281 3.609375 38.367188 3.246094 38.992188 C 2.878906 39.613281 2.878906 40.386719 3.246094 41.007812 C 3.609375 41.632812 4.277344 42.011719 5 42 L 45 42 C 45.722656 42.011719 46.390625 41.632812 46.753906 41.007812 C 47.121094 40.386719 47.121094 39.613281 46.753906 38.992188 C 46.390625 38.367188 45.722656 37.988281 45 38 Z M 5 38 "/>
          </g>
        </svg> -->

        <!-- <img id="blob-right-corner" src="~/static/landing_assets/blob shape right corner.svg" alt="blob_shape"> -->
        <img
          @mousemove="move"
          ref="blobRight"
          id="blob-right-corner"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-right-corner_wHCu4gECK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108635820"
          alt="blob shape graphic"
        />
        <svg
          ref="blobStroke"
          @mousemove="move"
          id="blob-stroke"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 297.655 208.389"
        >
          <path
            d="M5153.72-30.667s-48.06,46-47.1,76.558,62.157,32.615,70.487,45.317,67.924-3.09,83.944,61.8,141.614-28.151,141.614-28.151"
            transform="translate(-5105.607 31.389)"
            fill="none"
            stroke="#001d57"
            stroke-width="2"
          />
        </svg>
        <!-- <img id="blob-stroke" src="~/static/landing_assets/blob stroke 1.svg" alt="stroke">

        <img id="blue_cross" src="~/static/landing_assets/blue cross.svg" alt="cross">
        <img id="blue_cross2" src="~/static/landing_assets/blue cross2.svg" alt="cross"> -->
        <img
          ref="blobShadow"
          @mousemove="move"
          id="blob-right-corner-shadow"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-right-corner-shadow_UzRWAQnWT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108634210"
          alt="blob shape shadow graphic"
        />
      </header>

      <div class="hero__section-headline">
        <h2 ref="designer"><span>Designers</span> visualize solutions.</h2>
        <h2 ref="developer"><span>Developers</span> turn them into reality.</h2>

        <p ref="both">I do both!</p>

        <img
          id="blob-text-shadow"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob_shape_text_shadow_OPqNT321U.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659108632438"
          alt="blob_shadow"
        />

        <svg id="blue_cross3" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            fill="#00a1ff"
          />
        </svg>

        <svg id="blue_cross4" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
            fill="#00a1ff"
          />
        </svg>

        <!-- <img id="blue_cross3" src="~/static/hero_assets/blue cross.svg" alt="cross"> -->
        <!-- <img id="blue_cross4" src="~/static/hero_assets/blue cross2.svg" alt="cross"> -->

        <img
          id="dots"
          src="~/static/hero_assets/dots compound 1.svg"
          alt="dots"
        />
      </div>

      <div class="hero__cta-button">
        <ButtonPrimary textContent="See my work" />
      </div>
    </div>

    <!--About me section-->
    <div class="about_blobs">
      <img
        id="blob-left-corner"
        src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-left_SHfI1OMw3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108590102"
        alt="blob-shape"
      />
      <img
        id="blob-left-corner-shadow"
        src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-left-shadow_8WfQK6G2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108587061"
        alt="blob-shape"
      />
    </div>
    <div class="about_section">
      <div ref="profilePicture" class="about_profile-picture-wrapper">
        <img
          id="horizontal-dots"
          src="~/static/about-me_assets/dots-compound-horizontal.svg"
          alt="dots"
        />
        <img
          class="about_profile-picture"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/pfp_summer_2_XbcmuS-3-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660314716539"
          alt="profile-pic"
        />
      </div>

      <div ref="aboutText" id="about-me" class="about_text">
        <p>
          Hello, Yudai here I'm a <span>web developer</span> and
          <span>UI designer</span>.
        </p>

        <p>
          Frontend developer specialist, focus on creating user centered UI/UX design.
          Capable of recreating client needs upon a project. Achieving the best results.
        </p>

        <p>
          I'm passionate about design and animations, love to be creative. I
          feel like building projects and doing design is my way to help and
          contribute with the society.
        </p>
        <p class="about__text_tagline">
          This is not a job, this is what I love to do 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="vuesax_bold_flash" data-name="vuesax/bold/flash" transform="translate(-428 -316)">
              <g id="flash">
                <path id="Vector" d="M13.186,8.721H10.1v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77,7.7c-.93,1.05-.54,1.91.86,1.91h3.09v7.2c0,1.68.91,2.02,2.02.76l.8-.91,6.77-7.7C14.976,9.581,14.586,8.721,13.186,8.721Z" transform="translate(432.724 317.999)" fill="#00A1FF"/>
                <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(452 340) rotate(180)" fill="none" opacity="0"/>
              </g>
            </g>
          </svg>
        </p>
      </div>
    </div>

    <!-- Social media spot -->
    <div class="social__section">
      <!-- <img id="wave-top" src="~/static/social-media_assets/waves-top.png" alt="waves"> -->
      <div class="social__section_divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="social__twitter">
        <h2>
          I share my everyday learnings and achievements on twitter.
        </h2>
        <div class="twitter__info">
          <img
            id="twitter-banner"
            src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/BANNER_TWITTER_9NNzxB_mT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108714009"
            alt="banner"
          />
          <div class="twitter__feed">
            <ul>
              <li>UI/UX guides for beginners</li>
              <li>Frontend developer roadmap</li>
              <li>MY daily life as WebDev</li>
            </ul>
          </div>
          <div class="twitter__btn">
            <svg ref="twitterLogo" class="twitter_logo"
              id="twitter-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23.333 20.333"
            >
              <path
                d="M22.936,9.086c.015.223.015.445.015.666,0,6.783-4.812,14.6-13.607,14.6A12.855,12.855,0,0,1,2,22.048a9.322,9.322,0,0,0,1.155.064,9.176,9.176,0,0,0,5.938-2.192A4.847,4.847,0,0,1,4.62,16.361a5.686,5.686,0,0,0,.9.079,4.763,4.763,0,0,0,1.26-.175A5.053,5.053,0,0,1,2.949,11.23v-.064a4.581,4.581,0,0,0,2.161.651A5.23,5.23,0,0,1,2.977,7.545a5.376,5.376,0,0,1,.651-2.588,13.322,13.322,0,0,0,9.862,5.369,6.239,6.239,0,0,1-.119-1.176,4.964,4.964,0,0,1,4.783-5.131,4.625,4.625,0,0,1,3.494,1.62A9.067,9.067,0,0,0,24.683,4.4a5.073,5.073,0,0,1-2.1,2.828,9.078,9.078,0,0,0,2.753-.795A10.705,10.705,0,0,1,22.936,9.086Z"
                transform="translate(-2 -4.019)"
                fill="#25c1e9"
              />
            </svg>
          </div>
        </div>
        <p>With more than 1k connections.</p>
        <h2>Would you join me?</h2>
      </div>
      <div class="social__others">
        <h3>You can also find me here</h3>
        <div>
          <a href="https://www.linkedin.com/in/yudai-h-911bb01bb/" target="_blank"> <img src="~/static/social-media_assets/bxl-linkedin-square.svg" alt="linkedin"/> Linkedin </a>
          <a href="https://github.com/Yudai-creator" target="_blank"> <img src="~/static/social-media_assets/bxl-github.svg" alt="github"/> Github </a>
        </div>
      </div>
      <!-- <svg id="wave-bottom" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 377.25 92.606">
        <path d="M309.867,72.961C285.034,56.668,258.976,24.6,233.845,11.449c-25.861-13.563-52.834-12.773-78.735.305-18.183,9.175-35.839,24.3-54.073,32.743C67.155,60,32.213,52.134,0,21.743v72.47H377.25V75.284C355.932,93.368,331.889,87.416,309.867,72.961Z" transform="translate(0 -1.607)" fill="#010713"/>
      </svg> -->
      <!-- <img id="wave-bottom" src="~/static/social-media_assets/waves-bottom.png" alt="waves"> -->
      <div class="social__section_divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Portfolio section -->
    <div class="portfolio__section">
      <h2 id="portfolio_water-mark">Portfolio</h2>
      <div class="portfolio__latest-work">
        <h2 id="work">My work</h2>
        <div class="latest-work__layout">
          <DesignThumbnail  
            thumbnail="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Work_Presentation/Design_press___4_GqBGPtGs-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659236623477" 
            
          />
          <DesignThumbnail 
            thumbnail="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Work_Presentation/design_presentation_Wg81FBJcu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659236626298" 
            
          />
        </div>
      </div>
      <div class="portfolio__projects">
        <!-- Projects -->
      </div>
      <!-- Download CV button -->
      <!-- <div class="portfolio__cta-button">
        <ButtonPrimary textContent="Download CV" />
      </div> -->
    </div>

    <!-- Services -->
    <!-- <div class="services__section">
      <h2>You can hire my services as freelancer</h2>
      <div class="services__card-container">
        <ServiceCard
          icon="/services-assets/bx-customize.svg"
          headline="Landing page that converts"
          text="Do you want a place to showcase your ideas, messages or services? Let's make an ideal Landing Page, built on the basis  of your ideas."
        />
        <ServiceCard
          icon="/services-assets/animation-ico.svg"
          headline="Motion graphics and animations"
          text="Make your website stand out, surprise your customers with a page full of life that will make their experience better."
        />
        <ServiceCard
          icon="/services-assets/bx-devices.svg"
          headline="Responsive website design"
          text="Your website will fit perfectly in every device, making sure that your users don't miss your message."
        />
      </div>
    </div> -->

    <!-- Contact -->
    <div class="contact__section">
      <h2>Get in contact with me through this form</h2>
      <div class="contact__form">
        <form
          id="contact_form"
          name="contact"
          action="/"
          method="POST"
          data-netlify="true"
        >
          <div class="contact__form_control">
            <input id="input-name" name="name" type="text" required />
            <label for="input-name">Your name</label>
          </div>
          <div class="contact__form_control">
            <input id="input-email" name="email" type="text" required />
            <label for="input-email">Your email</label>
          </div>
          <div class="contact__form_control">
            <textarea
              id="input-message"
              name="message"
              rows="7"
              required
            ></textarea>
            <label for="input-message">Your message</label>
          </div>
          <input
            class="form__submit"
            type="submit"
            value="Send Message"
            disabled
          />
        </form>
      </div>
      <div class="contact__email">
        <h2>Or, email me at</h2>
        <div class="email__container">
          <p>yudaipx77@gmail.com</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer__content">
        <div class="footer__content_logo">
          <a href="#hero"><img class="logo" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/yudai_UDBphSZy8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108298328" alt="Yudai H brand mark" /></a>
        </div>
        <div class="footer__content_nav-links">
          <ul class="nav-links">
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
        </div>
        <div class="footer__content_social-links">
          <a class="social-links_pop" href="https://twitter.com/creator_yudai" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-twitter_uc1z2SuZu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585976" alt="twitter logo"></a>

          <a class="social-links_pop" href="#" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-linkedin_5HaHYJ0hF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585980" alt="linkedin logo"></a>

          <a class="social-links_pop" href="#" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-instagram_ZoEV25n5z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585965" alt="instagram logo"></a>

          <a class="social-links_pop" href="#" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-github_FqVGwPThg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585983" alt="github logo"></a>

          <a class="social-links_pop" href="#" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-youtube_BQucKyUgS.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585974" alt="youtube logo"></a>

        </div>
      </div>
      
      <div class="footer__author">
        <p>Made by the awesome <span>Yudai H</span> 💙</p>
      </div>
    </footer>
  </div>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonSecondary from "../components/ButtonSecondary.vue";
import DesignThumbnail from "../components/DesignThumbnail.vue";
import ServiceCard from "../components/ServiceCard.vue";
import HamburgerMenu from "../components/HamburgerMenu.vue";
import {gsap} from "gsap"
import { scrollTrigger } from "gsap";
export default {
  head(){
    return{
      meta:[
        { hid: 'og:type', property: 'og:type', content: 'website'},
        { hid: 'og-title', property: 'og:title', content: 'Yudai Creator' },
        { hid: 'og-desc', property: 'og:description', content: 'Yudai H portfolio website, showing up his skills as a UI designer and Frontend Developer.' },
        { hid: 'og-image', property: 'og:image', content: 'https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Meta_Images/portfolio-og-image___1_0QRxF6SIp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659147850094'},

        //Twitter card
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
        { hid: "twitter:title", name: "twitter:title", content: 'Yudai Creator' },
        { hid: "twitter:url", name: "twitter:url", content: 'https://yudaicreator.com/' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Yudai H portfolio website, showing up his skills as a UI designer and Frontend Developer.' },
        { hid: "twitter:image", name: "twitter:image", content: 'https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Meta_Images/portfolio-og-image___1_0QRxF6SIp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659147850094'},
      ]
    }
  },
  components: {
    ButtonPrimary,
    DesignThumbnail,
    ServiceCard,
    ButtonSecondary,
    HamburgerMenu,
  },
  mounted(){
    const breakPoint = window.matchMedia("(min-width: 490px)");
    const {designer, developer, both, twitterLogo, aboutText, profilePicture, blobRight, blobShadow, blobStroke} = this.$refs

    // gsap.fromTo(aboutText, {x: -100, opacity: 0}, {scrollTrigger:{
    //   trigger: aboutText,
    //   toggleActions: "restart pause resume none"
    // },duration: .5, x: 0, opacity: 1})

    // gsap.to(aboutText, {scrollTrigger:{trigger: aboutText, toggleActions:"restart pause resume"},duration: .5, x: 50, opacity: 1})


    // Headline animation
    // const tl = new gsap.timeline({
    //   stagger: .5
    // })

    // if(breakPoint.matches){
    //   tl.fromTo(designer, {x: 1500}, {duration: 1, x: 0, ease: "back.out(1.5)"})
    //     .fromTo(developer, {x: -1500}, {duration: 1, x: 0, ease: "back.out(1.5)"}, 0.9)
    //     .fromTo(both, {scale: 0}, {duration: 1, scale: 1, ease: "back.out(1.5)"}, 1.5)
    // }else{
    //   tl.fromTo(designer, {x: 1500}, {duration: 1, x: -50, ease: "back.out(1.5)"})
    //     .fromTo(developer, {x: -1500}, {duration: 1, x:100, ease: "back.out(1.5)"}, 0.9)
    //     .fromTo(both, {scale: 0}, {duration: 1, scale: 1, ease: "back.out(1.5)"}, 1.5)
    // }

    const twittertl = new gsap.timeline({
      stagger: .5,
      ease: "back.out(1.5)",
      repeat:-1,
      yoyo: true
    })

    twittertl.fromTo(twitterLogo, {rotate: -5}, {duration: .3, rotate: 5, delay: .3})
  },
  methods:{
    move(e){
      const {blobRight, blobShadow, blobStroke} = this.$refs;

      const speed = 1.5;
      const xs = (window.innerWidth - e.pageX * speed)/120;
      const ys = (window.innerHeight - e.pageY * speed)/120;

      const tl = new gsap.timeline({
        stagger: .5,
        ease: "back.out(1.5)",
      })

      tl.to(blobRight, {duration: .5, x: xs, y: ys})
    }

  }
};
</script>

<style lang="scss">
@use "~/assets/variables" as *;
@import "~/assets/styles/sections/hero_section";
@import "~assets/styles/sections/about-me_section";
@import "~assets/styles/sections/social-media_section";
@import "~assets/styles/sections/portfolio_section";
@import "~assets/styles/sections/services_section";
@import "~assets/styles/sections/contact_section";
@import "~assets/styles/sections/footer";

// global styles
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  position: relative;
  overflow-x: hidden;

  //overflow-y: hidden;

  width: 100%;
  background-color: $bg-color;
  color: $text-color;

  // font-family: "Lato", sans-serif;
  font-family: 'Univa Nova', normal;

  // -webkit-box-sizing: border-box;
  // -moz-box-sizing: border-box;
}

// body::-webkit-scrollbar{
//   display: none;
// }

@media (max-width: 480px) {
}
</style>
