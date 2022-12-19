<template>
  <div class="col-lg-12 control-section">
      <div id="wrapper">
           <ejs-daterangepicker id="daterangepicker" :placeholder="waterMarkText" :min="minDate" :max="maxDate"></ejs-daterangepicker>
      </div>
  
  </div>
  </template>
  
  <script>
  
  import Vue from "vue";
  import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";
  
  Vue.use(DateRangePickerPlugin);
  export default Vue.extend({
    data: function() {
      return {
        waterMarkText: "Select a Range",
        minDate: new Date("1/15/2017"),
        maxDate: new Date("12/20/2017")
      };
    }
  });
  </script>
  
  
  
  <style scoped>
  #wrapper {
    max-width: 246px;
    margin: 30px auto;
    padding-top: 15px;
  }
  </style>