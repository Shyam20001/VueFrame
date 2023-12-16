<template>
  <div>
    <div class="upload-container">
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <a class="help" href="https://www.flickr.com/groups/equirectangular/">what's a Equirectangular Image?</a>
    <button class="upload-button" @click="uploadImage">Upload Image</button>
  </div>

    <hr />

    <div>
      <h2>Total Images: {{ totalImages }}</h2>
      <div class="image-grid">
        <div v-for="(image, index) in images" :key="index" class="image-item">
          <img :src="image" alt="Uploaded Image" />
          <div class="actions">
            <button @click="deleteImage(index)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      images: [],
      totalImages: 0,
    };
  },
  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },
    uploadImage() {
      if (this.file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageDataUrl = e.target.result;

          // Update the images array with the new image data URL
          this.images.push(imageDataUrl);

          // Save the images array to localStorage
          localStorage.setItem('uploadedImages', JSON.stringify(this.images));

          // Update the totalImages count
          this.totalImages = this.images.length;

          // Clear the file input
          this.$refs.fileInput.value = null;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(this.file);
      }
    },
    deleteImage(index) {
      // Remove the image at the specified index
      this.images.splice(index, 1);

      // Save the updated images array to localStorage
      localStorage.setItem('uploadedImages', JSON.stringify(this.images));

      // Update the totalImages count
      this.totalImages = this.images.length;
    },
  },
  mounted() {
    // Retrieve previously uploaded images from localStorage
    const storedImages = localStorage.getItem('uploadedImages');
    if (storedImages) {
      this.images = JSON.parse(storedImages);
      this.totalImages = this.images.length;
    }
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

input[type="file"] {
  padding: 5px;
  background-color: rgba(238, 241, 231, 0.934);
  color: rgb(0, 0, 0);
  
}
.upload-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.upload-button:hover {
  background-color: #2980b9;
}
.help{
  padding: 10px;
  color: #5c0aff7d;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;
}

.image-item {
  position: relative;
  overflow: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.actions {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(29, 4, 2, 0.8);
  border-radius: 8px ;
  padding : 4px;
}

button {
  border: none;
  color: aqua;
  background: rgb(216, 47, 5);
  cursor: pointer;
  padding: 4px;
}
</style>
