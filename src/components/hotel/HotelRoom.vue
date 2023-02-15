<template>
  <div>
    <home-headers></home-headers>
    <v-dialog
    content-class="elevation-0"
    v-model="isLoggingIn"
    persistent
    width="600"
  >
    <v-img src="loadingHotel.gif"></v-img>
</v-dialog>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8">
        <v-list v-for="(hotel,index) in RoomsDetails" :key="index">
        <div class="searchItem">
          <div class="Desc">
            <h1 class="Title">
              <v-icon color="purple">mdi-bed</v-icon>
              {{hotel.RoomTypeName}}</h1>
            <span class="Distance">{{hotel.InfoSource}}</span>
            <span class="TaxiOp">AvailabilityType : {{hotel.AvailabilityType}}</span>
            <span class="Subtitle"><v-icon >mdi-smoking</v-icon>  Smoking Preference : {{hotel.SmokingPreference}}</span>
            <!-- <span class="Features">AvailabilityType : {{hotel.AvailabilityType}}</span> -->
            <span class="CancelOp">Cancellation charge : {{hotel.CancellationPolicies[0].Charge}}</span>
            <!-- <span class="CancelOpSubtitle">{{hotel.CancellationPolicy.slice(32, 139)}}</span> -->
            <span class="CancelOpSubtitle">{{hotel.CancellationPolicies[0].Charge}}.00% of total amount will be charged, If cancelled between {{hotel.CancellationPolicies[0].FromDate}} and {{hotel.CancellationPolicies[0].ToDate}}</span>
          </div>
          <div class="Details">
            <div class="Rating">
              </div>
              <div class="DetailTexts">
                <span class="Price">
                  <!-- <v-icon color="purple">mdi-wifi</v-icon> -->
                  {{hotel.RatePlanName}}</span>
                  <div>
                  <span class="Save">{{hotel.RoomPromotion.slice(0, -1)}}</span></div>
                  <span class="Price"><strong><v-icon color="purple">mdi-currency-rupee</v-icon>{{hotel.Price.RoomPrice}}</strong></span>
                  <span class="Taxiop">+ <v-icon size="13">mdi-currency-rupee</v-icon>{{hotel.Price.OtherCharges}} taxes and charges</span>
                </div>
                <div class="DetailTexts">
                  <div>
                    <v-btn @click="remove(hotel,index)" v-if="clickedItems.includes(index)" >Remove</v-btn>
                    <v-btn color="#92278f" dark @click="select(hotel,index)" v-else>Select</v-btn>
                </div>
               </div>
                </div>
        </div>
      </v-list>
      </v-col>
      <v-col>
        <div style="position: sticky; top: 7px">
          <v-col>   
        <div v-if="(this.HotelRoomDetails.length > 0)">
        <v-card width="344" class="mx-auto" color="grey lighten-5">
          <v-card-text class="black--text">
            <h3>Selected Room</h3>
          </v-card-text>
          &nbsp;
          {{this.HotelRoomDetails.length}} Room for <v-icon size="20px" color="purple">mdi-currency-inr</v-icon>{{parseFloat(Total).toFixed(2)}}
          <v-btn color="#92278f" @click="reserve" dark>Reserve</v-btn>
          <br>
          <br>  
         
        </v-card>
        </div>

      </v-col>
       <br>
        <v-card width="344" class="mx-auto" color="grey lighten-5">
          <v-card-text class="black--text">
            <h3>Search details</h3>
            <v-row>
            <v-col>
              <v-card-text class="black--text">
                Check-in
              <h3> {{CheckIn}}</h3>
              </v-card-text>
            </v-col>
            <v-col>
              <v-card-text class="black--text">
                Check-out
                  <h3>{{ CheckOut}}</h3>
              </v-card-text>
            </v-col>  
            
          </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="black--text">
              Number of nights : <strong>{{Night}} </strong>
          </v-card-text>
        </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import HomeHeaders from '../HomeHeaders.vue'
import axios from 'axios'

