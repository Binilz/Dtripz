<template>
    <div>
    <home-headers></home-headers>
    <v-container>
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
      <v-app id="">
      <v-row> 
        <v-col>
          <v-card width="300" class="mx-auto" color="blue lighten-1">
           
            <v-card-text class="black--text">
             <h3>Search</h3> 
            </v-card-text>
          <search-search/>
        </v-card>
        <br>
          <v-card width="300" class="mx-auto">
            <v-card-text class="black--text">
              <h3>HOTEL NAME </h3>   
              <v-col cols="11">
              <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search hotel name"
              color="purple"
              outlined
              hide-details
              ></v-text-field></v-col>
            </v-card-text>
            <v-card-text class="black--text">
              <h3>STAR RATING</h3>
                  <v-col cols="12">
                    <v-row align="center">
                    <v-checkbox 
                    v-model="selected"
                    color="purple"
                    value="5"
                  ></v-checkbox>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    readonly
                    value="5"
                    
                  ></v-rating>
                  <v-col cols="12">
                    <v-row align="center">
                      <v-checkbox 
                    v-model="selected"
                    value="4"
                    color="purple"
                  ></v-checkbox>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    readonly
                    value="4"
                  ></v-rating>
                </v-row></v-col>
                  <v-col cols="12">
                    <v-row align="center">
                      <v-checkbox 
                    v-model="selected"
                    color="purple"
                    value="3"
                  ></v-checkbox>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    readonly
                    value="3"
                  ></v-rating>
                </v-row></v-col>
                  <v-col cols="12">
                    <v-row align="center">
                      <v-checkbox 
                    v-model="selected"
                    color="purple"
                    value="2"
                  ></v-checkbox>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    readonly
                    value="2"
                  ></v-rating>
                  <v-col cols="12">
                    <v-row align="center">
                      <v-checkbox 
                    v-model="selected"
                    color="purple"
                    value="1"
                  ></v-checkbox>
                  <v-rating
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    readonly
                    value="1"
                  ></v-rating>
                </v-row></v-col>
                  </v-row>
                  </v-col>
                  </v-row></v-col>
                  </v-card-text>

                  <v-card-text class="black--text">
                    <h3>PRICE RANGE</h3>
                  </v-card-text>
                  <v-card-text>
                    <v-row>
                      <v-col class="px-4">
                        <v-range-slider
                          v-model="range"
                          :max="max"
                          :min="min"
                          hide-details
                          class="align-center"
                          color="purple"
                        >
                          <template v-slot:prepend>
                            <v-text-field
                              color="purple"
                              :value="range[0]"
                              class="mt-0 pt-0"
                              hide-details
                              single-line
                              type="number"
                              style="width: 60px"
                              @change="$set(range, 0, $event)"
                            ></v-text-field>
                          </template>
                          <template v-slot:append>
                            <v-text-field
                              :value="range[1]"
                              class="mt-0 pt-0"
                              hide-details
                              single-line
                              type="number"
                              style="width: 60px"
                              @change="$set(range, 1, $event)"
                            ></v-text-field>
                          </template>
                        </v-range-slider>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  </v-card>
      </v-col>
     
      <v-col cols="8">
        <h2> {{ filteredItems.length }} properties found</h2>
        <v-list v-for="(hotel,index) in filteredItems" :key="index" v-if="index < commentsToShow">
  
      <div class="searchItem">
        <v-card class="mx-auto"
        outlined>
        <v-img :src="hotel.HotelPicture" :alt="hotel.name" height="200px" width="180px"></v-img>
       </v-card>
        <div class="Desc">
          <h1 class="Title">{{hotel.HotelName}}</h1>
          <span class="Distance">Distance</span>
          <span class="TaxiOp">Service Charge :{{hotel.Price.ServiceCharge}}</span>
          <span class="Subtitle">Description{{hotel.HotelDescription}}</span>
          <span class="Features">Features</span>
          <span class="CancelOp">CancelOp</span>
          <span class="CancelOpSubtitle">CancelOpSubtitle</span>
        </div>
        <div class="Details">
             
          <v-rating
            v-model="hotel.StarRating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            readonly
          ></v-rating>
          <div class="DetailTexts">
            <span class="Price"><v-icon color="purple">mdi-currency-rupee</v-icon>{{hotel.Price.RoomPrice}}</span>
            <span class="Taxiop">+ <v-icon size="13">mdi-currency-rupee</v-icon>{{hotel.Price.OtherCharges}} taxes and charges</span>
          </div>
          <div class="DetailTexts">
            <!-- <span class="Price"><v-icon color="purple">mdi-currency-rupee</v-icon>{{hotel.Price.RoomPrice}}</span> -->
            <!-- <span class="Taxiop">+ {{hotel.Price.OtherCharges}} taxes and fees</span> -->
            <button class="CheckButton" type="Submit" :disabled="dialog"
            :loading="isLoggingIn" @click="getSelectedData(hotel)">See Availability</button>
          </div>
        </div>
      </div>
      </v-list>
        <v-col class="text-center">
          <v-btn color="purple" text v-if="filteredItems.length >10" @click="commentsToShow += 10">load more ....</v-btn>
            <div v-if="filteredItems.length === 0">
              <v-img src="https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"></v-img>
            </div>
        </v-col>
        </v-col>
       </v-row>
      </v-app>
      </v-container>

    </div>
   
