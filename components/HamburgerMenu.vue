<template name="HamburgerMenu">
    <div class="menu_container">
        <div @click="hamburgerMenu" ref="toggle" class="menu_toggle">
            <span ref="bar1" class="bar1"></span>
            <span ref="bar2" class="bar2"></span>
            <span ref="bar3" class="bar3"></span>
        </div>
        <div class="menu_options">
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</template>
<script>

import {gsap} from "gsap" 
export default {

    methods:{
        // perro(e){
        //     console.log(e)
        // },
        hamburgerMenu(){
            const {bar1, bar2, bar3, toggle} = this.$refs;
            let bool = false;
            let tl = gsap.timeline();

            if(bool === false){
                tl.to(bar1, {duration: .1, width: '25px', height: '6px', top: '60%', left: '20%', rotate: '45deg'});
                tl.to(bar2, {duration: .1, rotate: '90deg' });
                tl.to(bar3, {duration: .1, width: '25px', height: '6px', top: '60%', left: '55%', rotate: '-45deg'});
                        
                bool = true;
                console.log(bool);
            }else{
                tl.to(bar1, {duration: .1, width: '37px', height: '5px',
                        top: '25%', left: '25%', rotate: '0deg'});
                tl.to(bar2, {duration: .1, opacity: 1});
                tl.to(bar3, {duration: .1, width: '37px', height: '5px',
                        top: '65%', left: '25%', rotate: '0deg'}); 
                        
                bool = false;
                console.log(bool);
            }

            tl.fromTo(toggle, {y: 0}, {duration: 1, y: 5})
        }
    }
}
</script>
<style lang="scss" scoped>
@use '~/assets/variables' as *;
@import '~/assets/styles/features/hamburgerMenu-overlay';
</style>