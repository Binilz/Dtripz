<template>
  <v-img max-height="580" src="https://cdn.wallpapersafari.com/53/10/YeGEIJ.jpg">

  <div class="gray">
    <div class="helloo">
    </div>   
  </div>

  
  <v-row>
    
    <div class="tabs mt-1">
     <div class="border">
      <div class="nav-tabs">
        <div class="nav-item" @click="setActive('tab-1')" :class="{ 'active' : isActive('tab-1') }">
          <v-icon color="purple">mdi-home-city</v-icon>Hotels
      </div>
      <div class="nav-item"  @click="setActive('tab-2')" :class="{ 'active' : isActive('tab-2') }">
        <v-icon color="purple">mdi-airplane</v-icon>Flights
      </div>
      
    </div>
    </div>
    <div class="tab-content">
      <div class="tab-pane" v-show="isActive('tab-1')">
        <hotel-tab></hotel-tab>
        </div>
        <div class="tab-pane" v-show="isActive('tab-2')">
            <flight-tab></flight-tab>     
        </div>
    </div>
    </div>
   
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
 mounted() {
       this.hotel();
     },
 methods: {
  setActive(tab){
    this.activeTab = tab
  },
  isActive(tab){
    return this.activeTab === tab;
  },
  hotel() {       
          axios.post('http://192.168.1.46:8990/api/hotels/search', {
               

              }).then((response)=>{
                if(response.status===200){
                console.log(response.status);
                console.log(response.data);
                // this.$router.push('/login')
                }
              }).catch((error)=>{
                console.log('Hotel error');
                console.log(error.response);
              });             
        }, 
 },
 
     
   
  //  handleChange(choice) {
  //       const matchingCountry = this.countryDetails.find(details => details.country === choice);
  //       this.selectedCountryCapital = matchingCountry ? matchingCountry.capital : null;
    
// } 
  }

</script>

<style>


.gray {
  background-color: #3e154e;
  z-index: -1;
  height: auto;
  width: 2000px;
  position: absolute;
  overflow: hidden;
}

.helloo {
  background-color: #3e154e;
  top: 0;
  height: 250px;
  width: 3000px;
  
  position: relative;
  float:left;
  margin-left: 30px;
  margin-top: 10px;
}

.tabs{
  width:1700px;
  margin: 0 auto;
  color:"#3e154e";
  

}
.nav-tabs{
  display: flex;
  width: 300px;
  margin: 0 auto;
  
}
.nav-item{
  color: purple;
  transition: all 150ms;
  cursor: pointer;
  height: 100px;
  width: 150px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  
}

.tab-content{
  border: solid 3px rgb(200, 53, 205);
  border-radius: 10px;
  
}
.for-example h2{
  margin-top: 0;
  color: purple;
}

.active{
  color: white;

  
}
.tab-pane{
  background-color: white;
  padding: 12px;
  border-top-left-radius: 6px ;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
#no-background-hover::before {
  background-color: transparent !important; 
}
</style>