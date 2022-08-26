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
@import 'assets/mixins';

div{
    @include transitionBack;

    &:hover{
        transform: translateY(-5px);
    }
}

.secondary-button {
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
        }
    }
</style>

