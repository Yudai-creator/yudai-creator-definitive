<template name="component-name">
    <div class="card-container">
        <figure class="card_icon-wrapper">
            <img :src="icon" alt="icon">
        </figure>
        <h3>{{headline}}</h3>
        <p>{{text}}</p>
    </div>
</template>
<script>
// JS
export default {
     props: {
        icon: String,
        headline: String,
        text: String
    }
}
</script>


<style lang="scss" scoped>
@import '~/assets/mixins';
    .card-container{
        background-color: #020B1D;
        width: 260px;
        height: 320px;
        position: relative;

        border-radius: 10px;
        box-shadow: 1px 1px 10px #01060f;
        // max-width: 40%;

        padding: 2rem;
        margin-bottom: 2rem;
    }

    .card_icon-wrapper{
        position: absolute;
        left: 92%;
        top: -3%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        @include flexCenter(row);
        background-color: #020B1D;
    }

    h3{
        margin-top: 2rem;
        margin-bottom: 1rem;
    }


</style>