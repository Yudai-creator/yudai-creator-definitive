<template name="DesignThumbnail">
    <div class="container">
       
    </div>
</template>
<script>
// JS
export default  {
    props:{
        textContent: String,

    }
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;


.container{
    width: 200px;
    height: 200px;

    margin: 2rem;

    border-bottom: 3px solid $cta-color;
    border-radius: 5px;

    background-color: $bg-light;
}

</style>