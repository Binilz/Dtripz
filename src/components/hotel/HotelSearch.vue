<template>
    <div>
    <common-header></common-header>
    <!-- <v-dialog
      v-model="dialoghotel"
      persistent
      max-width="600px"
    >
      <v-card
        :loading="loading"
        class="mx-auto"
        max-width="600px"
      >
        <template slot="progress">
          <v-progress-linear
            color="#92278f"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

          <v-img height="480" :src="image" ></v-img>
        <v-card-title>{{ HotelName }}</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="Rating"
              color="amber"
              dense background-color="grey darken-1"
              half-increments
              readonly
              size="15"
            ></v-rating>

            <div class="grey--text ms-4">
              {{Rating}}
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-currency-rupee</v-icon>{{ Price}}
          </div>
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-map-marker</v-icon>{{ HotelAddress}}
          </div>

        </v-card-text>      

        <v-divider class="mx-4"></v-divider>
 
        <v-card-title> Hotel Description </v-card-title>
          <v-card-text><div>{{HotelDescription}}</div></v-card-text>

          <v-card-title>Room's availability</v-card-title>

          <v-card-text>
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
          </v-card-text>

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
    </v-dialog> -->
    <v-app id="">
      
  <v-container>
        <v-row> 
          <v-col>
            <!-- <v-card class="mx-auto mt-12"> -->
            <!-- <v-card-title> -->
              <v-img height="62" width="320" src="city-map.png">
                <v-icon color="red" size="38" class="ml-14">mdi-map-marker</v-icon>
                <!-- <v-img height="82" width="90" src="/icons/place.png"></v-img> -->
                <strong><span class="my-span ml-14 ">SEE MAP VIEW</span></strong>
              </v-img>
              <br>
              <v-card width="320">
                <v-card-title>
                  HOTEL NAME  
                  <v-col cols="11">
                  <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search by hotel name"
                  color="purple"
                  outlined
                  hide-details
                  ></v-text-field></v-col>
                </v-card-title>
                <v-card-title>
                  STAR RATING
                  <v-col cols="10">
                    <v-checkbox
                    v-model="selected"
                    color="purple"
                  ></v-checkbox>
                  <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  readonly
                  value="5"
                  ></v-rating></v-col>
                  <v-col cols="10">
                  <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                  value="4"
                  ></v-rating></v-col>
                  <v-col cols="10">
                  <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                  value="3"
                  ></v-rating></v-col>
                  <v-col cols="10">
                  <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  readonly
                  value="2"
                  ></v-rating></v-col>
                </v-card-title>
                <v-card-title>
                  PRICE RANGE
                </v-card-title>
              </v-card>
            <!-- </v-card-title> -->
          <!-- </v-card> -->
          </v-col>
          <v-col>
              <!-- <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  color="purple"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title> -->

              <v-list v-for="(hotel,index) in hotels" :key="index" v-if="index < 1">
                <!-- <div class="p-2"> -->
                  <br>
                <v-card>
                  <v-row>
                  <v-col><v-img :src="hotel.HotelPicture" :alt="hotel.name" height="200px" width="180px"></v-img></v-col>
                  <!-- <v-spacer></v-spacer> -->
                  <v-col>Hotel Name {{hotel.HotelName}}</v-col> 
                  <v-row>
                  <v-col>
                    <v-rating
                      v-model="hotel.StarRating"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      half-increments
                      readonly
                    ></v-rating>
                  </v-col>
                  <v-col> <v-icon color="purple">mdi-currency-rupee</v-icon>{{hotel.Price.RoomPrice}}</v-col>
                </v-row>
                  <!-- <v-row><v-icon color="purple">mdi-currency-rupee</v-icon>{{hotel.Price.RoomPrice}}</v-row> -->
                </v-row>
                </v-card>
                <!-- </div> -->
              </v-list>


             <v-data-table 
              :headers="header"
              :items="hotels"
              :search="search"
              default-footer
              class="elevation-1"
              @click:row="getSelectedData"
            >  
            <!-- <v-card></v-card>  -->
            <template v-slot:item.HotelPicture="{ item }">
            <div class="p-2">
              <v-card class="mx-auto"
                outlined>
              <v-img :src="item.HotelPicture" :alt="item.name" height="200px" width="180px"></v-img>
            </v-card>
            </div>
          </template>
          <template v-slot:item.StarRating="{ item }">
            <div class="p-2">
              <v-rating
                v-model="item.StarRating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                readonly
              ></v-rating>
            </div>
          </template>
          <template v-slot:item.action="{ item }">
            <v-btn color="#92278f" dark @click="getSelectedData(item)">Select Room</v-btn>
          </template>

            </v-data-table>
          </v-col>
        </v-row>
      </v-container> 
    </v-app>
  </div> 
