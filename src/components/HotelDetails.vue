<template>
  <div>
    <home-headers></home-headers>
    <br>
    <v-dialog
    content-class="elevation-0"
    v-model="isLoggingIn"
    persistent
    width="600"
  >
<!-- <v-card

>
  <v-card-text> -->
    <v-img src="loadingHotel.gif"></v-img>
  <!-- </v-card-text>
</v-card> -->
</v-dialog>
    <v-dialog
    v-model="seemore"
    max-width="1200px" 
    class="overflow-y-hidden"
  >
    <v-card
      class="mx-auto"
      max-width="1200px"
    >
          <template>
          <v-card height="800px">
            <v-app-bar
              absolute
              color="white"
              elevate-on-scroll
              scroll-target="#scrolling-techniques-7"
              flat
            >
          
              <!-- <v-layout flat class="justify-center"> -->
                <div class="justify-center ml-16">
                  <v-row></v-row>
                </div>
                <v-spacer></v-spacer>
                <div>
                    <v-row align="center" justify="right">
                    <v-card-title>
                      <h4>{{ HotelName }}</h4>
                    </v-card-title>
                    <v-rating 
                      :value="Rating"
                      color="amber"
                      dense background-color="grey darken-1"
                      half-increments
                      readonly
                      size="20"
                    ></v-rating>
                    &nbsp; <v-btn color="purple" dark @click="reserve"> Reserve Now</v-btn>
                    <!-- <v-btn class="text-right" color="blue darken-1" text @click="seemore = false" >Close</v-btn> -->
                  </v-row>
                </div>
                <!-- </div> -->
                <v-spacer></v-spacer>
                <div class="justify-right">
                  <v-btn class="text-right" text @click="seemore = false" ><v-icon>mdi-close</v-icon></v-btn>
                </div>
              <!-- </v-layout> -->
            </v-app-bar>
            <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
            max-height="700"
          >
            <!-- <v-container style="height: 1500px;"> -->
              <v-card class="mx-auto" max-width="1000px">
                  <v-row>
                    <v-col :cols="3"
                      v-for="(card, index) in slides" :key="index"
                     class="d-flex child-flex"  >
                    <v-hover  v-slot="{ hover }">
                      <v-card class="d-flex" :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" 
                      @click="click(card)">
                        <v-img
                          :src="card"
                          height="200px"
                          :lazy-src="card"
                          aspect-ratio="1"
                        >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular
                              indeterminate
                              color="purple lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                        </v-img>
                      </v-card>
                    </v-hover>
                    </v-col>
                  </v-row>
                </v-card>
            <!-- </v-container> -->
          </v-sheet>
        </v-card>
      </template>
      </v-card>
      </v-dialog>
      <v-dialog 
      v-model="clickImg"
      max-width="1200px" 
      class="overflow-y-hidden">
      <v-card
        height="800px"
        class="mx-auto"
        max-width="1200px"
      >
      <br>
      <v-app-bar
                absolute
                color="white"
                elevate-on-scroll
                scroll-target="#scrolling-techniques-7"
                flat
              >
            
                <!-- <v-layout flat class="justify-center"> -->
                  <div class="justify-center ml-16">
                    <v-row><v-btn text @click="clickImg = false"><v-icon>mdi-arrow-left</v-icon> Gallery</v-btn></v-row>
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                      <v-row align="center" justify="right">
                      <v-card-title>
                        <h4>{{ HotelName }}</h4>
                      </v-card-title>
                      <v-rating 
                        :value="Rating"
                        color="amber"
                        dense background-color="grey darken-1"
                        half-increments
                        readonly
                        size="20"
                      ></v-rating>
                      &nbsp; <v-btn color="purple" dark @click="reserve"> Reserve Now</v-btn>
                      <!-- <v-btn class="text-right" color="blue darken-1" text @click="seemore = false" >Close</v-btn> -->
                    </v-row>
                  </div>
                  <!-- </div> -->
                  <v-spacer></v-spacer>
                  <div class="justify-right">
                    <v-btn class="text-right" text @click="seemore = false, clickImg = false" ><v-icon>mdi-close</v-icon></v-btn>
                  </div>
                <!-- </v-layout> -->
              </v-app-bar>

        <v-row> 
         <v-col class="mx-auto" align-self="center">
          <v-hover v-slot="{ hover }">
            <div
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
              <v-btn x-large icon color="grey"><v-icon size="75" class="grey--text" :class="{ 'show-btns': hover }" icon>mdi-chevron-left</v-icon></v-btn>
            </div>
          </v-hover>
        </v-col>
         <v-spacer></v-spacer>
        <v-col>
         <v-card class="mx-auto" max-width="800px">
          <v-img :src="Img"  height="600px"></v-img>
         </v-card>
        </v-col>
         <v-spacer></v-spacer>
        <v-col class="text-right" align-self="center">
          <v-hover v-slot="{ hover }">
            <div
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
              <v-btn x-large icon color="grey"><v-icon size="75" class="grey--text" :class="{ 'show-btns': hover }" icon>mdi-chevron-right</v-icon></v-btn>
            </div>
          </v-hover>
        </v-col>
         <br> 
        <v-card class="mx-auto" max-width="1000px">
          <v-row>
            <v-col
              v-for="(card, index) in slides"
              :key="index"
              :cols="2"
              v-if="index < 6"
            >
              <v-card class="d-flex" @click="click(card)">
                <v-img
                  :src="card"
                  class="white--text align-end"
                  
                  height="100px"
                >
                </v-img>
              </v-card>
            </v-col>
          </v-row>
            </v-card>
          </v-row>
          </v-card>
    </v-dialog>
  
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
   
          </v-row>
          <v-card-text>
  
          
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-map-marker</v-icon>
           {{ Address}}
          </div>
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-phone-plus</v-icon>
           {{ HotelContactNo}}
          </div>
        </v-card-text>
        <v-card>
          <v-container fluid>
            <v-row dense>
              <v-col :cols="4"
                v-for="(card, index) in slides" :key="index"
                v-if="index < limit_by">
                <v-card>
                  <v-img
              :src="card"
              class="white--text align-end" 
              height="200px"
            ></v-img>
                </v-card>
              </v-col>
              <v-img height="200" width="200" class="mt-1 ml-1 mr-1 seemore" 
              gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.5)" @click="seemore = true"
              src="https://mpng.subpng.com/20180920/kxv/kisspng-hilton-antwerp-old-town-hilton-hotels-resorts-br-5ba34fa4ad0838.9783338615374294127088.jpg">
             
              <v-layout justify-center class="mt-16">
                <v-card-actions>
                  <v-btn primary @click="seemore = true" text dark style="textTransform: none">
                  <strong><h2>+ {{slides.length - 5}} Photos</h2></strong>
                  </v-btn>
                </v-card-actions>
              </v-layout>
              </v-img>
              </v-row> 
              <v-row>
                <v-card  class="mx-auto"
                width="920px">
                <div>
                  <v-card-title> Hotel Description </v-card-title>
                  <v-card-text><div class="pre-formatted">
                    {{Description}}
                  </div></v-card-text>
                </div>
                  
                </v-card>
              </v-row>    
              <v-row>
                <v-card  class="mx-auto"
                width="920px">
                <div>
                  <v-card-title> Hotel Facilities </v-card-title>
                  <v-list>
                    <v-list-item v-for="(item,hf) in HotelFacilities" :key="hf">
                      <v-list-item-icon>
                        <v-icon color="#92278f">mdi-checkbox-multiple-marked</v-icon>
                      </v-list-item-icon>
                      {{item}}
                    </v-list-item>
                  </v-list>    
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                <v-btn
                color="purple" text
                @click="reserve"
                :disabled="dialog"
                :loading="isLoggingIn"
              >
                Reserve 
              </v-btn> 
            </v-card-actions>   
                  
                  
                </v-card>
              </v-row>   
          </v-container>
        </v-card>
        </v-card> 

  </div>
