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

        gap: .5rem;

        margin-bottom: 1rem;

        img{
            width: 45%;
        }
    }
}

</style>