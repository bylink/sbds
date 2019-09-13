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
import ElLink from "../elements/ElLink"
import ElSeparator from "../elements/ElSeparator"
import ElTitle from "../elements/ElTitle"

export default {
  name: "ElDropdown",
  components: { ElButton, ElLink, ElSeparator, ElTitle },
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
      default: "right",
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
    user-select: none;
  }

  &__body {
    background-color: $color-white;
    padding: $space-xs + 4 $space-s $space-s $space-s;
    box-shadow: $shadow-s;
    border-radius: 4px;
    position: absolute;
    z-index: $z_index_dropdown;
    top: 100%;
    left: 0;
    height: 0;
    overflow: hidden;
    margin: 0;
    min-width: 85px;
    max-width: 342px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(25px);
    transition: opacity $duration-quickly, transform $duration-quickly;

    @media #{$media-query-m} {
      max-width: 360px;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -6px;
      background-color: $color-white;
      width: 27px;
      height: 27px;
      transform: rotate(135deg);
    }
  }

  &--is-open {
    #{$block-name} {
      &__body {
        height: auto;
        visibility: visible;
        overflow: visible;
        opacity: 1;
        transform: translateY(15px);
      }
    }
  }

  &--position-right {
    #{$block-name} {
      &__body {
        left: auto;
        right: 0;

        &:before {
          right: 22%;
        }
      }
    }
  }

  &--position-left {
    #{$block-name} {
      &__body {
        left: 0;
        right: auto;

        &:before {
          right: 56%;
        }
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

      <ElLink href="#" @click.prevent>
        <ElTitle size="sm" line-height="sm">История заказов</ElTitle>
      </ElLink>

      <ElLink href="#" @click.prevent>
        <ElTitle size="sm" line-height="sm">Настройки</ElTitle>
      </ElLink>

      <ElLink href="#" @click.prevent>
        <ElTitle size="sm" line-height="sm">Выход</ElTitle>
      </ElLink>

      <ElSeparator indent-bottom="s" indent-top="s"></ElSeparator>
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
