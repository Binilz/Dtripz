<template>
  <div>
  <h1 style="text-align:center" color="purple">Trending Offers</h1>
  
  <carousel-3d 
  :controls-visible="true" 
  :clickable="false" 
  reverse-transition="fade-transition" 
  transition="fade-transition"
  >
    <slide :index="i" :key="i" v-for="(slide, i) in slides">
      <figure>
        <img :src="slide.src" />
        <figcaption>
          <v-btn text color="white">{{slide.text}}</v-btn>
        </figcaption>
      </figure>
      </slide> 
  </carousel-3d>
</div>
</template>

<script>
import {Carousel3d, Slide} from "vue-carousel-3d";
  export default {
    data:()=> ({
      slides: [       
          {src: ('hotel.jpg'), text:'Munnar'},
          {src: ('hotel1.jpg'), text:'Vattavada'},
          {src: ('hotel3.jpg'), text:'Thekkady'},
          {src: ('hotel.jpg'), text:'Munnar'},
          {src: ('hotel1.jpg'), text:'Vattavada'},
          {src: ('hotel3.jpg'), text:'Thekkady'},
      ]
    }),
    components: {
      Carousel3d,
      Slide
    },
  }
</script>
<style scoped>
.carousel-3d-container figure{
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: orange;
}
</style>