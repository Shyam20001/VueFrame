<!-- Navigation.vue -->
<template>
    <nav class="global-styles">
      <router-link to="/">Home</router-link>
      <router-link to="/upload">Upload Images</router-link>
      <router-link to="/aframe">Vue-Frame View</router-link>
      <router-link to="/mixed">Mixed-Reality</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
  };
  </script>
  
  <style scoped>
  /* Your global navigation styles here */
  .global-styles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333; /* Background color of the navigation */
    padding: 8px;
    color: #fff; /* Text color of the navigation links */
    z-index: 1000; /* Ensure it's above other content */
  }
  
  .router-link-active {
    /* Style for the active route link */
    font-weight: bold;
  }
  </style>
  