</template>

<script>

import HomeHeaders from './HomeHeaders.vue'
import axios from 'axios'
import SearchSearch from '../components/hotel/SearchSearch'

export default{
    data:()=> ({
          header: [
          {text: 'Hotel Name',align: 'start',sortable: false,value: 'HotelName',},
          {text: 'Hotel Image',value: 'HotelPicture',},
          { text: 'Hotel rating', value: 'StarRating' },  
          { text: 'Price', value: 'Price.RoomPrice' },
          { text: 'Hotel Address', value: 'HotelAddress' },
         ],
        min: 1000,
        max: 30000,
        range: [500, 25000],
        isLoggingIn: false,
        hotels:[],
        items:[],
        search:'',
        selected: '3',
        HotelCode:'',
        ResultIndex:'',
        commentsToShow: 10,
        hotelDetails:'',
        dialog: false,
        commentsToShow: 10,
        Categoryid:''
      }),
    computed:{
      filteredItems() {
            console.log(this.search);
            console.log(this.range)
              return this.hotels.filter(hotel => {
              return hotel.HotelName.toLowerCase().includes(this.search.trim().toLowerCase()) &&
              hotel.StarRating == this.selected &&
                hotel.Price.RoomPrice > this.range[0] && hotel.Price.RoomPrice < this.range[1];
            });
        }
      },
    created() {
          this.hotels = JSON.parse(localStorage.getItem("Items") || '[]')
          console.log('dgdfh');
          console.log(this.hotels);
        },
    methods:{
      getSelectedData(hotel){
          this.isLoggingIn = true;
         const IPAddress = localStorage.getItem('IPAddress');
         const TraceId = localStorage.getItem('TraceId');
         const Token = localStorage.getItem('Token');
         this.ResultIndex = hotel.ResultIndex;
         localStorage.setItem('ResultIndex',this.ResultIndex)
         this.Categoryid = hotel.SupplierHotelCodes[0].CategoryId;
         localStorage.setItem('Categoryid',this.Categoryid)
         this.HotelCode = hotel.HotelCode;
         localStorage.setItem('HotelCode',this.HotelCode)
          axios.post(this.$hostname + 'api/hotels/hotel-info',{
            // params:
            // {
              "HotelCode": this.HotelCode,
              "ResultIndex": this.ResultIndex,
              "TraceId": TraceId,
              "TokenId": Token,
              "EndUserIp": IPAddress,
              "CategoryId": this.Categoryid
          // }
          }).then((response)=>{
              console.log(response.status);
              console.log(response.data);
              console.log('hahah')
              this.$router.push("/hoteldetails");
              this.hotelDetails = response.data.HotelInfoResult.HotelDetails;
              console.log(this.hotelDetails);
              
              localStorage.setItem('HotelDetails',JSON.stringify(this.hotelDetails));
              }).catch((error)=>{
                  alert( error)
              console.log(error);
            }) 

          },
    },
   
    components: {
      HomeHeaders,SearchSearch
    },
  }

</script>

<style scoped>

.my-span {
  /* background-color: blue;
  color: white;
  font-weight: bold; */
  /* margin-right: 0; */
  /* float: center; */
  align-content: center;
}

.searchItem{
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.Img{
  /* width: 180px;
  height: 200px; */
  object-fit: cover;
}

.Desc{
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
}

.Title{
  font-size: 20px;
  color: #92278f;
}

.TaxiOp{
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
}

.Subtitle{
  font-size: 12px;
  font-weight: bold;
}

.Features{
  font-size: 12px;
}

.CancelOp{
  font-size: 12px;
  color: #f80000;
  font-weight: bold;
}

.CancelOpSubtitle{
  font-size: 12px;
  color: #ff7700;
}

.Details{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Rating{
  display: flex;
  justify-content: space-between;
}

.Rating span{
  font-weight: 500;
}

.Rating button{
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
}

.DetailTexts{
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.Price{
  font-size: 20px;
}

.Taxiop{
  font-size: 12px;
  color: gray;
}

.CheckButton{
  background-color: #92278f;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>