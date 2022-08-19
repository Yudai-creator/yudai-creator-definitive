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
            const {bar1, bar2, bar3} = this.$refs;
            let bool = false;
            let tl = gsap.timeline();

            if(bool === false){
                tl.to(bar1, {duration: .1, width: '45px', height: '6px',
                        top: '45%', left: '15%', rotate: '45deg'});
                tl.to(bar2, {duration: .1, opacity: 0});
                tl.to(bar3, {duration: .1, width: '45px', height: '6px',
                        top: '45%', left: '15%', rotate: '-45deg'});
                        
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
        }
    }
    // mounted(){
    //     const {toggle, bar1, bar2, bar3} = this.$refs;
    //     let bool = false;
    //     let tl = gsap.timeline();
    //     // gsap.to(toggle, {duration: .3, y: 10})

    //     toggle.addEventListener('click', () => {
    //         if(bool === false){
    //             gsap.to(bar1, {duration: .1, width: '45px', height: '6px', 
    //                     top: '45%', left: '15%', rotate: '45deg'})
    //             gsap.to(bar2, {duration: .1, opacity: 0})
    //             gsap.to(bar3, {duration: .1, width: '45px', height: '6px', 
    //                     top: '45%', left: '15%', rotate: '-45deg'})
                
    //             bool = true;
    //             console.log(bool);
    //         }else{
    //             gsap.to(bar1, {duration: .1, width: '37px', height: '5px', 
    //                     top: '25%', left: '25%', rotate: '0deg'})
    //             gsap.to(bar2, {duration: .1, opacity: 1})
    //             gsap.to(bar3, {duration: .1, width: '37px', height: '5px', 
    //                     top: '65%', left: '25%', rotate: '0deg'})
                
    //             bool = false;
    //             console.log(bool);
    //         }
    //     })
    // }
}
</script>
<style lang="scss" scoped>
@use '~/assets/variables' as *;
@import '~/assets/styles/features/hamburgerMenu-overlay';
</style>