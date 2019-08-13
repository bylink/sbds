<template>
  <div class="el-tooltip-target" v-tooltip="{ content, placement, classes: tooltipClasses }">
    <slot></slot>
  </div>
</template>

<script>
import { VTooltip } from "v-tooltip"
import ElButton from "./ElButton"
import ElSvgIcon from "./ElSvgIcon"
export default {
  name: "ElTooltip",
  components: { ElSvgIcon, ElButton },
  status: "ready",
  release: "1.0.0",
  props: {
    /**
     *  Текст подсказки:
     */
    content: {
      type: String,
      required: true,
    },
    /**
     *  Расположение:
     */
    placement: {
      type: String,
      default: "top",
    },
    /**
     *  Цвет:
     */
    color: {
      type: String,
      default: "default",
    },
    /**
     *  Максимальная ширина
     */
    maxWidth: {
      type: String,
      default: "m",
    },
    /**
     *  Отключить стрелку
     */
    arrowDisabled: {
      type: Boolean,
      default: false,
    },
    /**
     *  Размеры:
     *  `s, m, l`
     */
    size: {
      type: String,
      default: "xxs",
    },
  },
  directives: {
    tooltip: VTooltip,
  },
  computed: {
    tooltipClasses() {
      return [
        "el-tooltip",
        `el-tooltip--color-${this.color}`,
        `el-tooltip--width-${this.maxWidth}`,
        `el-tooltip--size-${this.size}`,
        this.arrowDisabled ? "el-tooltip--arrow-disabled" : "",
      ]
    },
  },
}
</script>

<style lang="scss">
.el-tooltip-target {
  display: inline-flex;
}

.el-tooltip {
  $arrow-size: $space-xxs - 1;

  &.tooltip {
    display: block !important;
    z-index: 10005 !important;

    .tooltip-inner {
      padding: 10px 16px 12px 16px;
      background: $color-white;
      color: $color-gray-darken;
      border-radius: $radius-s - 1;
      font-family: $font-regular;
      font-weight: $weight-medium;
      letter-spacing: $spacing-m;
      line-height: $line-height-s;
      font-size: $size-m;
      box-shadow: $shadow-s;
    }

    .tooltip-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: $arrow-size;
      border-color: $color-white;
      z-index: 1;
    }

    &[x-placement^="top"] {
      margin-bottom: 12px;

      .tooltip-arrow {
        border-width: $arrow-size $arrow-size 0 $arrow-size;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -$arrow-size;
        left: calc(50% - #{$arrow-size});
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="bottom"] {
      margin-top: 12px;

      .tooltip-arrow {
        border-width: 0 $arrow-size $arrow-size $arrow-size;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -$arrow-size;
        left: calc(50% - #{$arrow-size});
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &[x-placement^="right"] {
      margin-left: 12px;

      .tooltip-arrow {
        border-width: $arrow-size $arrow-size $arrow-size 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -$arrow-size;
        top: calc(50% - #{$arrow-size});
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[x-placement^="left"] {
      margin-right: 12px;

      .tooltip-arrow {
        border-width: $arrow-size 0 $arrow-size $arrow-size;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -$arrow-size;
        top: calc(50% - #{$arrow-size});
        margin-left: 0;
        margin-right: 0;
      }
    }

    &[aria-hidden="true"] {
      visibility: hidden;
      opacity: 0;
      transition: opacity $duration-quickly, visibility $duration-quickly;
    }

    &[aria-hidden="false"] {
      visibility: visible;
      opacity: 1;
      transition: opacity $duration-quickly;
    }
  }

  &--width-s {
    &.tooltip {
      max-width: $panel-s;
    }
  }

  &--width-m {
    &.tooltip {
      max-width: $panel-m;
    }
  }

  &--width-l {
    &.tooltip {
      max-width: $panel-l;
    }
  }

  &--size-s {
    &.tooltip {
      .tooltip-inner {
        font-size: $size-s;
      }
    }
  }

  &--size-xxs {
    &.tooltip {
      .tooltip-inner {
        font-size: $size-xxs;
        line-height: $line-height-xs;
      }
    }
  }

  &--arrow-disabled {
    &.tooltip {
      max-width: $panel-m;

      .tooltip-arrow {
        display: none;
      }
    }
  }
}
</style>

<docs>
  ```jsx
  <div>
    <ElTooltip content="А если текста реально очень очень много, например как сейчас?">
      <ElButton>Тултип</ElButton>
    </ElTooltip>
    <br>
    <br>
    <ElTooltip size="s" content="А если текста реально очень очень много, например как сейчас?">
      <ElSvgIcon name="question"/>
    </ElTooltip>
    <br>
    <br>
    <ElTooltip arrow-disabled color="white" placement="right" max-width="l" content="Вывод экспресс платежей облагается комиссией в 1%. Это условие наших партнеров, и мы на этом не зарабатываем.Если вы не хотите платить комиссию – не снимайте кредитные средства со своего счета, пока они не перейдут в обычные средства.">
      Тултип
    </ElTooltip>
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
