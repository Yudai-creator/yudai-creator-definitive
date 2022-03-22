<template name="ButtonPrimary">
    <div>
        <a class="cta-button" href="#">See my work</a>
    </div>
</template>
<script>
// JS
export default  {
    
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;
.cta-button {
        padding: 1.2rem;
        background-color: $cta-color;
        color: $bg-color;
        border-radius: 2.5rem;

        box-shadow: 0 2px 10px #001D57, 0 1px 5px #2F1484;

        font-weight: bold;
        text-decoration: none;
    }
</style>