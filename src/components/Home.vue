<template>
    <div class="vue-frame-container">
      <header>
        <h1 class="vue-frame-heading">VueFrame</h1>
        <p class="vue-frame-subheading">Explore Augmented & Virtual Reality</p>
      </header>
  
      <main>
        <section class="welcome-section">
          <h3 class="section-heading">Welcome to VueFrame!</h3>
          <p class="section-description">Immerse yourself in augmented reality and virtual reality experiences with your equirectangular images.</p>
        </section>
  
        <section class="features-section">
          <h4 class="section-heading">Key Features</h4>
          <ul class="feature-list">
            <li>Easily load equirectangular images from your local storage</li>
            <li>Experience AR and VR modes for immersive exploration</li>
            <li>Seamless integration with the powerful A-Frame framework</li>
            <li>User-friendly interface with intuitive controls</li>
          </ul>
        </section>
  
        <section class="free-to-use-section">
          <h3 class="section-heading">Free to Use</h3>
          <p class="section-description">VueFrame is completely free, providing accessibility to everyone interested in creating and enjoying AR/VR content.</p>
        </section>
  
        <section class="beta-version-section">
          <h3 class="section-heading">Beta Version - Under Development</h3>
          <p class="section-description">VueFrame is currently in beta, with continuous improvements and updates in progress. Your feedback is invaluable as we work to enhance the platform.</p>
        </section>
  
        <section class="feedback-section">
          <h3 class="section-heading">Feedback Welcome</h3>
          <p class="section-description">Share your thoughts, suggestions, and report any issues you encounter. Your input will contribute to making Vue-Frame an even better platform.</p>
        </section>
      </main>
  
      <footer>
        <button class="contact-button" @click="makeCall">Contact Us</button>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      makeCall() {
        window.location.href = 'tel:+919087095331';
      }
    }
  }
  </script>
  
  <style scoped>
    /* Import the custom font */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
    /* Add your custom styles for the Vue-Frame UI here */
    .vue-frame-container {
      max-width: auto;
      margin: 0 auto;
      padding: 20px;
      background-color: #000000;
      border-radius: 10px;
      opacity: 0.963;
      font-family: 'Roboto', sans-serif; /* Apply the custom font */
    }
  
    /* Increase text size within .vue-frame-container */
  .vue-frame-container p,
  .vue-frame-container h3,
  .vue-frame-container h4,
  .vue-frame-container h5,
  .vue-frame-container h6 {
    font-size: 1.5em; /* Adjust the font size as needed */
  }
    header {
      text-align: center;
      margin-bottom: 30px;
      padding: 70px;
    }
  
    .vue-frame-heading {
      font-size: 2.5em;
      margin: 0;
      color: #2ecc71; /* Vibrant green */
    }
  
    .vue-frame-subheading {
      font-size: 1.2em;
      color: #3498db; /* Vibrant blue */
      margin: 0;
    }
  
    .section-heading {
      color: #333;
    }
  
    .section-description {
      color: #666;
    }
  
    .feature-list {
      list-style-type: disc;
      padding-left: 20px;
    }
  
    .free-to-use-section, .beta-version-section, .feedback-section {
      margin-top: 30px;
    }
  
    .contact-button {
      background-color: #e74c3c; /* Vibrant red */
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .contact-button:hover {
      background-color: #335e0b; /* Darker red on hover */
    }
  </style>
  