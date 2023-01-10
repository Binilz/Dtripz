<template>
    <div>
        <home-headers></home-headers>
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
                    
                    <br><br><br>
                    
                <v-sheet
                  id="scrolling-techniques-7"
                  class="overflow-y-auto"
                  max-height="700"
                >
                  <!-- <v-container style="height: 1500px;"> -->
                    <v-card class="mx-auto" max-width="1000px">
                        <v-row>
                          <v-col
                            v-for="(card, index) in slides"
                            :key="index"
                            :cols="3"
                            class="d-flex child-flex"
                          >
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
          </v-btn>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
        <!-- <v-card> -->
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
    <!-- <v-btn v-on:click="MoreAndLess(default_limit, slides.length)" >
        {{ limit_by === 5 ? "See More" : "See Less" }}
    </v-btn> -->
  </v-img>
<!-- </v-card> -->
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
    <!-- <v-slide-group
      multiple
      show-arrows
    >
      <v-slide-item
      v-for="(item, i) in HotelFacilities"
              :key="i"
        v-slot="{ active }"
      >
        <v-btn
          color="purple white--text"
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
        >
           {{ item }}
        </v-btn>
      </v-slide-item>
    </v-slide-group> -->
      <v-list dense>
          <!-- <v-subheader>REPORTS</v-subheader> -->
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
      color="purple" text
      @click="reserve"
    >
      Reserve 
    </v-btn> &nbsp;
    <!-- <v-btn
        text
        color="red"
        @click="dialoghotel = false"
      >
        Cancel
      </v-btn> -->
  </v-card-actions>
  </v-card>
  <br>
  <br>
<!-- </v-dialog> -->
<!-- <footer-page></footer-page> -->

</div>

</template>

<script>
import HomeHeaders from '../components/HomeHeaders.vue';

export default 
{
components:{HomeHeaders},
data:() => ({
  loading: false,
        seemore: false,
        clickImg: false,
        Img:'',
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
        latitude: '',
        longitude: '',
        cards: [{ 
          // title: 'Pre-fab homes', 
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
        // dialoghotel: false,
}),
created(){
          this.hotelDetails = JSON.parse(localStorage.getItem("HotelDetails"))
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
          this.latitude = this.hotelDetails.Latitude;
          console.log(this.latitude);
          this.longitude = this.hotelDetails.Longitude;
          console.log(this.longitude);
},
methods:{
      // reserve () {
      //   // const store = localStorage.getItem('YourItem');
      //     this.loading = true
      //     setTimeout(() => (this.loading = false), 2000)
      // },
      openGoogleMap() {
        const urlSuffix = [this.latitude,this.longitude]
        window.open(
          "https://www.google.com/maps?q=" + urlSuffix,
         
        );
      },
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
          const cId = localStorage.getItem('Categoryid');
          console.log(cId);
          axios.post(this.$hostname + 'api/hotels/hotel-room',{
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
        click(card){
          console.log(card);
          this.Img = card;
          this.clickImg = true;
        },
        MoreAndLess (default_limit, filters_length) {
        this.limit_by = (this.limit_by === default_limit) ? filters_length : default_limit;
     }
    }
}

</script>

<style scoped>
.pre-formatted {
  white-space: pre-wrap
}

.align{
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: large;
  
}
.seemore{
  border-top-left-radius: 4px ;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.show-btns {
  /* color: rgba(255, 255, 255, 1) !important; */
  color: purple !important;
 
}
</style>