<template>
  <div>
    <star-rating
      v-model="total"
      class="el-rating"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :show-rating="showRating"
      :star-size="starSize"
      :read-only="readOnly"
      :increment="increment"
      :inline="inline"
      text-class="custom-text"
    ></star-rating>
    <div class="el-field-text__footer" v-if="errorText">
      <ElTitle
        tag-name="div"
        :ellipsis="false"
        color="danger"
        line-height="xxxs"
        size="xxxs"
        v-if="errorText"
      >
        {{ errorText }}
      </ElTitle>
    </div>
  </div>
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
    value: {
      type: [Number, String],
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
    /**
     *  Ошибки
     *
     */
    errors: {
      type: [Array, Object],
      default: null,
    },
  },

  data() {
    return {
      total: this.value,
    }
  },

  watch: {
    total(value) {
      this.$emit("input", value)
    },
  },
  computed: {
    errorText() {
      if (this.errors == null || this.errors.length === 0) return null
      if (typeof this.errors === "object") return Object.values(this.errors)[0]
      return this.errors.join(", ")
    },
  },
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
  let test = 3
  <div>
    <ElRating
      v-model="test"
      show-rating
      :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
    />
  </div>
  ```
</docs>
