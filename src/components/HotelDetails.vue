<template>
  <div>
    <home-headers></home-headers>
    <br>
  
    <v-card
        :loading="loading"
        class="mx-auto"
        width="920px"
      >
      <template slot="progress">
        <v-progress-linear
          color="purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
        <v-row
            align="center"
            class="mx-0"
          >
          <v-card-title>
          <h2>{{ HotelName }}</h2>
        </v-card-title>
            <v-rating
              :value="Rating"
              color="amber"
              dense background-color="grey darken-1"
              half-increments
              readonly
              size="25"
            ></v-rating>
            <v-spacer></v-spacer>
            <v-btn
            color="purple" dark
            @click="reserve"
          >
            Reserve 
          </v-btn>&nbsp;&nbsp;&nbsp;
          <button class="btn shadow-none" height="35" width="180" flat><v-img @click="openGoogleMap(item)" height="35" width="180" src="city-map.png">            
            <v-icon class="ml-0 mt-2 " color="red" size="28" >mdi-map-marker</v-icon><strong class="ml-0">Show on Map</strong>
          </v-img></button>
          
            <!-- <div class="grey--text ms-4">
              {{Rating}}
            </div> -->
          </v-row>
          <v-card-text>
          <!-- <v-img src="city-map.png" height="162px"> -->
          

          <!-- <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-currency-rupee</v-icon>
           {{ Price}}
          </div> -->
          
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-map-marker</v-icon>
           {{ Address}}
          </div>
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-phone-plus</v-icon>
           {{ HotelContactNo}}
          </div>
        <!-- </v-img> -->
          <!-- <div>No: Rooms</div> -->
        </v-card-text>
        <v-card>
          
        </v-card>
        </v-card> 

  </div>
</template>
<script>
import HomeHeaders from './HomeHeaders.vue'

export default{
  components: {
      HomeHeaders,
    },
    data:()=>({
      HotelName:'',
      Address:'',
      HotelContactNo:''

    }),
    created() {
          this.hotelDetails = JSON.parse(localStorage.getItem("HotelDetails") || '[]');
          console.log(this.hotelDetails);
          this.HotelName = this.hotelDetails.HotelName;
          this.Rating = this.hotelDetails.StarRating;
          this.Address = this.hotelDetails.Address;
          this.HotelContactNo = this.hotelDetails.HotelContactNo;
},
}
</script>
