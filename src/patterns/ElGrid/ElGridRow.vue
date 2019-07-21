<template>
  <div class="el-grid-row" :class="classes" :style="styles"><slot></slot></div>
</template>

<script>
import ElGridCol from "./ElGridCol"

export default {
  name: "ElGridRow",
  components: { ElGridCol },

  props: {
    /**
     *  Расстояние между колонками по горизонтали
     */
    gutterX: {
      type: Number,
    },

    /**
     *  Расстояние между колонками по вертикали
     */
    gutterY: {
      type: Number,
    },

    /**
     *  Выравнивание по горизонтали
     */
    justify: {
      type: String,
      default: "left",
      validator: function(value) {
        return ["left", "right", "center", "around", "between"].indexOf(value) !== -1
      },
    },

    /**
     *  Выравнивание по вертикали
     */
    align: {
      type: String,
      default: "top",
      validator: function(value) {
        return ["top", "middle", "bottom", "stretch"].indexOf(value) !== -1
      },
    },

    /**
     *  Автоматически тянущиеся колонки
     */
    stretch: {
      type: Boolean,
      default: false,
    },

    /**
     *  Перенос колонок
     */
    wrap: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {}
  },

  computed: {
    classes() {
      return {
        [`el-grid-row--justify-${this.justify}`]: this.justify,
        [`el-grid-row--align-${this.align}`]: this.align,
        ["el-grid-row--stretch"]: this.stretch,
      }
    },

    styles() {
      let result = {}

      if (this.gutterX !== 0) {
        result["margin-left"] = `${-this.gutterX / 2}px`
        result["margin-right"] = `${-this.gutterX / 2}px`
      }

      if (this.gutterY !== 0) {
        result["margin-top"] = `${-this.gutterY / 2}px`
        result["margin-bottom"] = `${-this.gutterY / 2}px`
      }

      if (this.wrap) {
        result["flex-wrap"] = "wrap"
      }

      return result
    },
  },
  watch: {
    gutterX() {
      this.updateGutter()
    },
    gutterY() {
      this.updateGutter()
    },
  },
  methods: {
    updateGutter() {
      this.$children.forEach(children => {
        let componentName = children.$options.name
        if (componentName === "ElGridCol") {
          children.gutterX = this.gutterX
          children.gutterY = this.gutterY
        }
      })
    },
  },
}
</script>

<style lang="scss">
.el-grid-row {
  $block-name: &;

  display: flex;
  flex-direction: row;

  @each $key,
    $value
      in (
        "left": "flex-start",
        "right": "flex-end",
        "center": "center",
        "around": "space-around",
        "between": "space-between"
      )
  {
    &.el-grid-row--justify-#{$key} {
      justify-content: #{$value};
    }
  }
  @each $key,
    $value in ("top": "flex-start", "middle": "center", "bottom": "flex-end", "stretch": "stretch")
  {
    &.el-grid-row--align-#{$key} {
      align-items: #{$value};
    }
  }

  &--stretch {
    > .el-grid-col {
      flex: 1;
    }
  }
}
</style>

<docs>
    ```jsx
    <div>
        <el-grid-row :gutter-x="30" :gutter-y="10">
            <el-grid-col :span="12" :span-xl="1">
                <div style="background: #e74c3c">1</div>
            </el-grid-col>
            <el-grid-col :span="12" :span-xl="2">
                <div style="background: #1abc9c">2</div>
            </el-grid-col>
            <el-grid-col :span="12" :span-xl="3">
                <div style="background: #9b59b6">3</div>
            </el-grid-col>
            <el-grid-col :span="12" :span-xl="6">
                <div style="background: #f1c40f">6</div>
            </el-grid-col>
        </el-grid-row>

        <br>

        <el-grid-row stretch :gutter-x="30">
            <el-grid-col>
                <div style="background: #e74c3c">Автоматическая ширина на всё свободное простанство</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: #f1c40f">Автоматическая ширина на всё свободное простанство</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: cornflowerblue">Автоматическая ширина на всё свободное простанство</div>
            </el-grid-col>
        </el-grid-row>

        <br>

        <el-grid-row justify="center" align="middle" :gutter-x="30">
            <el-grid-col>
                <div style="background: #e74c3c">Автоматическая ширина</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: #f1c40f">Автоматическая ширина</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: cornflowerblue">Автоматическая ширина</div>
            </el-grid-col>
        </el-grid-row>

        <br>

        <el-grid-row justify="right" align="middle" :gutter-x="30">
            <el-grid-col>
                <div style="background: #e74c3c">Автоматическая ширина</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: #f1c40f">Автоматическая ширина</div>
            </el-grid-col>
            <el-grid-col>
                <div style="background: cornflowerblue">Автоматическая ширина</div>
            </el-grid-col>
        </el-grid-row>

    </div>
    ```
</docs>
