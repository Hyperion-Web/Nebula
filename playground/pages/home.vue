<script setup>
    import * as nebula from '../../dist/index.mjs'
    
    // Why doesn't this work???
    // const modules =  import.meta.glob('../sections/*.vue')

    // for (const path in modules) {
    // modules[path]().then((mod) => {
    //     console.log(mod)
    // })
    // }

    import ElevatorPitchSection from '../sections/ElevatorPitchSection.vue'
    import LandingSection from '../sections/LandingSection.vue'
    import WhyHireSection from '../sections/WhyHireSection.vue'

    const HomeLayout = nebula.layouts.HomeLayout

</script>

<template>
    <HomeLayout>
        <template #nav>
            <h1>Nebula Playground</h1>
        </template>
        <template #sections>
            <LandingSection/>
            <ElevatorPitchSection/>
            <WhyHireSection/> 
        </template>
        <template #footer>
            <span>(c) Nebula</span>
        </template>
    </HomeLayout>
</template>