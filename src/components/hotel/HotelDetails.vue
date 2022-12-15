<template>
    <div>
      <common-header></common-header>
      <!-- <v-dialog
      v-model="dialoghotel"
      persistent
      max-width="600px"
    > -->
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
        <!-- <template slot="progress">
          <v-progress-linear
            color="#92278f"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template> -->
        <!-- <v-card> -->
          <v-card>
            <v-container fluid>
              <!-- <v-carousel hide-delimiters height="400" cycle
                show-arrows-on-hover>
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide"
                >
                </v-carousel-item>
              </v-carousel> -->
      <v-row dense>
        <v-col
          v-for="(card, index) in slides"
          :key="index"
          :cols="4"
          v-if="index < limit_by"
        >
        <!-- <div v-if="index < limit_by"> -->
          <v-card>
            <v-img
              :src="card"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <!-- <v-card-title v-text="card.title"></v-card-title> -->
            </v-img>
          </v-card>
          <!-- </div> -->
          <!-- <div v-if="index === 6">
            <v-img
              :src="card"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-btn v-on:click="MoreAndLess(default_limit, slides.length)" >{{ limit_by === 5 ? "See More" : "See Less" }}</v-btn>
            </v-img>
          </div> -->
        </v-col>
        <!-- <v-btn>see more</v-btn> -->
        <v-btn v-on:click="MoreAndLess(default_limit, slides.length)" 
        class="btn btn-link">
       {{ limit_by === 5 ? "See More" : "See Less" }}
      </v-btn>
      </v-row>
    </v-container>
          </v-card>
          <!-- <v-row>
            <v-col cols="12" sm="7">
              <v-img height="380" src="https://m.economictimes.com/thumb/msid-90724647,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg"></v-img>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img height="380" :src="Images"></v-img>
            </v-col>
          </v-row>  -->
        <!-- </v-card> -->
        

           

        <v-divider class="mx-4"></v-divider>
 
        <v-card-title> Hotel Description </v-card-title>
          <v-card-text><div class="pre-formatted">
            {{Description}}
          </div></v-card-text>

          <v-card-title>Hotel Facilities  
             <!-- <v-card-text><div>
            {{HotelFacilities}}
          </div></v-card-text> -->
          </v-card-title>
            <v-list dense>
                <!-- <v-subheader>REPORTS</v-subheader> -->
                <!-- <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
                > -->
                  <v-list-item
                    v-for="(item, i) in HotelFacilities"
                    :key="i"
                  >
                  <v-list-item-icon>
                    <v-icon color="#92278f">mdi-checkbox-multiple-marked</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              <!-- </v-list-item-group> -->
            </v-list>
         

          <!-- <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="purple white--text"
              column
            >
              <v-chip>1</v-chip>

              <v-chip>2</v-chip>

              <v-chip>3</v-chip>

              <v-chip>4</v-chip>
            </v-chip-group>
          </v-card-text> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
            text
            @click="reserve"
          >
            Reserve
          </v-btn> 
          <v-btn
              text
              color="red"
              @click="dialoghotel = false"
            >
              Cancel
            </v-btn>
        </v-card-actions>
        </v-card>
        <br>
        <br>
    <!-- </v-dialog> -->
    <!-- <footer-page></footer-page> -->
    <contact-info></contact-info>
    </div>
</template>

<script>
import axios from 'axios';
import CommonHeader from '../CommonHeader.vue';
import ContactInfo from '../ContactInfo.vue';
// import FooterPage from '../FooterPage.vue';

    export default {
      components:{CommonHeader, ContactInfo},
      data:()=>({
        loading: false,
        default_limit: 5,
        limit_by: 5,
        selection: 1,
        hotelDetails:[],
        HotelName:'',
        Rating:'',
        Address:'',
        Description:'',
        HotelFacilities:[],
        HotelPicture:'',
        Images:'',
        HotelContactNo:'',
        slides: [],
        RoomsDetails:'',
        cards: [{ 
          // title: 'Pre-fab homes', 
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
        // dialoghotel: false,
    }),

    created() {
          this.hotelDetails = JSON.parse(localStorage.getItem("HotelDetails") || '[]');
          console.log(this.hotelDetails);
          this.HotelName = this.hotelDetails.HotelName;
          this.Rating = this.hotelDetails.StarRating;
          this.Address = this.hotelDetails.Address
          // this.Description = this.hotelDetails.Description;
          this.Description =  this.hotelDetails.Description.replace(/<[^>]*>?/gm, '').replace(/\&nbsp;/g, '\n');
          this.HotelFacilities = this.hotelDetails.HotelFacilities;
          this.HotelPicture= this.hotelDetails.HotelPicture;
          this.Images= this.hotelDetails.Images[0];
          this.slides= this.hotelDetails.Images;
          this.HotelContactNo = this.hotelDetails.HotelContactNo;
          console.log(this.HotelName);
        },

    methods:{
      // reserve () {
      //   // const store = localStorage.getItem('YourItem');
      //     this.loading = true
      //     setTimeout(() => (this.loading = false), 2000)
      // },
      reserve(item){
        this.loading = true;
          setTimeout(() => (this.loading = false), 2000)
          const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress);
          const TraceId = localStorage.getItem('TraceId');
          console.log(TraceId);
          const Token = localStorage.getItem('Token');
          console.log(Token);
          const ResultIndex = localStorage.getItem('ResultIndex');
          console.log(ResultIndex);
          const HotelCode = localStorage.getItem('HotelCode');
          console.log(HotelCode);
          axios.post('http://192.168.1.35:8991/api/hotels/hotel-room',{
            // params:{
              "HotelCode": HotelCode,
              "ResultIndex": ResultIndex,
              "TraceId": TraceId,
              "TokenId": Token,
              "EndUserIp": IPAddress,
            // }
          }).then((response)=>{
              console.log(response.status);
              console.log(response.data);
              console.log(response.data.GetHotelRoomResult.HotelRoomsDetails);
              this.RoomsDetails = response.data.GetHotelRoomResult.HotelRoomsDetails;
              localStorage.setItem('RoomsDetails',JSON.stringify(this.RoomsDetails));
              this.$router.push("/hotelroom");
              }).catch((error)=>{
                  alert( error)
              console.log(error);
            }) 
          console.log(item);
        },
        MoreAndLess (default_limit, filters_length) {
        this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
    }
    }
    }
</script>

<style>
.pre-formatted {
  white-space: pre-wrap
}
</style>