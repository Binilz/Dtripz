<template>
  <div>
    <h1 style="text-align:center" color="#3e154e">Top Destinations</h1>
<div class="col-md-6 col-xl-3 mb-3 mb-md-4 pb-1"
    <v-row>
      
      <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
         <v-card max-width="610px" class="ml-14" >
     
          <v-img  
            src="Munnar.jpg" max-height="=300"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text class="text-white">30 Hotel</v-card-text>
       <v-card-text class="text-white">46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card> 
         </template>
         </v-hover>
       </v-col>
      
       <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
         <v-card max-width="610px" >
     
          <v-img  
            src="Thekkady.jpg"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text class="text-white">30 Hotel</v-card-text>
       <v-card-text class="text-white">46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card>
         </template>
         </v-hover> 
       </v-col>
       <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
         <v-card max-width="810px" class="mr-14">
     
          <v-img  
            src="Kovalam.jpg" max-height="400"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text >30 Hotel</v-card-text>
       <v-card-text >46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card> 
         </template>
         </v-hover>
       </v-col>
   </v-row>
 
   <v-row>
      <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
        
         <v-card max-width="810px" class="ml-14" >
     
          <v-img  
            src="Wayanad.jpg" max-height="400"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text >30 Hotel</v-card-text>
       <v-card-text >46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card> 
         </template>
         </v-hover>
       </v-col>
       <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
         <v-card max-width="810px" >
     
          <v-img  
            src="Chennai.jpg" max-height="400"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text >30 Hotel</v-card-text>
       <v-card-text >46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card> 
         </template>
         </v-hover>
       </v-col>
       <v-col  cols="4"  >
        <v-hover>
          <template v-slot:default="{ hover }">
         <v-card max-width="810px" class="mr-14">
     
          <v-img  
            src="Madhurai.jpg"></v-img>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#3e154e"
              >
              <v-card-text >30 Hotel</v-card-text>
       <v-card-text >46 Packages</v-card-text>
              </v-overlay>
            </v-fade-transition>
         </v-card> 
         </template>
         </v-hover>
       </v-col>
 </v-row>

     
 
</div>
  </template>