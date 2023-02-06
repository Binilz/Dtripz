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
                    <v-btn color="#92278f" dark @click="select(hotel,index)" >Select</v-btn>
                </div>
               </div>
                </div>
        </div>
      </v-list>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import HomeHeaders from '../HomeHeaders.vue'


export default{
  components:{HomeHeaders},
  data:() => ({
    RoomsDetails: [],
  }),
  created() {
          this.RoomsDetails = JSON.parse(localStorage.getItem("RoomsDetails") || '[]')
          console.log('jhh')
          console.log(this.RoomsDetails);
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
