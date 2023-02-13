<template name="Header">
    <header>
        <figure id="hero">
          <img class="logo" src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/yudai_UDBphSZy8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108298328" alt="Yudai H brand mark" />
        </figure>

        <NavLinks/>

        <!-- <div class="hero__contact-button">
          <ButtonSecondary textContent="Contact"/>
        </div> -->

        <!-- <HamburgerMenu /> -->

        <img
          ref="blobRight"
          id="blob-right-corner"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-right-corner_wHCu4gECK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108635820"
          alt="blob shape graphic"
        />

        <!-- <svg
          ref="blobStroke"
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
        </svg> -->

        <img
          ref="blobShadow"
          id="blob-right-corner-shadow"
          src="https://ik.imagekit.io/u33i3sss0/Portfolio_Website/Graphics/blob-shape-right-corner-shadow_UzRWAQnWT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659108634210"
          alt="blob shape shadow graphic"
        />
      </header>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">

header {
    font-family: 'Lato', sans-serif;
    position: relative;
    width: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    // margin-left: 1.5rem;
    // margin-right: 1.5rem;
    // margin-top: 1rem;
    // margin-bottom: 1rem;

    padding: 2rem 6rem 2rem 6rem;

    @media (max-width: 490px) {
      padding: 2rem 2rem 2rem 2rem;  
    }

    .logo {
        max-width: 4em;
        cursor: pointer;
        z-index: 2;
    }

    // .header_hamburger-menu {
    //     cursor: pointer;
    //     @media (min-width: 490px){
    //         display: none;
    //     }
    // }

    .hero__contact-button {
        @media (max-width: 490px) {
            display: none;

        }
    }



    #blob-right-corner {
        width: 80%;
        z-index: 1;

        // responsive width
        // max-width: 60em;
        position: absolute;
        left: 60%;

        z-index: -1;

        filter: blur(40px);

        @media (min-width: 1450px){
            width: 1650px;
        }
    }

    #blob-stroke {
        position: absolute;
        width: 60%;
        max-width: 40em;
        left: 55%;
        top: .1%;
        z-index: -1;

        filter: blur(3px);
        @media (min-width: 1450px){
            width: 1650px;
        }
    }

    #blob-right-corner-shadow {
        width: 80%;
        position: absolute;
        left: 50%;
        overflow: hidden;
        z-index: -2;

        filter: blur(40px);
        @media (min-width: 1450px){
            width: 1650px;
        }
    }
}

</style>