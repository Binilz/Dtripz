<template>
   <!-- <v-img src="https://media.istockphoto.com/photos/purple-defocused-blurred-motion-abstract-background-picture-id1273929462?b=1&k=20&m=1273929462&s=170667a&w=0&h=Yldyj7IZlkZSFHf3kgp4T2OV2HAYNRX1Kw8W4RAqPlQ=">
     -->
 <div>
  <home-headers/>
  <br>
  <v-card class="mx-auto" max-width="1000" flat>
    <v-img height="200" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
    <v-row style="margin:2.5%;position:absolute; top: 130px">

                <v-list-item>
                 <v-list-item-avatar size="125">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt="John"
                    >
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="text-h4" style="margin-top:20px;">User</v-list-item-title>
                    <v-list-item-subtitle>Traveller</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
  </v-row>
  <br>
<br>
<br>
<br>

  <v-row>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card
         
         
        >
          <v-card-title class="text-h4" >
           Profile
          </v-card-title>

          <v-card-subtitle>Basic info, for a faster booking experience</v-card-subtitle>
          <v-text-field class="ml-6 mr-6"
          
          label="Name"></v-text-field>
      <v-text-field class="ml-6 mr-6"
          
          label="Birthday"></v-text-field>
      <v-text-field class="ml-6 mr-6"
          
          label="Gender"></v-text-field>

          <v-text-field class="ml-6 mr-6"
          
          label="Marital Status"></v-text-field>

          <v-card-actions>
            <v-btn >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
        <br>
      <br>
   
      </v-col>
      <v-col cols="12">
        <v-card
        
        >
          <v-card-title class="text-h4">
            Login Details
          </v-card-title>

          <v-card-subtitle>Manage your email address mobile number and password</v-card-subtitle>

          <v-text-field class="ml-6 mr-6"
          
          label="Mobile Number"></v-text-field>
      <v-text-field class="ml-6 mr-6"
          
          label="Email"></v-text-field>
      <v-text-field class="ml-6 mr-6"
          
          label="Password"></v-text-field>

          <v-card-actions>
            <v-btn >
              Edit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
  </v-row>
</v-card>
 </div>
 <!-- </v-img> -->
</template>

<script>
import HomeHeaders from './HomeHeaders.vue'

export default {
  data: () => ({
      
    }),
 components:{
  HomeHeaders
 }
}
</script>
