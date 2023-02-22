<template name="ButtonPrimary">
    <div>
        <a class="secondary-button" href="#contact-dm">{{textContent}}</a>
    </div>
</template>
<script>
// JS
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default  {
    props:{
        textContent: String,
        link: String
    },

    mounted(){
        gsap.to('.secondary-button', {duraion: 1,'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, ease: "circ.out"}, .8)
    }
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;
@import 'assets/mixins';

div{
    z-index: 2;
    @include transitionBack;

    // clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);

    &:hover{
        transform: translateY(-5px);
    }
}

.secondary-button {
        clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
        transform: translateY(10px);

        z-index: 2;
        padding: 1rem 1.5rem;
        // background-color: $cta-color;
        color: $text-color;
        border: 3px solid $cta-color;
        border-radius: 2.5rem;
        @include transitionBack;

        font-weight: bold;
        text-decoration: none;

        &:hover{
            box-shadow: 0 2px 10px #012670, 0 1px 5px #2F1484;
            background-color: rgba(0, 153, 255, 0.158);
        }
    }
</style>

