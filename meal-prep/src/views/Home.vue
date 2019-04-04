<template>
  <span>
    <home-hero></home-hero>
    <home-details></home-details>
    <home-plans></home-plans>
  </span>
</template>

<script>
/* TODO: Refactor to resolve all lint warnings */
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
   name: 'home',
   components: {
     HomeHero,
     HomeDetails,
     HomePlans
   }
};
</script>
