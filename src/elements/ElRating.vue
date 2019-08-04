<template>
  <star-rating
    v-model="total"
    class="el-rating"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :show-rating="showRating"
    :star-size="starSize"
    :read-only="readOnly"
    :rating="rating"
    :increment="increment"
    :inline="inline"
    text-class="custom-text"
  ></star-rating>
</template>

<script>
import StarRating from "vue-star-rating"
export default {
  name: "ElRating",

  components: {
    StarRating,
  },

  props: {
    /**
     *  Показать рейтинг
     *
     */
    showRating: {
      type: Boolean,
      default: false,
    },
    /**
     *  Активный цвет
     *
     */
    activeColor: {
      type: String,
      default: "#ff7200",
    },
    /**
     *  Неактивный цвет
     *
     */
    inactiveColor: {
      type: String,
      default: "#c1c1c1",
    },
    /**
     *  Размер звёзд
     *
     */
    starSize: {
      type: Number,
      default: 20,
    },
    /**
     *  Только чтение
     *
     */
    readOnly: {
      type: Boolean,
      default: false,
    },
    /**
     *  Рейтинг
     *
     */
    rating: {
      type: Number,
      default: 0,
    },
    /**
     *  Инкремент
     *
     */
    increment: {
      type: Number,
      default: 1,
    },
    /**
     *  Инлайн
     *
     */
    inline: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      total: null,
    }
  },

  watch: {
    total(value) {
      this.$emit("input", value)
    },
  },

  computed: {},
}
</script>
<style lang="scss">
.el-rating {
  & .custom-text {
    font-family: $font-medium;
    font-size: $size-xxxs;
    line-height: $line-height-xxs;
    color: $color-gray-darkest;
    margin-top: 0 !important;
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElRating show-rating/>
  </div>
  ```
</docs>
