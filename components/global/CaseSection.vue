<template>
    <div class="section_container">
        <div class="section_headline">
            <h1>{{ section.title }}</h1> 
            <p>{{ section.description }}</p>
        </div>

        <div class="section_img_grid">
            <div class="grid_row">
                <img :src="section.img1" alt="">
                <img :src="section.img2" alt="">
            </div>
            <div class="grid_row">
                <img :src="section.img3" alt="">
                <img :src="section.img4" alt="">
            </div>
        </div>
            
    </div>
</template>

<script>

    import {gsap} from "gsap"
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
   export default {

    props:{
        section:{
            type: Object,
            required: true
        }
    }

   }
</script>

<style lang="scss">
@use "~/assets/variables" as *;

.section_container{
    margin-top: 5rem;
}


.section_headline{
    position: relative;
    width: 100%;

    margin-bottom: 2rem;

    h1{
        @media (max-width: 490px){
            font-size: 1.5 rem;
        }
    }
}

.section_img_grid{
    position: relative;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: column;

    .grid_row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;

        margin-bottom: 1rem;

        @media (max-width: 490px){
            flex-direction: column;
        }

        img{
            width: 50%;
            transition: .5s all cubic-bezier(0.65,0.05,0.36,1);

            &:hover{
                transform: scale(1.035);
                box-shadow: 1px 1px 5px rgb(112, 112, 112);
            }

            @media (max-width: 490px){
                width: 100%;
            }
        }
    }
}

</style>