<template>
  <div>
    <v-tabs
      v-model="tab"
      centered
      slider-color="#f04e6e"
      background-color="transparent"
      class="hidden-xs-only">

      <v-tab class="ml-1 purple--text"
      width="200px">
        Hotels
      </v-tab>
      </v-tabs>
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

  <v-form @submit.prevent>
  <v-card class="ml-6 mr-6" flat>
    <v-row>
          <v-col
        cols="12"
        sm="6"
        md="2" 
        dense
      >
          <v-menu
          v-model="select"
          ref="menu" offset-y :close-on-content-click="false"
        >
        <template v-slot:activator="{ on, attrs }">
        <v-text-field color="purple"
          label="Select destination"
          outlined
          v-model="search"
          single-line
          hide-details 
          v-bind="attrs"
          v-on="on" 
          @input="SelectDestination"
        ></v-text-field>
      </template>
      <v-card class="mx-auto" max-height="300" max-width="344">
        <span class="mx-auto" v-if="filterDestination.length === 0">No result found</span>
        <v-list>
        <v-list-item @click="selectItem(place)" v-for="(place, index) in filterDestination" :key="`place-${index}`">
          <v-icon>mdi-map-marker-outline</v-icon>
        <h5>{{place.destination}}</h5> &nbsp;-
       <div> <h5 class="text-center grey--text text-pre-wrap">
          {{ place.country }}
                    </h5></div>
        </v-list-item>
        </v-list>
      </v-card>
          </v-menu>
        </v-col>
     
        <v-col
          cols="12"
          sm="6"
          md="2"
          >
          <v-menu
          v-model="checkout"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field color="purple"
              v-model="dates"
              
              label="Check In & Check Out"
              prepend-inner-icon="mdi-calendar"
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
          v-model="dates"
          :min="new Date().toISOString().substr(0, 10)"
          
          color="purple"
          range
          
        ></v-date-picker>
        
</v-menu>
      </v-col>
      <!-- <v-col
          cols="12"
          sm="6"
          md="2"
          >
        <v-menu
          v-model="dateRangeText"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field color="purple"
              v-model="dateRangeText"
              label="Check Out"
              prepend-inner-icon="mdi-calendar"
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            color="purple"
            v-model="dateRangeText"
            :min="date1"
            @input="checkout = false"
          ></v-date-picker>
        </v-menu>
      </v-col> -->
        <v-col
          cols="12"
          sm="6" md="3"
        >
        <v-menu
          v-model="dialog"
          ref="menu" offset-y :close-on-content-click="false"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field color="purple"
            placeholder="Travellers"
            v-model="doubleValue"
            outlined
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
          </template>
          <v-card class="mx-auto" max-width="344">
            <!-- <pre>{{ JSON.stringify(this.items, null, 2) }}</pre> -->
          <div>
              <v-card-title class="text-h5">
              Rooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-btn class="control-button" @click="decrease">-</v-btn>
              &nbsp; {{ Room }}
              <v-btn class="control-button" @click="increase">+</v-btn>
            </v-card-title><v-divider></v-divider>
          </div> 

         <div v-for="(key, index) in items" :key="index" :load="log(key)">
         
            <v-card-title class="text-h5">
              Adults<h6 class="text-center grey--text">(+18yrs)</h6> 
              <v-btn class="control-button" @click="decreaseAdult(index)">-</v-btn>
              &nbsp; {{ key.NoOfAdults }}
              <v-btn class="control-button" @click="increaseAdult(index)">+</v-btn>
            </v-card-title>
                         
            <v-card-title class="text-h5">
              Child <h6 class="text-center grey--text">&nbsp;(&lt;18yrs)</h6> &nbsp; 
              <v-btn class="control-button" @click="decreaseChild(index)">-</v-btn>
              &nbsp; {{ key.NoOfChild }} 
              <v-btn class="control-button" @click="increaseChild(index)" >+</v-btn>

      <div v-for="(age,index) in key.ChildAge" :key="index" :load="log(age)">
       <div v-if="key.NoOfChild > 0">
        <v-select style="width:74px; display:inline-flex"
          @change="onChange"
          :items="dropdowns"
          v-model="key.ChildAge[index]"
          label="Age"
          solo 
        ></v-select>
       </div>
      </div>
            </v-card-title><v-divider></v-divider>
          </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="purple"
                text
                @click="dialog = false"
              >
                Apply
              </v-btn>
            </v-card-actions>
          </v-card>
          </v-menu>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="2"
      >
      <!-- <router-link to="/hotelsearch" style="text-decoration :none"> -->
        <v-btn height="55" width="200" color="#92278f" type="Submit" :disabled="dialog"
    :loading="isLoggingIn" @click="getHoteldetails" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
      <!-- </router-link> -->
        </v-col>
  </v-row>
  </v-card>
  <br>
  </v-form>  
