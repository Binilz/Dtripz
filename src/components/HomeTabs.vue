<template>
  
  <v-img max-height="580" src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg">
    <v-row class="background">

  <v-row>
    
    <div class="tabs ">
     <div class="border align-center" >
      <div class="nav-tabs mt-8">
        <div class="nav-item" @click="setActive('tab-1')" :class="{ 'active' : isActive('tab-1') }">
          <v-icon class="icons">mdi-home-city</v-icon><strong class="icons">Hotels</strong> 
      </div>
      <div class="nav-item"  @click="setActive('tab-2')" :class="{ 'active' : isActive('tab-2') }">
        <v-icon class="icons">mdi-airplane</v-icon><strong class="icons">Flights</strong>
      </div>
      
    </div>
    </div>
    <div class="tab-content mt-4">
      <div class="tab-pane" v-show="isActive('tab-1')">
        <hotel-tab></hotel-tab>
        </div>
        <div class="tab-pane" v-show="isActive('tab-2')">
            <flight-tab></flight-tab>     
        </div>
    </div>
    </div>
   
  </v-row>
</v-row>
</v-img>
</template>

<script>
import HotelTab from '../components/tabs/HotelTab.vue';
import FlightTab from '../components/tabs/FlightTab.vue';

export default{
  components: {HotelTab,FlightTab},
 data : () => ({
    activeTab: 'tab-1',
    
 }),

 methods: {
  setActive(tab){
    this.activeTab = tab
  },
  isActive(tab){
    return this.activeTab === tab;
  },
  
 },
 
     
   
  //  handleChange(choice) {
  //       const matchingCountry = this.countryDetails.find(details => details.country === choice);
  //       this.selectedCountryCapital = matchingCountry ? matchingCountry.capital : null;
    
// } 
  }

</script>

<style>

.background {
  height: 40%;
  width: 120;
  background-color: #3e154e;
  background-repeat: no-repeat;
  background-size: cover;
}

.border{
  align-items: center;
  justify-content: center;
  
}


.tabs{
  /* width: 1200px; */
  margin: 0 auto;
  color:"#3e154e";
  justify-content: center;
}

.nav-tabs{
  display: flex;
  border-radius: 70px;
  border-color: #f04e6e;
  border-style: solid;
  border-width: 1px;
  width: 300px;
  height: 60px;
  background-color: #92278f;
  /* width: 950px; */
  margin: 0 auto;
  position:100 ;
  justify-content: center;
}

.nav-item{
  color:black;
  transition: all 150ms;
  cursor: pointer;
  /* background-color:#3e154e; */
  /* height: 80px; */
  height: 60px;
  width: 150px;
  /* width: 14.5%; */
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 6px ;
  border-top-right-radius: 6px;
}
#main-nav a {
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  padding: 10px;
  display: block;
}

#main-nav a:hover {
  background-color: #2c3e50;
  border: 1px solid #333;
}


.tab-content{
  border: solid 3px rgb(200, 53, 205);
  border-radius: 40px;
  align-items: center;
  justify-content: center;
}
.for-example h2{
  margin-top: 0;
  color: purple;
}

.active .icons{
  color: white;
  align-items: center;
  justify-content: center;
  
}
.tab-pane{
  background-color: white;
  padding: 12px;
  border-radius: 40px ;
 
}
#no-background-hover::before {
  background-color: transparent !important; 
}
</style>