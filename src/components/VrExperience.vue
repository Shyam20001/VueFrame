<template>
  <div v-if="images.length > 0">
    <a-scene embedded ar>
      <a-sky :src="currentImageSrc" rotation="0 -90 0"></a-sky>
    </a-scene>

    <div class="controls">
      <button @click="setInterval(25000)"> 25s</button>
      <button @click="setInterval(60000)"> 1min</button>
      <button @click="setInterval(180000)"> 3min</button>
      <label>
        <button> Manual </button>
        <select v-model="selectedImage" @change="selectImage">
          <option v-for="(image, index) in images" :key="index" :value="index">
            Image {{ index + 1 }}
          </option>
        </select>
      </label>
    </div>
  </div>
  <div v-else>
    <p style="color: #e74c3c; font-weight: bold;">
      No images uploaded. Please upload images before entering Vue-Frame view.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: null,
      imageIndex: 0,
      transitionDuration: 10000, // Adjust duration as needed
      selectedImage: 0, // Default selected image index
      intervalId: null, // Store the interval ID for later clearing
    };
  },
  computed: {
    images() {
      // Retrieve previously uploaded images from localStorage
      const storedImages = localStorage.getItem("uploadedImages");
      return storedImages ? JSON.parse(storedImages) : [];
    },
    currentImageSrc() {
      return this.images[this.imageIndex];
    },
    getNextImageSrc() {
      return this.images[(this.imageIndex + 1) % this.images.length];
    },
  },
  methods: {
    loadImages() {
      // Set initial image
      this.currentImage = this.images[0];

      // Set interval to switch images
      this.intervalId = setInterval(() => {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.imageIndex];
      }, this.transitionDuration);
    },
    setInterval(duration) {
      // Clear existing interval
      clearInterval(this.intervalId);

      // Update transition duration
      this.transitionDuration = duration;

      // Load and switch to next image immediately
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.imageIndex];

      // Set new interval with updated duration
      this.intervalId = setInterval(() => {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.imageIndex];
      }, this.transitionDuration);
    },
    selectImage() {
      // Clear existing interval
      clearInterval(this.intervalId);

      // Set selected image and update
      this.imageIndex = this.selectedImage;
      this.currentImage = this.images[this.imageIndex];
    },
    mounted() {
      this.loadImages(); // Start image rotation on mount
    },
  },
};
</script>


<style scoped>
/* Add your component-specific styles here */
.controls {
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2px;
}
.controls button,
.controls select {
  margin-right: 10px;
}

.warning-text {
  color: #e74c3c; /* Red color for warning text */
  font-weight: bold;
}

@keyframes fade-in-out {
  from { opacity: 0; }
  to { opacity: 1; }
}

a-scene {
  position: absolute;
}

/* Define animation for image transitions */



</style>
