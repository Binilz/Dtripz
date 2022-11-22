<template>
    <div>
    
    <div id="firebaseui-auth-container"></div>
   

  
</div>
</template>

<script>
import { ref } from 'vue';
import firebaseConfig from '../firebaseConfig';
import firebase from 'firebase/compat/app';
import axios from 'axios'

firebase.initializeApp(firebaseConfig);
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
export default{
    
    
   
    mounted() {
        const user = ref(null);
        const email = ref(null);
        const image = ref(null);
        const userid = ref(null);
        const isSignedIn =ref(false);
        const uiConfig = {
            signInFlow: 'popup',
            signinSuccessUrl : 'http://localhost:8080/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                // firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
           callbacks: {
            signInSuccessWithAuthResult: function (authResult,redirectUrl) 
            {
                user.value = authResult.user.displayName;              
                email.value = authResult.user.email;
                image.value = authResult.user.photoURL;
                console.log(authResult)
                isSignedIn.value = true;
                console.log('Signed in by user ' + user.value);

                if(email.value){
                    console.log(authResult.user.displayName)
                    const loginURL= 'http://192.168.1.46:8991/api/google/signup'
                    let payload = {
                        "name" : user.value,
                        "username": email.value,
                        "imageurl": image.value,
                    }
                    axios.post(loginURL,payload)
                    .then((response)=>{
              
                console.log(response.status);
                console.log(response.data);
                console.log('googlelogin')
                // this.$router.push("/");
                  }).catch((error)=>{                     
                console.log(error);
                 }); 
                }else{
                    console('login again')
                 }
                 
                return false;
            },
            // uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
    //   document.getElementById('loader').style.display = 'none';
    // }
           } 
        }

        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
        
        const handleSignOut = () => {
            signOut(auth).then(() => {
             
             user.value = null;
             isSignedIn.value = false;
             console.log('Signed out');
             ui.start('#firebaseui-auth-container', uiConfig);
            }).catch((error) => {
              console.log(error); 
            });
        }
        


   

        return {
            user,
            isSignedIn,
            handleSignOut,
        }
    }
    
}

</script>
