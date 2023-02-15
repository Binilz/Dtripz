<template>
<div>
  <v-app-bar  
  color="#3e154e" height="100" 
  app style="position:fixed"
  flat>  
  
  <button>
      <router-link to="/" ><v-img
      class="mx-2"
      src="logo.png"
      max-height="200"
      max-width="200"></v-img></router-link></button>
    <!-- <v-btn color="purple" dark permanent><router-link to="/login">Log In</router-link> </v-btn> -->
  
<v-spacer></v-spacer>

<v-list class="d-flex align-center rounded" color="#3e154e" dark permanent

>
<v-list-item
  v-for="item in items"
  :key="item.title"
  :to="item.to"
  link
  >

    <v-list-item-title>{{ item.title }}</v-list-item-title>
  
</v-list-item>


</v-list>



</v-app-bar>
</div>
</template>
<script>

export default {
data:() => ({
items: [
        { title: 'Welcome',}, 
        { title: 'About Us', to:"/profilepage"}
      ],
})
}


</script>

<style scoped>


</style>