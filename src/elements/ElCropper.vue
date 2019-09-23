<template>
  <div class="el-cropper">
    <VueCropper ref="cropper" :src="imgSrc" alt="Avatar"> </VueCropper>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs"

export default {
  name: "ElCropper",
  components: {
    VueCropper,
  },
  props: {
    imgSrc: {},
  },
}
</script>

<style lang="scss"></style>

<docs>
    ```jsx
        let imgSrc = 'https://yt3.ggpht.com/-xxp17w8gwH4/AAAAAAAAAAI/AAAAAAAAAAA/yoFDaHVr8os/s84-c-k-no-mo-rj-c0xffffff/photo.jpg';

        <div style="max-width: 100px;">
            <ElCropper
               :img-src="imgSrc"
            />
        </div>
    ```
</docs>
