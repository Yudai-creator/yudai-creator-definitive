<template name="DesignThumbnail">
    <div class="container" :style="{ backgroundImage: `url(${thumbnail})` }">
        <!-- <p>{{textContent}}</p> -->
       <!-- <img class="container_thumbnail" :src={thumbnail} :alt={thumbnailAlt}> -->
    </div>
</template>
<script>
// JS
export default  {
    props:{
        textContent: String,
        thumbnail: String,
        // thumbnailAlt: String,
    }
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;


.container{
    width: 48%;
    min-width: 250px;
    height: 500px;
    flex-shrink: 0;

    border-radius: 5px;
    // background-color: $bg-light;
    
    // background-size:  cover;
    background-repeat: no-repeat;
    // background-size: contain;
    @media (max-width: 490px){
        height: 250px;  
    }
}

</style>