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
    .card-container{
        background-color: #020B1D;
        width: 50%;
        position: relative;

        border-radius: 10px;
        // max-width: 40%;

        padding: 2rem;
        margin-bottom: 2rem;
    }

    .card_icon-wrapper{
        background-color: #020B1D;
        margin-bottom: 1rem;
    }

    h3{
        margin-bottom: 1rem;
    }


</style>