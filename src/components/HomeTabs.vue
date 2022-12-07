<template>
  
  <v-img max-height="580" src="https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg">
    <v-row class="background">

  <v-row>
    
    <div class="tabs ">
     <div class="border align-center" >
      <div class="nav-tabs mt-8">
        <div class="nav-item" @click="setActive('tab-1')" :class="{ 'active' : isActive('tab-1') }">
          <v-icon color="white">mdi-home-city</v-icon>Hotels
      </div>
      <div class="nav-item"  @click="setActive('tab-2')" :class="{ 'active' : isActive('tab-2') }">
        <v-icon color="white">mdi-airplane</v-icon>Flights
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
import axios from 'axios'
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
}

.border{
  align-items: center;
  justify-content: center;
  
}


.tabs{
  width:1700px;
  margin: 0 auto;
  color:"#3e154e";
  
  

}
.nav-tabs{
  display: flex;
  height:70px;
  width: 300px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-width: 3px;
  border-radius: 70px;
  border-color: #f04e6e;
  
  background-color: #92278f;

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
.nav-item{
  color: rgb(0, 0, 0);
  transition: all 150ms;
  cursor: pointer;
  height: 100px;
  width: 150px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  

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

.active{
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