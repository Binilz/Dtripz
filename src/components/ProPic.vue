<template>
    <v-row>
      <v-col
        cols="12"
        sm="3"
      >
      <v-menu
          v-model="dates"
          label="Date range"
          prepend-inner-icon="mdi-calendar"
          readonly
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
          color="purple"
          outlined
        >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateRangeText"
            label="Checkin & Checkout"
            prepend-inner-icon="mdi-calendar"
            outlined
            v-bind="attrs"
            v-on="on"
            color="purple"
          ></v-text-field>
          </template>
        <v-date-picker
          v-model="dateRangeText"
          range
          color="purple"
        ></v-date-picker>
        </v-menu>
      </v-col>
      
      
        
        
   
    </v-row>
  </template>

  <script>
  export default {
    data: () => ({
      dates: [],
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
  }
</script>