export default{
  components:{HomeHeaders},
  data:() => ({
    RoomsDetails: [],
    clickedItems:[],
    CheckOut: '',
    CheckIn: '',
    isLoggingIn: false,
    Total: 0,
    HotelRoomDetails:[{
        RoomIndex: '',
        RoomTypeCode: "",
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
  }),
  created() {
          this.RoomsDetails = JSON.parse(localStorage.getItem("RoomsDetails") || '[]')
          console.log('roomdetails')
          console.log(this.RoomsDetails);
          this.Night = localStorage.getItem('DateDiff');
          this.CheckIn = localStorage.getItem('CheckIn');
          this.CheckOut = localStorage.getItem('CheckOut');
          console.log(this.HotelRoomDetails.splice(0,1) );
          console.log('this.HotelRoomDetails')
          console.log(this.HotelRoomDetails);

  },
  methods:{
    select(item,index){    
            {     
              if (this.clickedItems.includes(index)) {
                this.clickedItems.splice(this.clickedItems.indexOf(index), 1);
                
              } else {
                console.log('else')
                 console.log(this.clickedItems.push(index));
                console.log(this.HotelRoomDetails);
              }
            }
            
            // else{
            //   this.notUser = true;
            // } 
            this.Total = item.Price.RoomPrice + this.Total;
             console.log(this.Total);
            console.log('this.Total');
            
            if(item.SmokingPreference == 'NoPreference'){this.value = 0};
            if(item.SmokingPreference == 'Smoking'){this.value = 1};
            if(item.SmokingPreference == 'NonSmoking'){this.value = 2};
            if(item.SmokingPreference == 'Either'){this.value = 3};
            this.HotelRoomDetails.push({
              RoomIndex: item.RoomIndex,
              RoomTypeCode: item.RoomTypeCode,
              RoomTypeName: item.RoomTypeName,
              RatePlanCode: item.RatePlanCode,
              BedTypeCode: item.BedTypeCode,
              SmokingPreference: this.value,
              Supplements: item.Supplements,
              Price: {
                CurrencyCode: item.Price.CurrencyCode,
                RoomPrice: item.Price.RoomPrice,
                Tax: item.Price.Tax,
                ExtraGuestCharge: item.Price.ExtraGuestCharge,
                ChildCharge: item.Price.ChildCharge,
                OtherCharges: item.Price.OtherCharges,
                Discount: item.Price.Discount,
                PublishedPrice: item.Price.PublishedPrice,
                PublishedPriceRoundedOff: item.Price.PublishedPriceRoundedOff,
                OfferedPrice: item.Price.OfferedPrice,
                OfferedPriceRoundedOff: item.Price.OfferedPriceRoundedOff,
                AgentCommission: item.Price.AgentCommission,
                AgentMarkUp: item.Price.AgentMarkUp,
                ServiceTax: item.Price.ServiceTax,
                TCS: item.Price.TCS,
                TDS: item.Price.TDS
              }            
          });                
          },
          remove(hotel,index){
          console.log('index of removed')
          console.log(this.clickedItems.splice(this.clickedItems.indexOf(index), 1))
          console.log(this.HotelRoomDetails.splice(this.HotelRoomDetails.indexOf(index), 1))         
          this.Total = this.Total - hotel.Price.RoomPrice ; 
          console.log('removed'+ hotel.Price.RoomPrice)
          this.cancelFee = this.cancelFee - hotel.CancellationPolicies[0].Charge ;         
    },
reserve(){
  this.isLoggingIn = true;
  const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress);
          const TraceId = localStorage.getItem('TraceId');
          console.log(TraceId);
          const Token = localStorage.getItem('Token');
          console.log(Token);
          const HotelCode = localStorage.getItem('HotelCode');
          console.log(HotelCode);
          const Room = localStorage.getItem('Room');
          console.log(Room);
          const cId = localStorage.getItem('Categoryid');
          console.log(cId);
          const Resultindex = localStorage.getItem('ResultIndex');
          console.log(Resultindex);
          const Categoryindex = localStorage.getItem('Categoryindex');
          console.log(Categoryindex);
          const HotelName = localStorage.getItem('HotelName');
          console.log(HotelName);
          axios.post(this.$hostname +'api/hotels/block-room',{
            "ResultIndex": Resultindex,
            "HotelCode": HotelCode,
            "HotelName": HotelName,
            "GuestNationality": "IN",
            "NoOfRooms": Room,
            "ClientReferenceNo": 0,
            "IsVoucherBooking": true,
            "CategoryId": cId,
            "EndUserIp": IPAddress,
            "TokenId": Token,
            "TraceId": TraceId,
            "HotelRoomsDetails": this.HotelRoomDetails 
          }).then((response)=>{
            console.log(response.status);
            console.log(response.data);
            this.$router.push("/passengerdetails");
          })
}
  }
}

</script>

<style scoped>

.my-span {
  align-content: center;
}

.searchItem{
  border: 1px solid lightgrey;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  background-color: rgb(250, 247, 250);
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

.Save{
  font-size: 12px;
  background-color: #FFDB58;
  color: black;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
}

.Subtitle{
  font-size: 12px;
  /* font-weight: bold; */
  color: grey;
}

.Features{
  font-size: 12px;
}

.CancelOp{
  font-size: 12px;
  /* color: #008009; */
  color: red;
  font-weight: bold;
}

.CancelOpSubtitle{
  font-size: 12px;
  color: #008009;
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
