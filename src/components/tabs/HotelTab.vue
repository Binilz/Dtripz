<template>
    <div>
    <form>
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
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date1"
                label="Check in"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="checkin = false"
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
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date2"
                label="Check Out"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="date1"
              @input="checkout = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <v-col
            cols="12"
            sm="6" md="4"
          >
          <v-dialog
          v-model="dialog"
          width="500"
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
          <v-card>
            
            <v-card-title class="text-h5">
              Adults &nbsp;<h6 class="text-center grey--text">(+12yrs)</h6> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp; &nbsp; &nbsp;
              <v-btn class="control-button" @click="decreaseAdult">-</v-btn>
              &nbsp; {{ Adult }} &nbsp;
              <v-btn class="control-button" @click="increaseAdult">+</v-btn>
            </v-card-title>
          

            <!-- :disabled="!Child ? 'true': undefined" -->
            <v-card-title class="text-h5">
              Childern &nbsp;<h6 class="text-center grey--text">(2-12yrs)</h6>  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              <v-btn class="control-button" @click="decreaseChild">-</v-btn>
              &nbsp; {{ Child }} &nbsp;
              <v-btn class="control-button" @click="increaseChild">+</v-btn>
            </v-card-title>
       
            <v-card-title class="text-h5">
              Infants &nbsp;<h6 class="text-center grey--text">(0-2yrs)</h6> &nbsp;&nbsp;&nbsp; :&nbsp; &nbsp; &nbsp;&nbsp; 
              <v-btn class="control-button" @click="decreaseInfant">-</v-btn>
              &nbsp; {{ Infant }} &nbsp;
              <v-btn class="control-button" @click="increaseInfant">+</v-btn>
            </v-card-title>
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
          <!-- </v-col> -->
          <!-- </v-row> -->
          </v-card>
            <!-- </v-card-title>
          </v-card> -->
          </v-dialog>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-btn 
          color="#92278f" 
          dark >
         <router-link  style="text-decoration: none; color: inherit;" to="/hotelslist"  >
            <v-icon>mdi-magnify</v-icon>Search</router-link></v-btn>
          </v-col>
    </v-row>
    </v-container>
   </form>
</div>
</template>

<script>
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
    Adult: 1,
    Child: 0,
    Infant: 0,

  }),
  
  computed: {
      doubleValue: {
          get(){
              //this function will determine what is displayed in the input
              return  this.travellers = this.Adult + '  ' + 'Adults'+ '  ' + this.Child + '  ' + 'Childs'+ '  ' +this.Infant + '  ' + 'Infants';
          },
      }
    },
    methods:{
        decreaseAdult() {
          if(this.Adult > 1) {
              this.Adult -= 1
            }
            if(this.Adult < this.Infant){
              this.Infant -= 1 ;
              alert(`Infant can't travel more than Adult`)
          }

          // console.log('decrease button clicked');
          // console.log(this.Adult--);
        },
        increaseAdult() {
          this.Adult = this.Adult === 9 ? 9 : this.Adult + 1;
            // console.log(this.Adult++);
        },
        decreaseChild() {
          if(this.Child) {
              this.Child -= 1
            }
        },
        increaseChild() {
          this.Child = this.Child === 6 ? 6 : this.Child + 1;
        },
        decreaseInfant() {
          if(this.Infant) {
              this.Infant -= 1
            }
        },
        increaseInfant() {
          if(this.Adult > this.Infant){
            this.Infant = this.Infant === 6 ? 6 : this.Infant + 1;
          }else{
            alert(`Infant can't travel more than Adult`)
          }
        },
    }
}

</script>