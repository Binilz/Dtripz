<template>
    <div>
    <v-form>
    <v-container class="container">
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="3"
            >
          <v-text-field
            label="From"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="3"
            >
          <v-text-field
            label="To"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="3"
            >
          <v-menu
            v-model="departure"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date1"
                label="Departure"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="departure = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="3"
            >
          <v-menu
            v-model="Return"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date2"
                label="Return"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="nowDate"
              @input="Return = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="3"
            >
            <v-select
            :items="items"
            label="Class"
            outlined
            ></v-select>
        </v-col>
          <!-- <v-col
            cols="12"
            sm="6" md="4"
          >
            <v-text-field
              label="Adults  Childs"
              solo
            ></v-text-field>
        </v-col> -->
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-btn color="#92278f" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
    </v-row>
    </v-container>
    </v-form>  
</div>
</template>

<script>
export default {
  data:()=>({
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    nowDate: new Date().toISOString().slice(0,10),
    departure: false,
    Return: false,
    items: ['Economy','Premium Economy','Business','First'],

  })
}
</script>