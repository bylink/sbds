<template>
  <div class="el-dropdown" :class="dropdownClasses" v-click-outside="handleClickOutside">
    <div class="el-dropdown__toggler" tabindex="0" @keyup.esc="closeDropdown">
      <slot name="activator" />
    </div>
    <div class="el-dropdown__body"><slot /></div>
  </div>
</template>

<script>
import VueClickOutside from "vue-click-outside"
import ElButton from "../elements/ElButton"
import ElSvgIcon from "../elements/ElSvgIcon"

export default {
  name: "ElDropdown",
  components: { ElSvgIcon, ElButton },
  directives: {
    "click-outside": VueClickOutside,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
    },
  },

  computed: {
    dropdownClasses() {
      return {
        [`el-dropdown--position-${this.position}`]: this.position,
        ["el-dropdown--is-open"]: this.value,
      }
    },
    activator() {
      console.log(this.$slots)
      return this.$slots.activator[0].elm
    },
  },

  watch: {
    $route() {
      this.closeDropdown()
    },
  },

  mounted() {
    this.activator.addEventListener("click", this.toggleDropdown)
  },

  methods: {
    toggleDropdown() {
      this.$emit("input", !this.value)
    },
    handleClickOutside(e) {
      if (!document.body.contains(e.target)) return
      this.closeDropdown()
    },
    closeDropdown() {
      this.$emit("input", false)
    },
  },
}
</script>

<style lang="scss">
.el-dropdown {
  $block-name: &;

  position: relative;
  display: inline-block;

  &__toggler {
    outline: none;
  }

  &__body {
    position: absolute;
    z-index: $z_index_dropdown;
    top: 100%;
    left: 0;
    height: 0;
    overflow: hidden;
    margin: 0;
    min-width: 85px;
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity $duration-quickly, transform $duration-quickly;
  }

  &--is-open {
    #{$block-name} {
      &__body {
        height: auto;
        visibility: visible;
        overflow: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &--position-right {
    #{$block-name} {
      &__body {
        left: auto;
        right: 0;
      }
    }
  }

  &--position-left {
    #{$block-name} {
      &__body {
        left: 0;
        right: auto;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  let dropIsOpen = false
  <div>
    <ElDropdown v-model="dropIsOpen">
      <ElButton slot="activator">Тогглер</ElButton>
      <div style="background-color: #f1f1f1;">
        <ElButton
                href="#"
                @click.prevent
                variation="main"
        >
          Профиль
        </ElButton>
        <ElButton
                href="#"
                @click.prevent
                variation="main-outline"
                size="l"
        >
          Транзакции
        </ElButton>
        <ElButton
                href="#"
                @click.prevent
                variation="white"
        >
          Безопасность
        </ElButton>
        <ElButton
                href="#"
                @click.prevent
                variation="gray-light-small"
                size="l"
        >
          Выйти
        </ElButton>
      </div>
    </ElDropdown>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
  ```
</docs>