</template>
  
<script>
import axios from 'axios'
import CommonHeader from '../CommonHeader.vue';
import HotelDetails from './HotelDetails.vue';
  
  export default {
     components: {CommonHeader, HotelDetails},
     data: () => ({ 
      dialoghotel: false,
      search: '',
      selected: '',
      HotelCode:'',
      ResultIndex:'',
      Categoryid:'',
      hotelDetails:'',
      // image:'',
      // HotelName: '',
      // Rating:'',
      // Price: '',
      // HotelAddress: '',
      // HotelDescription:'',
      // loading: false,
      // selection: 1,
      hotels: [],
      header: [
          { text: 'Hotel Image',sortable: false, value: 'HotelPicture', },
          { text: 'Hotel Name',align: 'start',sortable: false,value: 'HotelName'},
          { text: 'Price', value: 'Price.RoomPrice' },
          { text: 'Rating', value: 'StarRating' },
          // { text: 'HotelAddress',sortable: false, value: 'HotelAddress' },
          { text: "", value: "action", width: "1%" }

        ],
        items:[ { title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},]
   
       }), 
        // computed:{
        //   get(){
        //     this.hotelbook = JSON.parse(localStorage.getItem('Items'));
        //     console.log(this.hotelbook)
        //   }
        
        // },
        created() {
          this.hotels = JSON.parse(localStorage.getItem("Items") || '[]')
        },
  
       mounted() {
        //  this.getHoteldetails();
       },
       methods:{
        getSelectedData(item){
          const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress);
          const TraceId = localStorage.getItem('TraceId');
          console.log(TraceId);
          const Token = localStorage.getItem('Token');
          console.log(Token);
          this.ResultIndex = item.ResultIndex;
          this.HotelCode = item.HotelCode;
          localStorage.setItem('ResultIndex',this.ResultIndex);
          localStorage.setItem('HotelCode',this.HotelCode);
          localStorage.setItem('Categoryid',this.Categoryid);
          this.Categoryid = item.SupplierHotelCodes[0].CategoryId;
          // const CategoryId = localStorage.getItem('CategoryId');
          console.log(this.HotelCode);
          console.log(this.ResultIndex);
          console.log(this.Categoryid);
          // http://192.168.1.40:8991
          axios.post('http://192.168.1.35:8991/api/hotels/hotelinfo',{
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
              this.$router.push("/hoteldetails");
              this.hotelDetails = response.data.HotelInfoResult.HotelDetails;
              console.log(this.hotelDetails);
              
              localStorage.setItem('HotelDetails',JSON.stringify(this.hotelDetails));
              }).catch((error)=>{
                  alert( error)
              console.log(error);
            }) 


          // const item = localStorage.getItem('Items');
          // const Item = localStorage.getItem('YourItems');
          // console.log(Item)
      //     console.log(Adult)
          // this.dialoghotel = true;
          // this.image = item.HotelPicture;
          // this.HotelName = item.HotelName;
          // this.Rating = item.StarRating;
          // this.Price = item.Price.RoomPrice;
          // this.HotelDescription = item.HotelDescription;
          // this.HotelAddress = item.HotelAddress;
          console.log(item);
          // this.ResultIndex = console.log(item.ResultIndex);
          // this.HotelCode = console.log(item.HotelCode);
          // // console.log(item.SupplierHotelCodes);
          // this.Categoryid = console.log(item.SupplierHotelCodes[0].CategoryId);
        },
      //   reserve () {
      //     this.loading = true
      //     setTimeout(() => (this.loading = false), 2000)
      // },
   },
}
  </script>
  <style>
  .my-span {
  /* background-color: blue;
  color: white;
  font-weight: bold; */
  /* margin-right: 0; */
  /* float: center; */
  align-content: center;
}
  </style>