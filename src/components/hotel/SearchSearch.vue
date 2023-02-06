<template>
  <div>
    <v-dialog
    v-model="validate"
    persistent
    max-width="400"
  >
    <v-card >
      <v-card-title class="text-h5 pa-4">
        <v-icon color="red">mdi-close-circle</v-icon> &nbsp; <strong>Missing fields</strong> 
        <v-card-subtitle class="grey--text"><strong>Please fill out all required fields</strong></v-card-subtitle>
      </v-card-title>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="validate = false"
        >
          Okay
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- class="hidden-xs-only" -->
    
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
<v-card width="290"  color="blue lighten-1" flat>
  <v-form @submit.prevent="getHoteldetails" ref="form">
  <v-card class="ml-6 mr-6" flat color="blue lighten-1">
    <v-row>
          <v-col
       
      >
          <v-menu
          v-model="select"
          ref="menu" offset-y :close-on-content-click="false"
        >
        <template v-slot:activator="{ on, attrs }">
        <v-text-field color="purple"      
        background-color="white"
        style="width: 250px; height: 50px"
          label="Your destination"
          outlined
          v-model="search"
          hide-details 
          :rules="[rules.required]"
          v-bind="attrs"
          v-on="on" 
          @input="SelectDestination('CheckIn')"
        ></v-text-field>
      </template>
      <v-card class="mx-auto" >
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
        </v-row>
        <v-row>
        <v-col
        
        >
        <v-menu
        v-model="checkin"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field color="purple"
          background-color="white"
            v-model="dates "
            style="width: 250px; height: 50px"
            :rules="[rules.required]"
            label="Check In & Check Out"
            prepend-inner-icon="mdi-calendar"
            outlined
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
        v-model="dates"  
        :min="nowDate"
        color="purple"
        range
        
      ></v-date-picker>
      
</v-menu>
    </v-col>
    </v-row>
    <v-row>
        <v-col  >
        <v-menu
          v-model="dialog"
          ref="menu" offset-y :close-on-content-click="false"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field color="purple"
          background-color="white"
          style="width: 250px; height: 100px" 
            v-model="doubleValue"
            outlined 
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
          <!-- <p v-html="makeHashTextBold"></p> -->
          </template>
          <v-card class="mx-auto" max-width="344">
            <!-- <pre>{{ JSON.stringify(this.items, null, 2) }}</pre> -->
          <div>
              <v-card-title class="text-h7">
              Rooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-btn class="control-button" @click="decrease">-</v-btn>
              &nbsp; {{ Room }}&nbsp;
              <v-btn class="control-button" @click="increase">+</v-btn>
            </v-card-title><v-divider></v-divider>
          </div> 

         <div v-for="(key, index) in items" :key="index" :load="log(key)">
         
            <v-card-title class="text-h7">
              Adult<h6 class="text-center grey--text">(+18yrs)</h6> 
              <v-btn class="control-button" @click="decreaseAdult(index)">-</v-btn>
              &nbsp; {{ key.NoOfAdults }} &nbsp;
              <v-btn class="control-button" @click="increaseAdult(index)">+</v-btn>
            </v-card-title>
                         
            <v-card-title class="text-h7">
              Child <h6 class="text-center grey--text">&nbsp;(&lt;18yrs)</h6> 
              <v-btn class="control-button" @click="decreaseChild(index)">-</v-btn>
              &nbsp; {{ key.NoOfChild }} &nbsp;
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
        </v-row>
        <v-row>
       
      
        <v-btn class="ml-2 mr-1" height="40" width="92%" color="#92278f" type="Submit" :disabled="dialog"
    :loading="isLoggingIn" @click="getHoteldetails" dark><v-icon>mdi-magnify</v-icon>Update Search</v-btn>
        
  </v-row>
  </v-card>
  <br>
  </v-form> 
</v-card> 
</div>
</template>

<script>
import axios from 'axios';
// import DateRangePicker from 'vue-daterange-picker';

