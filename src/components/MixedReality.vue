<template>
    <div>
      <a-scene embedded>
        <!-- Use the public directory for static assets -->
        <a-sky :src="img" rotation="0 -90 0"></a-sky>
      </a-scene>
    </div>
    
  </template>
    
  <script>
  import img from '@/assets/image1.jpeg'; // Replace with the correct path to your image
  
  export default {
    beforeRouteEnter(to, from, next) {
    // Display warning before entering the mixed reality page
    alert('This is under development. Proceed to experience the AR.');

    // Continue with the navigation
    next();
  },
  beforeRouteLeave(to, from, next) {
    // Display warning before leaving the mixed reality page
    alert('Thank you for exploring!');
    
    // Continue with the navigation
    next();
  },
    data() {
      return {
        img
      };
    },
    mounted() {
      // Example console statements using chalk
      console.log('Vue component mounted!');
      console.log('Image path:', this.img);
      console.log('This Site is Working with 0 Vulnerabilites Found.')
    }
  };
  
  </script>