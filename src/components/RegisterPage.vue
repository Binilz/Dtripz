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
                            <v-form @submit.prevent="register" ref="form" v-model="form">
                              <v-text-field
                              label="Name"
                              type="text"
                              placeholder="Name"
                              v-model="name"
                              :rules="[rules.required]"
                              outlined
                              dense
                              color="purple"
                              autocomplete="false"
                              class="mt-16"
                              prepend-inner-icon="mdi-account"
                            />  
                            <v-text-field
                              label="Email"
                             
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
                              
                              placeholder="Password"
                              v-model="password"
                              :rules="[rules.password, rules.length(6)]" 
                              outlined
                              dense
                              color="purple"                              
                              prepend-inner-icon="mdi-lock-outline"
                              :type="passwordShow ? 'text' : 'password'"
                              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="passwordShow = !passwordShow"
                            />
                            <v-text-field
                              label="Confirm Password"
                          
                              placeholder="Confirm Password"
                              v-model="password2"
                              :rules="PasswordRules2.concat(validatePassword2)"
                              outlined
                              dense
                              color="purple"                              
                              prepend-inner-icon="mdi-lock-outline"
                              :type="passwordShow ? 'text' : 'password'"
                              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="passwordShow = !passwordShow"
                            />
                            <!-- <v-text-field
                            label="Phone Number"
                            placeholder="Phone Number"
                            v-model="phone"
                    
                            outlined
                            dense
                            color="purple"                              
                            prepend-inner-icon="mdi-phone"
                        
                          /> -->
                          <v-checkbox
                              v-model="agreement"
                              :rules="[rules.required]"
                              color="#92278f"
                          >
                              <template v-slot:label>
                              I agree to the&nbsp;
                              <router-link to="/terms" class="purple--text ml-3" icon>Terms and Conditions</router-link>
                              &nbsp;and&nbsp;
                              <router-link to="/privacy" class="purple--text ml-3" icon>Privacy Policy</router-link>*
                              </template>
                          </v-checkbox> 
                              <v-btn
                              :disabled="!form"
                              :loading="isLoading"
                                type="submit"
                                id="register"
                                color="purple"
                                depressed block tile
                              >Register</v-btn
                              >
                              <br>
                              
                            
                            </v-form>
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
        password2: '',
        passwordShow: false,
        form: false,
        email: '',
        PasswordRules2: [ v => !!v || "Password incorrect" ],
        rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
  // dialog:false,
      } ;
  
    },
    
    components: {
      HomeHeaders,
    },
    methods: {
      register() {       
          axios.post('http://192.168.1.46:8991/api/auth/signup', {
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