<template>
    <div class="container">
        <slot name="general-info">
            <div class="case_headline">
                <p>{{ caso.tag }}</p>
                <h1>{{ caso.title }}</h1> 
            </div>

            <div class="case_description">
                <div class="case_perks">
                    <p>Branding & Identity</p>
                    <span>*</span>
                    <p>Web Design</p>
                    <span>*</span>
                    <p>UI/UX</p>
                    <span>*</span>
                    <p>Development</p>
                </div>
                <p class="description">{{ caso.description }}</p> 
            </div>
        </slot>        
    </div>
</template>

<script>
   export default {

    props:{
        caso:{
            type: Object,
            required: true
        }
    }

   }
</script>

<style lang="scss">
@use "~/assets/variables" as *;

.container{
    margin-bottom: 3rem;
}

.case_headline{
    margin-bottom: 2rem;

    p{
        color: $cta_color;
    }
}

.case_description{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 490px){
        flex-direction: column;
        align-items: flex-start;
    }

    .case_perks{
        
        @media (max-width: 490px){
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
    }

    .description{
        width: 45%;

        @media (max-width: 490px){
            width: 100%;
        }
    }
}

p{
    font-size: 1.2rem;
}

h1 {
    font-family: 'Clash Display', normal;
    font-weight: bold;
    font-size: 3rem;;
}

</style>