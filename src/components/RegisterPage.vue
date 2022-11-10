<template>
    <v-img src="https://media.istockphoto.com/photos/purple-defocused-blurred-motion-abstract-background-picture-id1273929462?b=1&k=20&m=1273929462&s=170667a&w=0&h=Yldyj7IZlkZSFHf3kgp4T2OV2HAYNRX1Kw8W4RAqPlQ=">
    <div>
    <home-headers></home-headers>
    <!-- <v-dialog
        v-model="dialog"
        persistent
        max-width="400"
      >
        <v-card>
          <v-card-title class="text-h5 pa-10">
            Please check your username or password
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#3e154e"
              text
              @click="dialog = false"
            >
              Okay
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
    <v-container class="container" >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4">
            <v-card class="elevation-15 mt-14">
              <v-window >
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-card-text class="mt-12">
                        <v-row justify="space-around">
      <v-avatar color="#3e154e">
        <v-icon dark>
          mdi-airplane</v-icon>
      </v-avatar>
                        </v-row>
                        <br>
                        <h2 class="text-center">Register</h2>
                        
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <form @submit.prevent=" register" >
                              
                              <v-text-field
                                label="Username"
                                name="username"
                                placeholder="Username"
                                v-model="username"
                                outlined
                                dense
                                color="purple"
                                autocomplete="false"
                                class="mt-16"
                                prepend-inner-icon="mdi-account"
                              />
                              <v-text-field
                                label="Email"
                                name="email"
                                placeholder="Email"
                                v-model="email"
                                :rules="emailRules" 
                                outlined
                                dense
                                color="purple"
                                autocomplete="false"                              
                                prepend-inner-icon="mdi-email"
                              />
                              <v-text-field
                                label="Password"
                                name="password"
                                placeholder="Password"
                                v-model="password"
                                :rules="passwordRules" 
                                outlined
                                dense
                                color="purple"                             
                                prepend-inner-icon="mdi-lock-outline"
                                :type="passwordShow ? 'text' : 'password'"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="passwordShow = !passwordShow"
                              />
                              <v-text-field
                                label="Phone Number"
                                name="phonenumber"
                                placeholder="PhoneNumber"
                                v-model="phonenumber"                             
                                outlined
                                dense
                                color="purple"
                                type="phonenumber"
                                prepend-inner-icon="mdi-phone"
                            />
                            
                              <v-btn
                               id="register"
                                type="submit"
                                color="purple"
                                dark
                                block
                                tile
                              >Register</v-btn
                              >
                              <br>
                              
                               <v-row>
                                <v-col cols="12" sm="7">
                                  <v-checkbox
                                    label="Terms & Condition"
                                    class="mt-n1"
                                    color="#3e154e"
                                  > </v-checkbox>
                                </v-col>                           
                              </v-row>
                             
                            </form>
                          </v-col>
                        </v-row>
                       
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>  
  
    </div>
  </v-img>
  </template>
  
  <script>
  import HomeHeaders from './HomeHeaders.vue'
  import axios from 'axios'
  export default {
    data(){
      return{   
        username: '',
        phonenumber: '',
        password: '',
        passwordShow: false,
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be more than 8 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ], 
  // dialog:false,
      } ;
  
    },
    
    components: {
      HomeHeaders,
    },
    methods: {
      register() {       
          axios.post('http://192.168.1.39:8991/api/auth/signup', {
                   "name": this.username,
                    "password": this.password,
                    "email": this.email,
                   "username" : this.email,
                   "phone" : this.phonenumber

              }).then((response)=>{
                if(response.status===200){
                console.log(response.status);
                console.log(response.data);
                this.$router.push('/login')
                }
              }).catch((error)=>{
              
                console.log(error.response);
              });             
        }, 
    }
  
    }
  
  
  
  
  </script>
  
  <style scoped>
  ::v-deep .v-btn {
    padding-left: 12px;
    padding-right: 12px;
  }
  </style>