<template name="Header">
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
</template>

<script>
export default {
    
}
</script>


<style lang="sass" scoped>

</style>