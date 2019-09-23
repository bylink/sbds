<template>
  <div class="el-cropper">
    <VueCropper
      ref="cropper"
      :aspect-ratio="1 / 1"
      :initialAspectRatio="1 / 1"
      :highlight="false"
      :guides="false"
      :view-mode="2"
      drag-mode="crop"
      :background="true"
      :src="imgSrc"
      alt="Avatar"
    >
    </VueCropper>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs"
import "cropperjs/dist/cropper.css"
export default {
  name: "ElCropper",
  components: {
    VueCropper,
  },
  data() {
    return {
      cropImg: "",
    }
  },
  props: {
    imgSrc: {},
  },
  watch: {
    imgSrc(val) {
      this.setImage(val)
    },
  },
  methods: {
    setImage() {
      this.$refs.cropper.replace(this.imgSrc)
    },
    cropImage() {
      this.$refs.cropper
        .getCroppedCanvas({
          maxWidth: 500,
          maxHeight: 500,
        })
        .toBlob(blob => {
          this.$emit("crop", blob)
        })
    },
  },
}
</script>

<style lang="scss">
.el-cropper {
  $block-name: &;

  $color-main-cropp: $color_mint;

  .cropper {
    &-modal {
      opacity: 0.7;
      background-color: $color-white;
    }

    &-face,
    &-line,
    &-point {
      opacity: 0;
    }

    &-view-box {
      border-radius: $radius-circle;
      outline: 1px dashed $color-main-cropp;
    }

    &-line {
      background-color: $color-main-cropp;
    }

    &-point {
      background: $color-main-cropp;

      &.point-se {
        @media #{$media-query-xl} {
          opacity: 1;
        }

        &:before {
          background-color: $color-main-cropp;
        }
      }
    }

    &-center {
      display: none;
    }
  }
}
</style>

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
