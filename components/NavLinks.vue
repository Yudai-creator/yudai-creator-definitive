<template name="NavLinks">
    <div>
        <ul class="nav_links">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
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
@import 'assets/mixins';

.nav_links {
        font-family: 'Clash Display', normal;
        z-index: 2;
        

        li {
            list-style: none;
            display: inline;
            margin-left: 5rem;
            @media (max-width: 490px) {
                margin-left: 2rem;
            }

            a {
                position: relative;
                font-size: 1.2rem;
                text-decoration: none;
                color: #e5e5e5;
                
                @include transitionBack;

                clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

                &:before, &:after{
                    content: '';
                    position: absolute;
                    border-bottom: 3px solid $cta-color;
                    border-radius: 1em;
                    bottom: 0;

                    @include transitionBack;
                }

                &:before{
                    width: 1em;
                    transform-origin: left;
                }

                &:after{
                    width: 82%;
                    left: 0;
                    transform: translateX(125%);
                }

                &:hover:before{
                    transform: scaleX(0.3);
                }

                &:hover:after{
                    transform: translateX(30%);
                    border-bottom: 3px solid #9665FF;
                }

                // &:hover{
                //     text-shadow: 0 3px 5px $primary-color;
                // }

                // &::after {
                //     content: '';
                //     position: absolute;
                //     top: 120%;
                //     left: 50%;
                //     transform: translate(-50%, -50%);
                //     width: 0px;
                //     height: 2.5px;

                    

                //     @include transitionBack;
                // }

                // &:hover::after {
                //     background-color: $cta-color;
                //     width: 75px;
                //     top: 115%;
                //     border-radius: 5px;
                // }
            }
        }
    }


</style>