<template>
  <div>
    <h1 class="green">Date Range Picker</h1>
    <br>
 
    <v-md-date-range-picker
    start-date="2022-12-13"
    end-date="2019-12-25"
    :min="nowDate"
    >
   </v-md-date-range-picker>
  </div>
</template>

<script>
export default {
  data:()=>({
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: '',
    nowDate: new Date().toISOString().slice(0,10), 
  }),
  }

</script>

<style>

</style>

<!-- <template>
<div>
  <v-col
  cols="12"
  sm="6"
  md="2"
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
    <v-text-field color="purple"
      v-model="dates"
      label="Check In & Check Out"
      prepend-inner-icon="mdi-calendar"
      outlined
      v-bind="attrs"
      v-on="on"
    ></v-text-field>
  </template>
  <v-date-picker
  v-model="dates"
  color="purple"
  range
></v-date-picker>

</v-menu>
</v-col>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style> -->