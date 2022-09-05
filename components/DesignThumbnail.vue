<template name="DesignThumbnail">
    <div class="container">
        <!-- <p>{{textContent}}</p> -->
       <img class="design_thumbnail" :src=thumbnailLink :alt=thumbnailAlt> 
    </div>
</template>
<script>
// JS
export default  {
    props:{
        textContent: String,
        thumbnail: String,
        thumbnailLink: String,
        thumbnailAlt: String
    }

    // <div class="container" :style="{ backgroundImage: `url(${thumbnail})` }">
    //     <!-- <p>{{textContent}}</p> -->
    //    <!-- <img class="container_thumbnail" :src={thumbnail} :alt={thumbnailAlt}> -->
    // </div>
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;


.container{
    width: 48%;
    flex-shrink: 0;
    z-index: 2;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 490px){
        width: 100%;

        margin-top: 2rem;
    }

    .design_thumbnail{
        width: 95%;
        border-radius: 5px;
    }
}

</style>