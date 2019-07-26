<template>
  <component :is="tag" v-bind="tagBind" class="el-logo" :class="classes">
    <span class="el-logo__svg" v-html="svg"></span>
    <span class="el-logo__text">
      <span class="el-logo__title">{{ title }}</span>
      <span class="el-logo__sub-title">{{ subTitle }}</span>
    </span>
  </component>
</template>

<script>
const req = require.context("../assets/icons/", true, /^\.\/.*\.svg$/)

export default {
  name: "ElLogo",
  props: {
    /**
     *  Название сервиса
     *
     */
    title: {
      type: String,
      default: "Смайлбус",
    },
    /**
     *  под-название сервиса
     *
     */
    subTitle: {
      type: String,
      default: "IT-платформа",
    },
    /**
     *  Если нужна ссылка внутри приложения:
     * `{name: 'test', params: { id: test.id }}`
     */
    to: {
      default: null,
    },
    /**
     *  Если нужна обычная ссылка:
     * `https://gomel-minsk.by/`
     */
    href: {
      default: null,
    },
    /**
     *  По умолчанию ожидается использование в `nuxt.js`
     *
     */
    nuxt: {
      type: Boolean,
      default: true,
    },
    /**
     *  По умолчанию ожидается использование в `nuxt.js`
     *
     */
    white: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "el-logo--white": this.white,
      }
    },

    svg() {
      return req("./" + "logo" + ".svg").replace(/^<svg /, "<svg style='fill: currentColor'")
    },

    defaultTag() {
      return "div"
    },

    tag() {
      if (this.to) {
        return this.nuxt ? "nuxt-link" : "router-link"
      } else if (this.href) {
        return "a"
      }
      return this.defaultTag
    },

    tagBind() {
      const result = {}
      if (this.to) {
        result.to = this.to
      } else if (this.href) {
        result.href = this.href
      } else if (this.disabled || this.loading) {
        result.disabled = true
      }

      return result
    },
  },
}
</script>

<style lang="scss">
.el-logo {
  $block-name: &;

  @include reset-text-indents();

  color: $color-main;
  font-family: $font-regular;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  flex-wrap: nowrap;
  flex: 0 0 auto;
  outline: none;

  &__title {
    display: block;
    font-size: $size_xxxs;
    line-height: $line_height_xxs;
    text-transform: uppercase;

    @media #{$media-query-m} {
      font-size: $size-ml;
      line-height: $line-height-sm;
    }
  }

  &__sub-title {
    display: block;
    font-size: 8px;
    line-height: 10px;
    color: $color-gray-dark;

    @media #{$media-query-m} {
      font-size: 14px;
      line-height: 17px;
    }
  }

  &__svg {
    margin-right: 6px;

    @media #{$media-query-m} {
      margin-right: 11px;
    }

    svg {
      width: 26px;
      height: 26px;

      @media #{$media-query-m} {
        width: 46px;
        height: 46px;
      }
    }
  }

  &--white {
    color: $color-white;

    & #{$block-name}__sub-title {
      color: $color-white;
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElLogo @click.prevent href="javascript:void(0);" title="Сmмайлбус"/>
    <ElLogo @click.prevent href="javascript:void(0);" white title="Stats"/>
    <ElLogo @click.prevent href="javascript:void(0);" title="Identity"/>
  </div>
  ```
</docs>
