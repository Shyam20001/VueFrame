<template>
  <div>
    <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            :options="{
                    background: {
                        color: {
                            value: '#00000'
                        }
                    },
                    fullScreen: {
                      enable:true,
                      Zindex: -1
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: false
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 4,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 9
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            random: true,
                            value: 40
                        }
                    },
                    detectRetina: true
                }"
        />
   
  </div>
  <div class="foreground-content">
      <!-- Your navigation list or other content goes here -->
       <!-- Navigation -->
    <Navigation/>
    <router-view/>
    </div>
</template>

<script lang="ts">
//import VrExperience from '@/components/VrExperience.vue'; // Import the VrExperience component
import { loadSlim } from "tsparticles-slim";
import Navigation from './Navigate.vue';

export default {
  components: {
    Navigation,
    
},
data() {
    return {
      particlesInit: async (engine) => {
        await loadSlim(engine);
      },
      particlesLoaded: async (container) => {
        console.log("Particles container loaded", container);
      },
    };
  },
};
</script>


<style>
/* Your global styles here */
body {
  margin: 0;
  font-family: 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: auto;
}

.foreground-content {
  position: relative;
  z-index: 1;
}

/* Responsive styles */
@media screen and (max-width: 600px) {
  /* Adjust styles for screens with a maximum width of 600px */
  .global-styles {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>