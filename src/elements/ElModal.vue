<template>
  <modal
    class="el-modal"
    :name="name"
    :scrollable="true"
    :adaptive="true"
    height="auto"
    width="100%"
    :maxWidth="510"
    @before-open="event => $emit('beforeOpen', event)"
    @before-close="event => $emit('beforeClose', event)"
    @closed="event => $emit('closed', event)"
    @opened="event => $emit('opened', event)"
  >
    <div class="el-modal__inner">
      <div class="el-modal__header" v-if="$slots.title">
        <div class="el-modal__title"><slot name="title" /></div>
      </div>
      <div class="el-modal__body"><slot /></div>
      <div class="mc-modal__control" v-if="$slots.footer"><slot name="footer"></slot></div>
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
  },
  methods: {
    close() {
      this.$modal.hide(this.name)
    },
  },
}
</script>

<style lang="scss">
.v--modal-block-scroll {
  width: 100%;
}

.el-modal {
  $block-name: &;

  padding-top: 12px;
  padding-bottom: 12px;

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
    background-color: fade-out($color-black, 0.3);

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
    padding-right: 20px;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 0;
    color: hsl(0, 0%, 13%);
    font-family: $font-regular;
    font-size: $size-xl;
    font-weight: $weight-normal;
    line-height: $line-height-l;
  }

  &__inner {
    position: relative;
    box-shadow: 0 6px 12px rgba(110, 110, 110, 0.61);
    padding: 32px 40px 40px 40px;
    background-color: $color-white;
    margin: 0;
    border-radius: 8px;
    margin-left: 12px;
    margin-right: 12px;
  }

  &__control {
    display: flex;
    justify-content: flex-end;
    padding-top: 25px;
    margin-left: -3px;
    margin-right: -3px;

    &:empty {
      display: none;
    }

    .el-button {
      margin-left: 3px;
      margin-right: 3px;
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
