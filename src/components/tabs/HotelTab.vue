<template>
    <div>
    <v-form>
    <v-container>
      <v-row>
            <v-col
          cols="12"
          sm="6"
          md="4"
          dense
        >
          <v-text-field
            label="Select destination"
            outlined
          ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-menu
            v-model="checkin"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date1"
                label="Check in"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="checkin = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="4"
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
              <v-text-field
                v-model="date2"
                label="Check Out"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="nowDate"
              @input="checkout = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <v-col
            cols="12"
            sm="6" md="4"
          >
            <v-text-field
              placeholder="Adults  Childs  Rooms"
              solo
            ></v-text-field>
          </v-col>
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
    checkin: false,
    checkout: false
  })
}
</script>