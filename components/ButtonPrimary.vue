<template name="ButtonPrimary">
    <div class="cta-wrapper">
        <a class="cta-button" href="#work">{{textContent}}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z" fill="#fff"/><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z" fill="#fff"/></svg>
        </a>
    </div>
</template>

<script>
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// JS
export default  {
    props:{
        textContent: String,
    },

    mounted(){
        gsap.to('.cta-button', {duraion: 1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, ease: "circ.out"}, .7)
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

    &:hover{
        transform: translateY(-7px);
    }
}


.cta-button {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    transform: translateY(10px);

    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    -webkit-appearance: none;
    position: relative;
    padding: 1rem 1.5rem;
    // background-color: $cta-color;
    // background: linear-gradient($cta-color, #611afa);
    background: linear-gradient(217deg, $cta-color, rgba(255,0,0,0) 70%),
                linear-gradient(127deg, #3933b3, rgba(0,255,0,0) 70%),
                linear-gradient(336deg, #170c77, rgba(0,0,255,0) 70%);
    
    background-size: 200%;
    background-position: 25% 50%;

    color: white;
    border-radius: 2.5rem;
    box-shadow: 0 2px 10px #072661af;


    @include transitionBack;

    font-weight: bold;
    text-decoration: none;

    &:hover{
        background-position: 90% 90%;
        
        box-shadow: 0 2px 10px #000817, 0 1px 5px #07001e;
    }

    &:hover::after{
        animation: btn_indicator 1s cubic-bezier(0.86,0,0.07,1) forwards alternate;
    }

    @keyframes btn_indicator {
        from { transform: rotate(0deg) translateY(-80px) rotate(0deg); }
        to { 
            transform: rotate(180deg) translateY(-80px) rotate(-180deg); 

            background: linear-gradient(127deg, #018cdd, rgba(0,255,0,0) 100%),
                        linear-gradient(217deg, $cta-color, rgba(255,0,0,0) 100%);

            background-size: 200%;
            background-position-x: 100%;

            box-shadow: 0 2px 10px #018cdd;
        }
    }
}

</style>