<template>
   <v-img src="https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?w=2000">
    
 <div>
  <home-headers/>
  <br>
 
  <v-row class="ma-10">
    <div class="sm-1 ml-16">
    <v-col  >
      <v-card
    height="350"
    width="260"
    elevation="5">
 
      <v-list-item>
     <!-- <v-list-item-avatar>
            <v-img :src="user.photoURL"></v-img>
            </v-list-item-avatar>
            </v-list-item> -->
            
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{user.displayName}}
          </v-list-item-title>
          <v-list-item-subtitle>
            Personal Profile
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
  </v-card>
    </v-col>

  </div>
  
      <v-col >
        <div class="mr-14">
        <v-card class=" rounded-xl" elevation="5">
  
          <v-card-title class="text-h4" >
          <strong>Profile </strong> <v-spacer></v-spacer> <v-card-actions>
            <div class="text-">
              <v-dialog
                v-model="dialog"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
            <v-btn   
            color="purple"
            dark
            v-bind="attrs"
            v-on="on">
            <v-icon left>
              mdi-pencil
            </v-icon>
              Edit
            </v-btn>
          </template>

        </v-dialog>
      </div>
          </v-card-actions>
      
          </v-card-title>
          
          
          <v-card-subtitle>Basic info, for a faster booking experience</v-card-subtitle>
        <div class="ml-6 mr-6 ">
    
          <p>
            Name &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; :
            <strong>{{user.displayName}}</strong>
            <br>
            <br>
            <v-divider></v-divider>
           
          
            <br />Email  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;:
            <strong>{{user.email}}</strong>
            <br>
            <br>
            <v-divider></v-divider>

           <br>
         
            Gender &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  :
            <strong></strong>
            <br>
            <br>
            <v-divider></v-divider>
            <br>
          
           Marital Status &nbsp; :
            <strong></strong>
           <br>
          <br>
   <v-divider></v-divider>
   <br>
     Mobile Number&nbsp;:
   <strong></strong>
   <br>
   <br>
   <br>
   <v-divider></v-divider>
  </p>
          </div>      
             
        </v-card>
        </div>

        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Edit Profile</span>
          </v-card-title>
          <v-card-text>
            
              <v-row>
                <v-col
                cols="12"
                sm="6"
                md="4"
                >
                  <v-text-field
                    label="Name"
                                       
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                ><v-select
                :items="gender"
                label="Gender"
              ></v-select>
                </v-col>
                </v-row>
               
               <v-row>
                <v-col
                cols="12"
                sm="6"
                md="4"
              > 
              <v-text-field
              label="Mobile Number"
              type="number"                   
            ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                <v-select
                :items="marital"
                label="Marital Status"
              ></v-select>
                </v-col>
               </v-row>
         
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    
   
      </v-col>
    
   
      
    </v-row>



</div>

 </v-img>
</template>

<script>
import HomeHeaders from './HomeHeaders.vue'
import firebase from 'firebase/compat/app';


export default {
  data: () => ({
    user:null,
    dialog: false,
    items: [
          { title: 'Profile', icon: 'mdi-account', to: "/profilepage" },
          { title: 'Login Details', icon: 'mdi-login' },
          { title: 'Payments', icon: 'mdi-account-credit-card' },
         { title: 'Settings', icon: 'mdi-account-cog' },
          { title: 'Logout', icon: 'mdi-logout' , to: "/login"},
        ],
        gender: ['Male','Female'],
        marital: ['Single','Married'],
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    right: null,
    
    }),
    created() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               this.user = user;
           }
       });
   },
 components:{
  HomeHeaders
 },
 methods:{
  created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
    },

 }
}
</script>
