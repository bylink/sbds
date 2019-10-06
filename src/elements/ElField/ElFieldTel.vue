<template>
  <IMaskComponent
    v-model="phoneNumber"
    :mask="mask"
    type="tel"
    ref="input"
    :overwrite="false"
    :dispatch="dispatch"
    @accept="onAccept"
    @complete="onComplete"
    @focus="onFocus"
  />
</template>

<script>
import { IMaskComponent } from "vue-imask"

export default {
  name: "ElFieldTel",
  components: { IMaskComponent },
  props: {
    /**
     *  Значение
     *
     */
    value: {
      default: null,
    },
  },

  data() {
    return {
      phoneNumber: this.value,
      mask: [
        {
          mask: "+000 {00} 000-00-00",
          startsWith: "375",
          lazy: false,
          country: "Belarus",
        },
        {
          mask: "+0 000 000-00-00",
          startsWith: "7",
          lazy: false,
          country: "Russia",
        },
        {
          mask: "+00-00-00000",
          startsWith: "48",
          lazy: false,
          country: "Poland",
        },
        {
          mask: "+000 000-000-000",
          startsWith: "420",
          lazy: false,
          country: "Czech",
        },
        {
          mask: "+000 000 00000",
          startsWith: "373",
          lazy: false,
          country: "Moldova",
        },
        {
          mask: "+00 000 000-00-00",
          startsWith: "49",
          lazy: false,
          country: "Germany",
        },
        {
          mask: "+000 00 000-00-00",
          startsWith: "370",
          lazy: false,
          country: "Lithuania",
        },
        {
          mask: "+000 00 00-00-00",
          startsWith: "371",
          lazy: false,
          country: "Latvia",
        },
        {
          mask: "+000 00 000-00-00",
          startsWith: "380",
          lazy: false,
          country: "Ukraine",
        },
        {
          mask: "+000 00-00000",
          startsWith: "372",
          lazy: false,
          country: "Estonia",
        },
        {
          mask: "+0 000 000 00 00",
          startsWith: "1",
          lazy: false,
          country: "USA, Canada",
        },
        {
          mask: "+0000000000000",
          startsWith: "",
          country: "unknown",
        },
      ],
      dispatch: (appended, dynamicMasked) => {
        let number = (dynamicMasked.value + appended).replace(/\D/g, "")
        return dynamicMasked.compiledMasks.find(m => number.indexOf(m.startsWith) === 0)
      },
    }
  },

  methods: {
    onAccept(value) {
      this.$emit("input", value.replace(/\D/gm, ""))
    },
    onComplete() {
      this.$emit("complete")
    },
    onFocus() {
      this.$emit("focus")
    },
  },
}
</script>
