<template>
  <div>
  <home-headers></home-headers>
  <home-tabs></home-tabs>
  <home-trends></home-trends>
  <home-destination></home-destination>

  <home-container></home-container>
  
  <home-footer></home-footer>
</div>
</template>

<script>
import HomeHeaders from '../components/HomeHeaders.vue';
import HomeTabs from '../components/HomeTabs.vue';
import HomeTrends from '../components/HomeTrends.vue';
import HomeDestination from '../components/HomeDestination.vue';
import HomeContainer from '../components/HomeContainer.vue';
import HomeFooter from '../components/HomeFooter.vue';

export default {
  components: {HomeHeaders,HomeTrends,HomeTabs,HomeDestination,HomeFooter,HomeContainer}
}

</script>