export default {
  components:{
    // DateRangePicker
  },
  data:()=>({
    tab: null,
    // dateRange:{
    //   start: null,
    //   end:null
    // },
    dates: [],
    isLoggingIn: false,
    validate: false,
    dialog: false,
    select: false,
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
    city: '',
    countrycode:'',
    rules: {
        required: v => !!v || 'This field is required',
      },
      // post: "This is #awesome and i #loveIt so #much",
  }),

  created() {
    // this.nowDate = this.dates[1]
  },

  computed: {
    // makeHashTextBold() {
    //   const $this = this;
    //   let post = $this.post;
    //   if (!post) return "";
    //   post = post.toString();
    //   let hashReg = /#\w+/g;
    //   post = post.replace(hashReg, "<b>$&</b>");
    //   return post;
    // },
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
            localStorage.setItem('DateDiff',Math.floor((Date.parse(this.dates[1]) - Date.parse(this.dates[0])) / 86400000));
            localStorage.setItem('YourItems',this.items)
            this.diff = Math.floor((Date.parse(this.dates[1]) - Date.parse(this.dates[0])) / 86400000);
            console.log(this.diff)
            console.log(this.date2);
            console.log('this.Adult');
            localStorage.setItem('CheckIn',this.dates[0]);
            localStorage.setItem('CheckOut',this.dates[1])
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
              return  this.travellers =  this.Room + '  ' + 'Room' + ' ' + ' ' + (this.Adults +this.Childern) + '  ' + 'Guest';
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
        this.city = place.destination;
        localStorage.setItem('city',this.city);
        console.log(this.cityId);
        this.isVisible = false;
      },
      SelectDestination(search){
        console.log('response.status');
        console.log(search);
        axios.post(this.$hostname + "api/hotels/page",{
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
              this.$search(() => {
                this.$refs[search].focus()
              })
        }).catch((error)=>{
              console.log(error.response);
        });
    },
      getHoteldetails(){
        console.log(this.date1);
         const Night = localStorage.getItem('DateDiff');
        console.log(Night);
        console.log(this.Room);
        console.log('this.clientIp');
        console.log(this.clientIp);
        const IPAddress = localStorage.getItem('IPAddress');
        console.log(IPAddress)
        if( this.$refs.form.validate()){
          this.isLoggingIn = true;
            axios.post(this.$hostname + 'api/hotels/search',{
                  "CheckInDate": this.date1,
                  "NoOfNights": this.diff,
                  "ResultCount": 0,
                  // "IsTBOMapped": "true",
                  "PreferredCurrency": "INR",
                  "MaxRating": 5,
                  "GuestNationality": "IN",
                  "NoOfRooms": this.Room,
                  "IsNearBySearchAllowed": false,
                  "RoomGuests": this.items,
                  "CityId": this.cityId,
                  "MinRating": 1,
                  // "TokenId": "c8035888-abcc-4897-9206-ce71439e3ae0",
                  "CountryCode": this.countrycode,
                  "ReviewScore": 0,
                  "EndUserIp": IPAddress
              })
            .then((response)=>{
            console.log(response.status);
            console.log(response.data);
            console.log('success');
            this.isLoggingIn = true
              
            // setTimeout(() => {
            //     this.isLoggingIn = false
            //     this.snackbar = true
              
            //     setTimeout(() => this.redirect(), 1000)
            // }, 1000)
            if(response.data.HotelSearchResult.Error.ErrorCode === 0){
              this.$router.push("/hotelslist").catch(err => { 
      // Ignore the vuex err regarding  navigating to the page they are already on.
      if (err.name != "NavigationDuplicated") {
       // But print any other errors to the console
        console.error(err);
      }
      this.$router.go()
    })
            }
            this.hotels = response.data.HotelSearchResult.HotelResults;
            console.log(this.hotels);

            if(response.data.HotelSearchResult.Error.ErrorCode === 2){
              this.$router.push("/noResultFound")
            }
            
            localStorage.setItem('Items',JSON.stringify(this.hotels));
            localStorage.setItem('TraceId',response.data.HotelSearchResult.TraceId);
            // localStorage.setItem('CategoryId',response.data.HotelSearchResult.HotelResults.SupplierHotelCodes.CategoryId);
            localStorage.setItem('Token',response.data.Token);
            localStorage.setItem('ResultIndex',response.data.HotelSearchResult.HotelResults.ResultIndex);
            localStorage.setItem('HotelCode',response.data.HotelSearchResult.HotelResults.HotelCode);
            // console.log(response.data.HotelSearchResult.HotelResults[0].HotelName);
            // this.hotels = response.data.HotelSearchResult.HotelResults;
            
            // console.log(this.hotels);
            }).catch((error)=>{
                // alert( error)
                if(error.response.status === 500){
                  this.$router.push("/500")
                }
            console.log(error);
            });
         }  
         else{
          this.validate = true;
         }       
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
