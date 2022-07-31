<template name="ButtonPrimary">
    <div>
        <a class="secondary-button" href="#contact_form">{{textContent}}</a>
    </div>
</template>
<script>
// JS
export default  {
    props:{
        textContent: String,
        link: String
    }
}
</script>
<style lang="scss" scoped>
/* CSS */
@use '~/assets/variables' as *;


.secondary-button {
        padding: 1rem;
        // background-color: $cta-color;
        color: $text-color;
        border: 3px solid $cta-color;
        border-radius: 2.5rem;

        box-shadow: 0 2px 10px #001D57, 0 1px 5px #2F1484;

        font-weight: bold;
        text-decoration: none;
    }
</style>