</template>
<script>
import HomeHeaders from './HomeHeaders.vue';
import axios from 'axios';

export default{
  components: {
      HomeHeaders,
    },
    data:()=>({
      HotelName:'',
      Address:'',
      HotelContactNo:'',
      latitude: '',
      longitude: '',
      limit_by: 5,
      slides: [],
      seemore: false,
      Description:'',
      HotelFacilities:[],
      isLoggingIn: false,
      dialog: false,
      RoomsDetails:'',
      clickImg: false,
      Images:'',
      Img:'',

    }),
    created() {
          this.hotelDetails = JSON.parse(localStorage.getItem("HotelDetails") || '[]');
          console.log(this.hotelDetails);
          this.HotelName = this.hotelDetails.HotelName;
          localStorage.setItem('HotelName',this.HotelName);
          this.Rating = this.hotelDetails.StarRating;
          this.Address = this.hotelDetails.Address;
          this.HotelContactNo = this.hotelDetails.HotelContactNo;
          this.latitude = this.hotelDetails.Latitude;
          console.log(this.latitude);
          this.longitude = this.hotelDetails.Longitude;
          console.log(this.longitude);
          this.slides= this.hotelDetails.Images;
          this.Images= this.hotelDetails.Images[0];
          this.Description = this.hotelDetails.Description.replace(/<[^>]*>?/gm, '').replace(/\&nbsp;/g, '\n');
          this.HotelFacilities = this.hotelDetails.HotelFacilities;
},
methods:{
  openGoogleMap() {
        const urlSuffix = [this.latitude,this.longitude]
        window.open(
          "https://www.google.com/maps?q=" + urlSuffix,
         
        );
      },
      reserve(item){
        this.loading = true;
        this.isLoggingIn = true;
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
          axios.post(this.$hostname + 'api/hotels/hotel-room',{
            "HotelCode": HotelCode,
              "ResultIndex": ResultIndex,
              "TraceId": TraceId,
              "TokenId": Token,
              "EndUserIp": IPAddress,
          }).then((response)=>{
              console.log(response.status);
              console.log(response.data);
              this.RoomsDetails = response.data.GetHotelRoomResult.HotelRoomsDetails;
              localStorage.setItem('RoomsDetails',JSON.stringify(this.RoomsDetails));
              this.$router.push("/hotelroom");
            }).catch((error)=>{
                 
                
              console.log(error);
            }) 
},
click(card){
          console.log(card);
          this.Img = card;
          this.clickImg = true;
        },
}
}
</script>

<style scoped>

</style>
