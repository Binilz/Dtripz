<template>
    <div>
        <br>
        <br>
        <br>
        <section class="dropdown-wrapper">
          <div @click="isVisible = !isVisible" class="selected-item">
            <span v-if="selectedItem">{{destPlace}}, {{selectedItem}}</span>
            <span v-else>Select Destination</span>
          </div> 
          <div v-if="isVisible" class="dropdown-popover">
            <input v-model="search" type="text" placeholder="Search Destination" @input="SelectDestination">
            <span v-if="filterDestination.length === 0">No result found</span>
            <div class="options">
              <ul>
                <li @click="selectItem(place)" v-for="(place, index) in filterDestination" :key="`place-${index}`"> {{place.destination}},{{ place.country }}</li>
              </ul>
            </div>
          </div> 
        </section>
    </div>
</template>

<script type="text/javascript" src="xml2json.js"></script>
<script>
import axios from 'axios';

  export default {
    data:()=>({
      search:'',
      selectedItem: null,
      isVisible: false,
      destination:[],
      destPlace:''
      
    }),

    computed: {
        filterDestination(){
          return this.destination.filter(place => {
            return place.country.toLowerCase().includes(this.search.trim().toLowerCase()) || 
               place.destination.toLowerCase().includes(this.search.trim().toLowerCase());
      });
        } 
      },
      
    mounted() {
      this.SelectDestination()
        },

      methods:{
        selectItem(place){
          this.selectedItem = place.country ;
          this.destPlace = place.destination;
          console.log(this.selectedItem);
          this.isVisible = false;
        },
        SelectDestination(search){
          console.log('response.status');
          console.log(search);
          axios.post("http://192.168.1.40:8991/api/city/page",{
              "off": 0,
              "on" :5,
              "keyword": this.search
          })
          .then((response)=>{
                console.log(response.status);
                console.log(response.data);
                this.dest = response.data;
                this.destination = [...new Set(this.dest)]
                console.log("this.destination")
                console.log(this.destination)
          }).catch((error)=>{
                console.log(error.response);
          });
      },
        getDestination(){
          const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress)
          axios.post("http://192.168.1.40:8991/api/city/top-destinations",{
            // params:{
              "EndUserIp" : "103.85.206.4"
            // }
          })
          .then((response)=>{
                console.log(response.status);
                console.log(response.data.TopDestination);
                var xmlstr = response.data.TopDestination;
                // this.des = xml2json.fromStr(xmlstr);
                this.des = xmlstr;
                console.log('ok');
            
          }).catch((error)=>{
              console.log(error.response);
        
          });
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
  height: 40px;
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
