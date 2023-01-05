<template>
    <div>
    <home-headers></home-headers>
        <h1>Hotel Details</h1>
        <v-data-table
        :headers="headers"
        :items="hotels"
        hide-default-footer
        class="elevation-5 ml-14 mr-14"
      >
      <template v-slot:[`item.HotelPicture`]="{ item }">
       <v-card height="250">
        <div class="p-7">
          <v-img :src="item.HotelPicture" :alt="item.name" height="250px"></v-img>
        </div>
       </v-card>
    </template>
      <template v-slot:[`item.StarRating`]="{ item }">
        <v-rating
        color="yellow"
        background-color="black"
        
        v-model="item.StarRating">
      </v-rating>
    </template>
    </v-data-table>
    
    </div>
   
</template>

<script>

import HomeHeaders from './HomeHeaders.vue'



export default{
    data()
    {
        return{
          headers: [
          {text: 'Hotel Name',align: 'start',sortable: false,value: 'HotelName',},
          {text: 'Hotel Image',value: 'HotelPicture',},
          { text: 'Hotel rating', value: 'StarRating' },  
          { text: 'Price', value: 'Price.RoomPrice' },
          { text: 'Hotel Address', value: 'HotelAddress' },
          
          
        ],
        hotels:[],
        items:[],    
        }
    },
    created() {
          this.hotels = JSON.parse(localStorage.getItem("Items") || '[]')
        },
    methods:{
     
     
      
    },
   
    components: {
      HomeHeaders,
    },
}
</script>