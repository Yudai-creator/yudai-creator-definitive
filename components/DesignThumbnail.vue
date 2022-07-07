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
    width: 45%;
    height: 400px;

    flex-shrink: 0;

    border-radius: 5px;

    background-color: $bg-light;
}

</style>