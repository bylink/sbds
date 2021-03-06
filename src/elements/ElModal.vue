<template>
  <modal
    class="el-modal"
    :class="classes"
    :name="name"
    :scrollable="true"
    :adaptive="true"
    height="auto"
    width="100%"
    :maxWidth="515"
    @before-open="event => $emit('beforeOpen', event)"
    @before-close="event => $emit('beforeClose', event)"
    @closed="event => $emit('closed', event)"
    @opened="event => $emit('opened', event)"
  >
    <div class="el-modal__inner">
      <div class="el-modal__header" v-if="$slots.title">
        <div class="el-modal__title"><slot name="title" /></div>
      </div>
      <div class="el-modal__body">
        <form @submit.prevent="handleSubmit">
          <div class="el-modal__body-inner"><slot /></div>
          <div class="el-modal__control" v-if="$slots.footer"><slot name="footer" /></div>
        </form>
      </div>
      <button type="button" class="el-modal__btn-close" @click.prevent="close">
        <ElSvgIcon class="el-modal__icon-close" name="popup_close" />
      </button>
    </div>
  </modal>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElButton from "../elements/ElButton"
export default {
  name: "ElModal",
  components: { ElButton, ElSvgIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
    isMedium: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$modal.hide(this.name)
    },
    handleSubmit() {
      if (this.loading) return
      this.$emit("submit")
    },
    runResizeEvents() {
      this.vhFix()
    },
    vhFix() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    },
  },
  computed: {
    classes() {
      return {
        "el-modal--large": this.isLarge,
        "el-modal--medium": this.isMedium,
      }
    },
  },
  beforeMount() {
    this.runResizeEvents()
    window.addEventListener("resize", this.runResizeEvents)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.runResizeEvents)
  },
}
</script>

<style lang="scss">
.v--modal-block-scroll {
  width: 100%;
}

.el-modal {
  $block-name: &;

  @media #{$media-query-m} {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &__btn-close {
    @include reset-btn();
    padding: 5px;
    position: absolute;
    right: 15px;
    top: 17px;
    z-index: 1;

    &:hover,
    &:focus {
      color: $color-main-focused;
    }

    &:active {
      color: darken($color-main-active, 8%);
    }
  }

  &__icon-close {
    width: $tappable-element-xs;
    height: $tappable-element-xs;
    transition: color $duration-quickly;
  }

  &.overlay-fade-enter-active,
  &.overlay-fade-leave-active {
    .el-modal__inner {
      transition: all 0.15s;
      transform: translate3d(0, 0, 0);
    }
  }

  &.overlay-fade-enter,
  &.overlay-fade-leave-active {
    .el-modal__inner {
      transform: translate3d(0, -20px, 0);
    }
  }

  &.v--modal-overlay {
    z-index: $z-index-overlay;
    background-color: $color-white;
    @media #{$media-query-m} {
      background-color: fade-out($color-black, 0.3);
    }

    .v--modal-background-click {
      padding-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .v--modal-box {
      overflow: visible;
      top: auto !important;
      left: auto !important;
      width: 100% !important;
      height: 100vh !important;

      @media #{$media-query-m} {
        width: 515px !important;
        height: auto !important;
      }
    }

    &.scrollable {
      .v--modal-box {
        margin-bottom: 0;
      }
    }
  }

  .v--modal {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }

  &__header {
    padding-bottom: $space-m;
    position: relative;
    padding-right: 30px;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0;
    color: $color-gray-darkest;
    font-family: $font-regular;
    font-size: $size-l;
    font-weight: $weight-normal;
    line-height: $line-height-sm;
    @media #{$media-query-m} {
      font-size: $size-xl;
      line-height: $line-height-l;
    }
  }

  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    & form {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }

  &__body-inner {
    margin-bottom: 40px;
  }

  &__inner {
    position: relative;
    padding: 24px 20px 20px 20px;
    background-color: $color-white;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
    @media #{$media-query-m} {
      margin: 0 12px;
      min-height: unset;
      height: auto;
      border-radius: 8px;
      padding: 32px 40px 40px 40px;
      box-shadow: 0 6px 12px rgba(110, 110, 110, 0.61);
    }
  }

  &__control {
    text-align: center;
    margin: auto -3px 20px -3px;
    @media #{$media-query-m} {
      margin-bottom: 0;
      margin-top: 0;
      text-align: left;
      display: flex;
      flex-wrap: wrap;
    }

    &:empty {
      display: none;
    }

    .el-button {
      margin-left: 3px;
      margin-right: 3px;
      width: 100%;
      margin-bottom: 24px;
      @media #{$media-query-m} {
        width: auto;
        margin-right: 32px;
        margin-bottom: 0;
      }
    }
  }
  &--large {
    &.v--modal-overlay {
      .v--modal-box {
        @media #{$media-query-m} {
          width: 842px !important;
        }
      }
    }
  }
  &--medium {
    &.v--modal-overlay {
      .v--modal-box {
        @media #{$media-query-m} {
          width: 561px !important;
        }
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElButton @click.prevent="$modal.show('testModal')">Modal</ElButton>
    <ElModal name="testModal">
      <template slot="title">Заголовок</template>
      Контент
    </ElModal>
  </div>
  ```
</docs>
