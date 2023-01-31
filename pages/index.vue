<template>
  <div>
    <!--Hero section-->
    <div class="hero__section">
      <header>
        <figure id="hero">
          <img class="logo" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/yudai_UDBphSZy8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108298328" alt="Yudai H brand mark" />
        </figure>

        <NavLinks/>

        <div class="hero__contact-button">
          <ButtonSecondary textContent="Contact"/>
        </div>

        <HamburgerMenu />

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

        <img id="bubbles" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/bubbles_A69kFhoAu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674752443011" alt="bubbles">

        <!-- <svg id="blue_cross3" xmlns="http://www.w3.org/2000/svg">
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

        <img
          id="dots"
          src="~/static/hero_assets/dots compound 1.svg"
          alt="dots"
        /> -->

        
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
          class="about_profile-picture"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/pfp_shadow_CJcj9zFcxo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675091473619"
          alt="profile-pic"
        />
      </div>

      <div ref="aboutText" id="about-me" class="about_text">
        <div>
          <p>
            Hello,  I'm Yudai, a <span>web developer</span> and <span>UI designer</span>.
          </p>

          <p>
            I am a frontend developer utilising React and or Vue to deliver beautifully designed, user-centric UI / UX experiences.
          </p>

          <p>
            So far I have been working with international companies building products that gives users a great experience of usage, increasing company’s conversation rate. 
          </p>

          <p>Above all, I am a good researcher, who knows where to find the best solution.</p>
        </div>

        <div class="about_socials">
          <a href="https://twitter.com/creator_yudai"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-twitter_uc1z2SuZu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585976" alt="twitter"></a>
          <a href="https://www.linkedin.com/in/creatoryudai/"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-linkedin_5HaHYJ0hF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585980" alt="linkedin"></a>
          <a href="https://github.com/Yudai-creator?tab=repositories"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-github_FqVGwPThg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585983" alt="github"></a>
          <a href="#"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-youtube_BQucKyUgS.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585974" alt="youtube"></a>
        </div>


      </div>

      <img id="bubbles" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/bubbles_about_dHVZUO1hg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674754037477" alt="bubbles">
    </div>

    <!-- Social media spot -->
    <div class="social__section">
      <div  class="social__section_divider-top">
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
        <h2 ref="divider_top">
          I share my everyday learnings and achievements on twitter.
        </h2>
        <div ref="twitterInfo" class="twitter__info">
          
          <img
            id="twitter-banner"
            src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/twitter_banner_cube_wMUMyt4I5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672775173559"
            alt="banner"
          />
          <div class="twitter__threads">
            <h2>Popular threads</h2>
            <ul>
              <li>
                <a href="https://twitter.com/creator_yudai/status/1522584230894710785?s=21&t=_FIzG7zjfhIHM7Pgn00yag">CSS series: explaining from the basics to more complex topics of CSS.</a>
              </li>
              <li>
                <a href="https://twitter.com/creator_yudai/status/1554413927576092672?s=20&t=AJawjDbeyi0SvIMWmEvcGA">Free UI design resources: A compilation of tools and resources for UI designers and Frontend Developers.</a>
              </li>
              <li>
                <a href="https://twitter.com/creator_yudai/status/1599751218720432128?s=20&t=_HgjJVMqqLOLhd8tsgxCgQ">UI Design Principles: The building blocks of the modern web.</a>
              </li>
            </ul>
          </div>
          <div class="twitter__btn" @click="goTo">
            <svg ref="twitterLogo" class="twitter_logo" id="twitter-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path id="twitter_logo_path" d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z " fill="#25c1e9"/>
            </svg>
          </div>
        </div>
        <!-- <p>Sharing that sweet piece of content</p> -->
        <h2>I´ll be glad to connect with you</h2>
        <a href="https://twitter.com/creator_yudai?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-lang="en" data-show-count="false">Follow @creator_yudai</a>
      </div>
      <div class="social__others">
        <h3>You can also find me here</h3>
        <div>
          <a class="social__others_link" href="https://www.linkedin.com/in/yudai-h-911bb01bb/" target="_blank"> <img src="~/static/social-media_assets/bxl-linkedin-square.svg" alt="linkedin"/> Linkedin </a>
          <a class="social__others_link" href="https://github.com/Yudai-creator" target="_blank"> <img src="~/static/social-media_assets/bxl-github.svg" alt="github"/> Github </a>
        </div>
      </div>
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
      <h2 ref="waterMark" id="portfolio_water-mark">Designer</h2>
      <div class="portfolio__latest-work">
        <h2 id="work">My work</h2>
        <div class="portfolio__case_studies_wrapper">
          <!-- <div class="portfolio__case_studies" v-for="caseStudy of cases" :key="caseStudy">
            <nuxt-link :to="{name: 'slug', params: {slug: caseStudy.slug}}">
              <img class="case_studies__img" :src="`${caseStudy.imgLink}`" alt="featured image"/>
            </nuxt-link>
          </div> -->
          <div class="portfolio__case_studies">
            <div class="portfolio__main">
              <nuxt-link class="main__link" to="/telepay">
                <img class="main__img" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Work_Presentation/telepay_landing_JGKnXx9Fs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675093268088" alt="telepay">
                <p>Telepay</p>
              </nuxt-link>
            </div>
            <div class="portfolio__samples">
              <div class="sample">
                <div>
                  <h2>Produce O/S</h2>
                  <p>Enterprise Software Platform for the Produce Industry.</p>
                </div>
                <nuxt-link class="sample__link" to="/produce-os">
                  <img class="sample__img" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Work_Presentation/dark_bg_impact_achieved_3__xwiCr0LJ8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675094110243" alt="produce-os">
                </nuxt-link>
              </div>
              <div class="sample">
                <nuxt-link class="sample__link" to="/portfolio-website">
                  <img class="sample__img" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Work_Presentation/Screenshot_2023-01-11_at_15-11-45_Figma_POSvQPord.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675099044199" alt="produce-os">
                </nuxt-link>
                <div>
                  <h2>Portfolio Website</h2>
                  <p>Enterprise Software Platform for the Produce Industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio__projects">
        <h2 id="projects__water_mark">Dev</h2>
        <h2>My projects</h2>
        <div class="portfolio__projects_wrapper">
          <div class="project">
            <div class="project_icon"></div>
            <div class="project_info">
              <p>
                My latest projects, check it out to see how I work. Done with best frameworks in the house.
              </p>
              <div class="project_stack">
                <p>NUXT</p>
                <p style="margin-left: 1rem;">SASS</p>
                <p style="margin-left: 1rem;">GSAP</p>
              </div>
              <div class="project_links">
                <a href="https://github.com/Yudai-creator/yudai-creator-definitive"> Code</a>
              </div>
            </div>
          </div>
          <div class="project">
            <div class="project_icon"></div>
            <div class="project_info">
              <p>
                An archive to gather all my threads through out my journey on twitter. Great pieces of content about Web Development, UI/UX Design and my day to day learnings. 
              </p>
              <div class="project_stack">
                <p>HTML</p>
                <p style="margin-left: 1rem;">CSS</p>
              </div>
              <div class="project_links">
                <a href="https://github.com/Yudai-creator/yudai-h-twitter-threads"> Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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

    <!-- Referals -->

    <div class="referals">
      <h2>Referals from friends and clients</h2>
      <div class="referals_message">
        <div class="referals_pfp"></div>
        <p id="referal_name">Graham Ritchie</p>
        <p>I consider Yudai as one of the most talented professionals
        I have ever met, he’s very passionate about his work and
        always does everything he can to solve the problem.
        </p>
      </div>
      <img id="referal_blob" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/referal_blob_xzZ56yrIo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1675090868069" alt="blob">
    </div>

    <!-- Contact -->
    <div ref="contactSection" class="contact__section">
      <h2>Get in contact with me.</h2>

      <div ref="contactForm" class="contact__form">
        <form action="https://formcarry.com/s/1KP0RF3n-V" method="POST" accept-charset="UTF-8" id="contact_form" name="contact">
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
          />
        </form>
      </div>


      <!-- Another option of contact -->

      <div id="contact-dm" class="contact__dm">
        <h2> Or send me a DM on Twitter</h2>
        <a href="https://twitter.com/messages/compose?recipient_id=1176871799411433473&ref_src=twsrc%5Etfw" class="twitter-dm-button" data-size="large" data-lang="en" data-screen-name="https://twitter.com/creator_yudai" data-show-count="false">Message @https://twitter.com/creator_yudai</a>
      </div> 
    </div>
    <footer>
      <div class="footer__content">
        <div class="footer__content_logo">
          <a href="#hero"><img class="logo" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/yudai_UDBphSZy8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108298328" alt="Yudai H brand mark" /></a>
        </div>

        <NavLinks/>

        <div class="footer__content_social-links">
          <a class="social-links_pop" href="https://twitter.com/creator_yudai" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-twitter_uc1z2SuZu.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585976" alt="twitter logo"></a>

          <a class="social-links_pop" href="https://www.linkedin.com/in/yudai-h-911bb01bb/" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-linkedin_5HaHYJ0hF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585980" alt="linkedin logo"></a>

          <a class="social-links_pop" href="https://www.instagram.com/creator_yudai/" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-instagram_ZoEV25n5z.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585965" alt="instagram logo"></a>

          <a class="social-links_pop" href="https://github.com/Yudai-creator" target="_blank"><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-github_FqVGwPThg.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585983" alt="github logo"></a>

          <a class="social-links_pop" href="#" target="_blank" hidden><img src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/yudai-youtube_BQucKyUgS.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659113585974" alt="youtube logo"></a>

        </div>
      </div>
      
      <div class="footer__author">
        <p>Made by <span>Yudai H</span> 💙</p>
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
import NavLinks from "../components/NavLinks.vue";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import NavLinks1 from "../components/NavLinks.vue";
import NavLinks2 from "../components/NavLinks.vue";
gsap.registerPlugin(ScrollTrigger);
export default {
  async asyncData({ $content, params}) {
    const cases = await $content('case_studies', params.slug)
      .only(['slug', 'imgLink'])
      .sortBy('createdAt', 'asc')
      .fetch();
    
    return{
      cases
    }
  },
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


        //Linkedin card
        { hid: 't-type', name: 'linkedin:card', content: 'summary_large_image' },
        { hid: "linkedin:title", name: "linkedin:title", content: 'Yudai Creator' },
        { hid: "linkedin:url", name: "linkedin:url", content: 'https://yudaicreator.com/' },
        { hid: 'linkedin:description', name: 'linkedin:description', content: 'Yudai H portfolio website, showing up his skills as a UI designer and Frontend Developer.' },
        { hid: "linkedin:image", name: "linkedin:image", content: 'https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Meta_Images/portfolio-og-image___1_0QRxF6SIp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659147850094'}
      ],
      script: [
        {
          defer: true,
          domain: "yudaicreator.com",
          src: "https://plausible.io/js/plausible.js"
        },
        {
          src: "https://platform.twitter.com/widgets.js",
        },
        {
          src: "https://smtpjs.com/v3/smtp.js"
        },
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        }
      ]
    }
  },
  components: {
    ButtonPrimary,
    DesignThumbnail,
    ServiceCard,
    ButtonSecondary,
    HamburgerMenu,
    NavLinks,
    NavLinks1,
    NavLinks2
},
  mounted(){
    
    // const breakPoint = window.matchMedia("(min-width: 490px)");
    const {designer, developer, both, twitterInfo, aboutText, profilePicture, waterMark, contactForm, divider_top, contactSection, blobRight, blobShadow, blobStroke} = this.$refs;

    gsap.fromTo(aboutText, {x: -150, opacity: 0}, {scrollTrigger:{
      trigger: aboutText,
      toggleActions: "restart pause resume none"
    },duration: .5, x: 0, opacity: 1, ease: "circ.out"})

    gsap.fromTo(profilePicture, {x: 150, opacity: 0}, {scrollTrigger:{
      trigger: profilePicture,
      toggleActions: "restart pause resume none"
    },duration: .5, x: 0, opacity: 1, ease: "circ.out"})

    gsap.fromTo(twitterInfo, {y: 300, opacity: 0}, {scrollTrigger:{
      trigger: divider_top,
      toggleActions: "restart pause resume none",
      start: "top bottom"
    },duration: .5, y: 0, opacity: 1, ease: "circ.out"})

    gsap.fromTo(contactForm, {y: 300, opacity: 0}, {scrollTrigger:{
      trigger: contactSection,
      toggleActions: "restart pause resume none",
      start: "top bottom"
    },duration: .5, y: 0, opacity: 1, ease: "circ.out"})

    gsap.fromTo(waterMark, {x: -250, opacity: 0}, {scrollTrigger:{
      trigger: waterMark,
      toggleActions: "restart pause resume none"
    },duration: .5, x: 0, opacity: .1, ease: "circ.out"})

    gsap.to(designer, {duration: 1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: "circ.out"})
    gsap.to(developer, {duration: 1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: "circ.out"})
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
    },

    goTo(){
      parent.location = 'https://twitter.com/creator_yudai';
    },

    
    function(){
      emailjs.init("24xj9x0gTw1oyWu8V");
    },
    
    // SendMail(){
    //   var params = {
    //     from_name: 
    //   }
    // }

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
@import "~assets/styles/sections/referals_section";
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
  overflow: hidden;

  //overflow-y: hidden;

  width: 100%;
  background-color: $bg-color;
  color: $text-color;

  // font-family: "Lato", sans-serif;
  font-family: 'Archivo', normal;

  // -webkit-box-sizing: border-box;
  // -moz-box-sizing: border-box;
}

// body::-webkit-scrollbar{
//   display: none;
// }

@media (max-width: 480px) {
}
</style>
