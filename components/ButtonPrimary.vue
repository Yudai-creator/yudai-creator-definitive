<template name="ButtonPrimary">
    <div>
        <a class="cta-button" href="#work">{{textContent}}</a>
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
@import 'assets/mixins';


div{
    // animation: shake 3s ease-out infinite forwards;
    // animation-delay: 5s;
    @include transitionBack;

    &:hover{
        transform: translateY(-10px);
    }
}


.cta-button {
    
    padding: 1rem 1.5rem;
    // background-color: $cta-color;
    // background: linear-gradient($cta-color, #611afa);
    background: linear-gradient(217deg, $cta-color, rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, #3933b3, rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, #170c77, rgba(0,0,255,0) 70.71%);
    
    color: white;
    border-radius: 2.5rem;
    box-shadow: 0 2px 10px #072661af;


    @include transitionBack;

    font-weight: bold;
    text-decoration: none;

    // &:hover{
    //     box-shadow: 0 2px 10px #022f89, 0 1px 5px #2F1484;
    // }

    &:hover{
        background: linear-gradient(217deg, $cta-color, rgba(255,0,0,0) 70.71%),
                    linear-gradient(127deg, #3933b3, rgba(0,255,0,0) 70.71%),
                    linear-gradient(336deg, #170c77, rgba(0,0,255,0) 70.71%);
        
        box-shadow: 0 2px 10px #000817, 0 1px 5px #07001e;
    }
}

// @keyframes shake {
//     0%{ transform: translateY(0);}
//     25%{ transform: translateY(-5px);}
//     // 50%{ transform: translateY(-3px);}
//     // 75%{ transform: translateY(3);}
//     100%{ transform: translateY(0);}
// }

// @keyframes shake {
//     0%{ transform: rotate(0deg);}
//     25%{ transform: rotate(3deg);}
//     50%{ transform: rotate(-3deg);}
//     75%{ transform: rotate(3deg);}
//     100%{ transform: rotate(0deg);}
// }


</style>