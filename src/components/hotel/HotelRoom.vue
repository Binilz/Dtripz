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

      <!-- <pre>{{ JSON.stringify(this.HotelRoomDetails, null, 2) }}</pre> -->
      <div v-model="rowClicked">{{HotelRoomDetails}}</div>
      
  <v-container>
    <v-col class="text-right">
    <v-btn color="#92278f" @click="reserve" dark>Reserve</v-btn>
    </v-col>
        <v-row> 
          <v-col>
             <v-data-table 
              :headers="header"
              :items="RoomsDetails"
              default-footer
              @click:row="rowClicked"
              class="elevation-1 mx-9"
            >   
          <template v-slot:item.action1="{ }">
            <!-- <v-checkbox
              color="purple"
              @click:row="rowClicked"
              @click="pushHotelRoomDetails"
            ></v-checkbox> -->
            <v-btn color="#92278f" dark
             @click:row="rowClicked"
             @change="rowClicked">Select</v-btn>
          </template>
          <template v-slot:item.action2="{ }">
             <v-btn color="#92278f" dark
             @click:row="rowClicked"
             @click="RemoveHotelRoomDetails">Remove</v-btn>
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
      RoomsDetails: [],
      HotelRoomDetails:[{
        RoomIndex: '',
        RoomTypeCode: "hello",
        RoomTypeName: "",
        RatePlanCode: "",
        BedTypeCode: '',
        SmokingPreference: '',
        Supplements: '',
        Price: {
                CurrencyCode: "",
                RoomPrice: '',
                Tax: '',
                ExtraGuestCharge: '',
                ChildCharge: '',
                OtherCharges: '',
                Discount: '',
                PublishedPrice: '',
                PublishedPriceRoundedOff: '',
                OfferedPrice: '',
                OfferedPriceRoundedOff: '',
                AgentCommission: '',
                AgentMarkUp: '',
                ServiceTax: '',
                TCS: '',
                TDS: ''
        }
    }],
      header: [
          { text: 'Room Type',align: 'start',sortable: false,value: 'RoomTypeName'},
          { text: 'Smoking Preference',sortable: false, value: 'SmokingPreference'}, 
          { text: 'Price', value: 'Price.RoomPrice' },
          { text: 'Availability Type', value: 'AvailabilityType' },
          { text: 'Select Room', value: "action1" },
          { text: '', value: "action2" }

        ],
        items:[{ title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},]
   
       }), 
        created() {
          this.RoomsDetails = JSON.parse(localStorage.getItem("RoomsDetails") || '[]')
          this.HotelRoomDetails.RoomIndex = this.RoomsDetails[0].RoomIndex;
          console.log('this.HotelRoomDetails.RoomIndex');
          console.log(this.HotelRoomDetails);
          // console.log(this.RoomsDetails);
        },
  
       mounted() {
       },
       methods:{
        reserve(){
          const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress);
          const TraceId = localStorage.getItem('TraceId');
          console.log(TraceId);
          const Token = localStorage.getItem('Token');
          console.log(Token);
          // const ResultIndex = localStorage.getItem('ResultIndex');
          // console.log(ResultIndex);
          const HotelCode = localStorage.getItem('HotelCode');
          console.log(HotelCode);
          const Room = localStorage.getItem('Room');
          console.log(Room);
          const Categoryid = localStorage.getItem('Categoryid');
          console.log(Categoryid);
          axios.post('http://192.168.1.35:8991/api/hotels/block-room',{
            
            "ResultIndex": this.HotelRoomDetails.RoomIndex,
            "HotelCode": HotelCode,
            "HotelName": "",
            "GuestNationality": "IN",
            "NoOfRooms": Room,
            "ClientReferenceNo": 0,
            "IsVoucherBooking": "true",
            "CategoryId": Categoryid,
            "EndUserIp": IPAddress,
            "TokenId": Token,
            "TraceId": TraceId,
            "HotelRoomsDetails": this.HotelRoomDetails
            
          }).then((response)=>{
              console.log(response.status);
              console.log(response.data);
              }).catch((error)=>{
                  alert( error)
              console.log(error);
            }) 
          // console.log(item);
        },
        update: function(event) {
      value = event.target.value;
      this.HotelRoomDetails.RoomIndex = value;
      console.log(value)
    },
        rowClicked(item) {
          console.log(item);
          this.HotelRoomDetails.RoomIndex = item.RoomIndex;
          console.log(this.HotelRoomDetails.RoomIndex);
          this.HotelRoomDetails.RoomTypeCode = item.RoomTypeCode
          this.HotelRoomDetails.RoomTypeName = item.RoomTypeName
          this.HotelRoomDetails.RatePlanCode = item.RatePlanCode
          this.BedTypeCode = item.BedTypeCode
          this.HotelRoomDetails.SmokingPreference = item.SmokingPreference
          this.HotelRoomDetails.Supplements = item.Supplements
          this.RoomPrice = item.Price.RoomPrice
          console.log(this.RoomPrice)
          this.CurrencyCode = item.Price.CurrencyCode;
          this.Tax = item.Price.Tax;
          this.ExtraGuestCharge = item.Price.ExtraGuestCharge ;
          this.ChildCharge = item.Price.ChildCharge ;
          this.OtherCharges = item.Price.OtherCharges ;
          this.Discount = item.Price.Discount ;
          this.PublishedPrice = item.Price.PublishedPrice ;
          this.PublishedPriceRoundedOff = item.Price.PublishedPriceRoundedOff ;
          this.OfferedPrice = item.Price.OfferedPrice ;
          this.OfferedPriceRoundedOff = item.Price.OfferedPriceRoundedOff ;
          this.AgentCommission = item.Price.AgentCommission ;
          this.AgentMarkUp = item.Price.AgentMarkUp ;
          this.ServiceTax = item.Price.ServiceTax ;
          this.tcs = item.Price.TCS ;
          this.tds = item.Price.TDS ;
          // this.HotelRoomDetails.Price.RoomPrice = item.Price.RoomPrice
          // this.HotelRoomDetails.Price.Tax = item.Price.Tax
          // console.log(this.HotelRoomDetails[index].RoomIndex.push(this.HotelRoomDetails.RoomIndex)) 
          // this.selected = item.email;
          // this.selectedName = item.name;
        },
        pushHotelRoomDetails(){
          this.HotelRoomDetails.push({
              RoomIndex: this.HotelRoomDetails.RoomIndex,
              RoomTypeCode: this.HotelRoomDetails.RoomTypeCode,
              RoomTypeName: this.HotelRoomDetails.RoomTypeName,
              RatePlanCode: this.HotelRoomDetails.RatePlanCode,
              BedTypeCode: this.BedTypeCode,
              SmokingPreference: 0,
              Supplements: this.HotelRoomDetails.Supplements,
              Price: {
                CurrencyCode: this.CurrencyCode,
                RoomPrice: this.RoomPrice,
                Tax: this.Tax,
                ExtraGuestCharge: this.ExtraGuestCharge,
                ChildCharge: this.ChildCharge,
                OtherCharges: this.OtherCharges,
                Discount: this.Discount,
                PublishedPrice: this.PublishedPrice,
                PublishedPriceRoundedOff: this.PublishedPriceRoundedOff,
                OfferedPrice: this.OfferedPrice,
                OfferedPriceRoundedOff: this.OfferedPriceRoundedOff,
                AgentCommission: this.AgentCommission,
                AgentMarkUp: this.AgentMarkUp,
                ServiceTax: this.ServiceTax,
                TCS: this.tcs,
                TDS: this.tds
              }
          }); 
        },
        RemoveHotelRoomDetails(index) {
            this.HotelRoomDetails.splice(index,1)

          },
       
   },
}
  </script>
  <style>
  .my-span {
  align-content: center;
}
  </style>