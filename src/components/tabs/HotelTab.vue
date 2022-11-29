<template>
    <div>
    <v-form>
    <v-container>
      <v-row>
            <v-col
          cols="12"
          sm="16"
          md="14"
          dense
        >
          <v-text-field
            label="Select destination"
            outlined
            color="purple"
          ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-menu
            v-model="checkin"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
            color="purple"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date1"
                label="Check in"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
                color="purple"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="checkin = false"
              color="purple"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-menu
            v-model="checkout"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
            color="purple"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date2"
                label="Check Out"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
                color="purple"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="date1"
              @input="checkout = false"
              color="purple"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <v-col
            cols="12"
            sm="6" md="4"
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
          <v-card class="mx-auto" width="344">
            <div>
              <v-card-title class="text-h5">
              Rooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <v-btn class="control-button" @click="decrease">-</v-btn>
              &nbsp; {{ Room }} &nbsp;
              <v-btn class="control-button" @click="increase">+</v-btn>
            </v-card-title><v-divider></v-divider>
          </div> 
          <div v-for="(key, index) in items" :key="index" >
            <v-card-title class="text-h5">
            Adults &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn class="control-button" @click="decreaseAdult(index)">-</v-btn>
            &nbsp; {{ key.NoOfAdults }} &nbsp;
            <v-btn class="control-button" @click="increaseAdult(index)">+</v-btn>
          </v-card-title><v-divider></v-divider>

          <v-card-title class="text-h5">
            Child &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn class="control-button" @click="decreaseChild(index)">-</v-btn>
            &nbsp; {{ key.NoOfChild }} &nbsp;
            <v-btn class="control-button" @click="increaseChild(index)">+</v-btn>
       
            <div v-for="(age,index) in key.ChildAge" :key="index" >
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
          md="4"
        >
          <v-btn 
          color="#92278f" 
          dark @click="hotelsList">
         
          <v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
    </v-row>
    </v-container>
   </v-form>
</div>
</template>


<script>
import axios from 'axios'
export default {
  data:()=>({
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    // date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: '',
    nowDate: new Date().toISOString().slice(0,10),
    checkin: false,
    checkout: false,
    dialog: false,
    tab: null,
    travellers: '',
    Adults : '',
    Children : '',
    items: [{NoOfAdults: 1, NoOfChild: 0, ChildAge: []}],
    Room:1,
    dropdowns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    
   

  }),
  
  computed: {
      doubleValue: {
          get(){
            console.log(this.date1),
              localStorage.setItem('CheckIn',this.date1);
              localStorage.setItem('DateDiff',Math.floor((Date.parse(this.date2) - Date.parse(this.date1)) / 86400000));
              localStorage.setItem('YourItems',this.items)
            
            
            this.items.map(item => item.NoOfAdults)
              .reduce((prev, current) =>this.Adults = prev + parseInt(current,10), 0);
              this.items.map(item => item.NoOfChild)
              .reduce((prev, current) =>this.Children = prev + parseInt(current,10), 0);
              //this function will determine what is displayed in the input
              return  this.travellers = this.Adults + '  ' + 'Adults'+ '  ' + this.Children + '  ' + 'Childs'+ '  ' +this.Room + '  ' + 'Rooms';
              
          },
      }
    },
    mounted() {
      this.showIpAddress;
        },
    methods:{
      hotelsList(){
          console.log(this.date1);
           const Night = localStorage.getItem('DateDiff');
           console.log(Night);
          console.log(this.Room);
          console.log('IP Address');      
          const IPAddress = localStorage.getItem('IP');
          console.log(IPAddress)
          axios.post('http://192.168.1.40:8991/api/hotels/search',{
                    "CheckInDate": this.date1,
                    "NoOfNights": Night,
                    "ResultCount": 0,
                    "IsTBOMapped": "true",
                    "PreferredCurrency": "INR",
                    "MaxRating": 5,
                    "GuestNationality": "IN",
                    "NoOfRooms": this.Room,
                    "IsNearBySearchAllowed": false,
                    "RoomGuests": this.items,
                    "CityId": 130443,
                    "MinRating": 1,
                    "TokenId": "c8035888-abcc-4897-9206-ce71439e3ae0",
                    "CountryCode": "IN",
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
              this.$router.push("/hotelslist");
              this.hotels = response.data.HotelSearchResult.HotelResults;
              console.log(this.hotels);
              
              localStorage.setItem('Items',JSON.stringify(this.hotels));
              localStorage.setItem('TraceId',response.data.HotelSearchResult.TraceId);
              localStorage.setItem('Token',response.data.Token);
              console.log(response.data);
             
              }).catch((error)=>{
                  alert( `Something went wrong`)
              console.log(error);
              })          
        },
      
    
      onChange(dropdown){
        console.log(dropdown);
        this.selected = dropdown;
      },
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
              console.log(this.items)
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
          showIpAddress() {
            fetch('https://api.ipify.org?format=json')
          .then(response => response.json())
          .then(response => {
          this.IpAddress = response.ip;
          // console.log('Ip Adresss')
          // console.log(this.IpAddress)
          
          localStorage.setItem('IP', this.IpAddress)
           });
          }
    }
  }

</script>