</div>
</template>

<script>
import axios from 'axios'

export default {
  data:()=>({
    tab: null,
    isLoggingIn: false,
    dialog: false,
    select: false,
    dates: [],
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    // date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: '',
    nowDate: new Date().toISOString().slice(0,10),
    checkin: false,
    checkout: false,
    travellers: '',
    Adults:'',
    Childern: '',
    items: [{NoOfAdults: 1, NoOfChild: 0, ChildAge: []}],
    Room: 1, 
    selected: null,
    dropdowns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    hotels:[],
    diff:'',
    clientIp:'',
    search:'',
    // selectedItem: null,
    isVisible: false,
    destination:[],
    destPlace:'',
    cityId:'',
    countrycode:'',
    "showDropdowns": true,
  }),
  computed: {
 
    dateRangeText () {
        return this.dates.join(' ~ ')
      },
      filterDestination(){
        console.log(this.search);
          return this.destination.filter(place => {
            return place.country.toLowerCase().includes(this.search.trim().toLowerCase()) || 
              place.destination.toLowerCase().includes(this.search.trim().toLowerCase());
      });
      
    } ,
      doubleValue: {
          get(){
            console.log(this.date1),
            localStorage.setItem('CheckIn',this.date1);
            localStorage.setItem('DateDiff',Math.floor((Date.parse(this.date2) - Date.parse(this.date1)) / 86400000));
            localStorage.setItem('YourItems',this.items)
            this.diff = Math.floor((Date.parse(this.dates[1]) - Date.parse(this.dates[0])) / 86400000);
            console.log('this.diff')
            console.log(this.diff)
            console.log(this.dates)
            console.log('this.Adult');
            // console.log(this.items)

            this.items.map(item => item.NoOfAdults)
            .reduce((prev, current) =>this.Adults = prev + parseInt(current,10), 0);
            this.items.map(item => item.NoOfChild)
            .reduce((prev, current) =>this.Childern = prev + parseInt(current,10), 0);

            // this.items.forEach(itemsArry => {
            //   // this.Adults += parseInt(itemsArry.Adult);
            //   this.Adults = itemsArry.Adult + itemsArry.Child
            //   this.Childern = itemsArry.Child
            //   console.log(this.Adults);
            // });

              //this function will determine what is displayed in the input

              localStorage.setItem('Room',this.Room);
              return  this.travellers = this.Adults + '  ' + 'Adults'+ '  ' + this.Childern + '  ' + 'Childs'+ '  ' +this.Room + '  ' + 'Rooms';
          },
      },
     
    },
    
  mounted() {
        this.getIpAddress ();
        this.SelectDestination();
      },

    methods:{
      selectItem(place){
        this.search = place.destination + ',' + place.country ;
        this.select = false;
        // this.destPlace = place.destination;
        this.countrycode = place.countrycode;
        console.log(this.countrycode);
        this.cityId = place.cityid;
        console.log(this.cityId);
        this.isVisible = false;
      },
      SelectDestination(search){
        console.log('response.status');
        console.log(search);
        // https://dtrips.herokuapp.com
        axios.post("http://192.168.1.35:8991/api/city/page",{
            "off": 0,
            "on" : 5,
            "keyword": this.search
        })
        .then((response)=>{
              console.log(response.status);
              console.log(response.data);
              this.destination = response.data;
              // this.destination = [...new Set(this.dest)]
              console.log("this.destination")
              console.log(this.destination)
        }).catch((error)=>{
              console.log(error.response);
        });
    },
      getHoteldetails(){
        this.isLoggingIn = true;
        console.log(this.date1);
         const Night = localStorage.getItem('DateDiff');
        console.log(Night);
        console.log(this.Room);
        console.log('this.clientIp');
        console.log(this.clientIp);
        const IPAddress = localStorage.getItem('IPAddress');
        console.log(IPAddress)
            axios.post('http://192.168.1.35:8991/api/hotels/search',{
                  "CheckInDate": this.date1,
                  "NoOfNights": this.diff,
                  "ResultCount": 0,
                  "IsTBOMapped": "true",
                  "PreferredCurrency": "INR",
                  "MaxRating": 5,
                  "GuestNationality": "IN",
                  "NoOfRooms": this.Room,
                  "IsNearBySearchAllowed": false,
                  "RoomGuests": this.items,
                  "CityId": this.cityId,
                  "MinRating": 1,
                  "TokenId": "c8035888-abcc-4897-9206-ce71439e3ae0",
                  "CountryCode": this.countrycode,
                  "ReviewScore": 0,
                  "EndUserIp": IPAddress
              })
            .then((response)=>{
            console.log(response.status);
            console.log('success');
            this.isLoggingIn = true
              
            // setTimeout(() => {
            //     this.isLoggingIn = false
            //     this.snackbar = true
              
            //     setTimeout(() => this.redirect(), 1000)
            // }, 1000)
            this.$router.push("/hotelsearch");
            this.hotels = response.data.HotelSearchResult.HotelResults;
            console.log(this.hotels);
            
            localStorage.setItem('Items',JSON.stringify(this.hotels));
            localStorage.setItem('TraceId',response.data.HotelSearchResult.TraceId);
            // localStorage.setItem('CategoryId',response.data.HotelSearchResult.HotelResults.SupplierHotelCodes.CategoryId);
            localStorage.setItem('Token',response.data.Token);
            localStorage.setItem('ResultIndex',response.data.HotelSearchResult.HotelResults.ResultIndex);
            localStorage.setItem('HotelCode',response.data.HotelSearchResult.HotelResults.HotelCode);
            // console.log(response.data.HotelSearchResult.HotelResults[0].HotelName);
            // this.hotels = response.data.HotelSearchResult.HotelResults;
            console.log(response.data);
            // console.log(this.hotels);
            }).catch((error)=>{
                alert( error)
            console.log(error);
            })          
      },
      // redirect(){
      //   this.$router.push("/hotelsearch");
      // },
      log(key) {
        console.log(key)
      },
      // log(age) {
      //   console.log('age')
      //   console.log(age)
      // },
      onChange(dropdown){
      console.log(dropdown);
      this.selected = dropdown;
    },
  //   updateAge(key,ages) {
  //     key.ages = ages[index]
  //     console.log(key.ages)
  //     console.log('key.ages')
  // },
        decreaseAdult(index) {
          if(this.items[index].NoOfAdults > 1) {
            this.items[index].NoOfAdults -= 1
            }
        },
        increaseAdult(index) {
          console.log(this.items[index].NoOfAdults += 1);
        },
        decreaseChild(index) {
          if(this.items[index].NoOfChild) {
            this.items[index].NoOfChild -= 1
            }
          if(this.items[index].NoOfChild > -1) {  
            console.log(this.items[index].ChildAge.splice(index,1))
          }
        },
        increaseChild(index) {
            console.log(this.items[index].NoOfChild += 1)
            // console.log('this.items[index].ages.length')
            // console.log(this.items[index].ages.length)
            console.log(this.items[index].ChildAge.push(this.selected)) 
        },
        decrease(index) {
          if(this.items.length > 1) {
          this.items.splice(index,1)
          }

          if(this.Room > 1) {
              this.Room -= 1
            }
        },
        increase() {
          console.log(this.Room++)
            this.items.push({NoOfAdults: 1, NoOfChild: 0, ChildAge: []});
        },

         getIpAddress () {
          fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(response => {
            this.clientIp = response.ip;
            localStorage.setItem('IPAddress',response.ip)
            // console.log(this.clientIp)
          });                  
        },
    }
}
</script>

<style scoped lang="scss">
.dropdown-wrapper{
max-width: 350px;
position: relative;
margin: 0 auto;
}
.selected-item{
height: 57px;
border: 2px solid lightgray;
border-radius: 5px;
padding: 5px 10px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-weight: 400;
}
.dropdown-popover{
position: absolute;
border: 2px solid lightgrey;
top: 46px;
left :0;
right: 0;
background-color: #fff;
max-width: 100%;
padding: 10px;

input{
  width: 100%;
  height: 50px;
  border: 2px solid lightgray;
  font-size: 16px;
  padding-left: 8px;
}
.options{
  width: 100%;

  ul{
    list-style: none;
    text-align: left;
    padding-left: 8px;
    max-height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid lightgray;

    li{
      width: 100%;
      border-bottom: 1px solid lightgray;
      padding: 10px;
      background-color: #f1f1f1;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        background: #70878a;
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
}

</style>
