<template>
  <div>
    <ElTitle size="xxl" ellipsis
      >Минск — Мозыр Оформление заказа Минск — Мозыр Оформление заказа Минск — Мозыр Оформление
      зака</ElTitle
    >

    <ElSeparator indentTop="s" indentBottom="s" />

    <ElTitle size="xxs" color="danger">
      <ElSvgIcon slot="icon-prepend" name="checkbox"></ElSvgIcon>
      Промокод применен!
    </ElTitle>

    <ElSeparator indentTop="xxl" indentBottom="xxl" />

    <ElTitle size="m" color="success" uppercase>
      <ElSvgIcon slot="icon-append" name="clock"></ElSvgIcon>
      Промокод применен!
    </ElTitle>

    <ElSeparator indentTop="l" indentBottom="l" />

    <ElTitle size="m">Кнопки main</ElTitle>

    <ElButton size="l" disabled>Кнопка L</ElButton>
    <ElButton>Кнопка M</ElButton>
    <ElButton size="s">Кнопка S</ElButton>
    <ElButton size="l" radius="none">Кнопка</ElButton>
    <ElButton size="l" fullWidth>Кнопка</ElButton>

    <ElTitle size="m">Кнопки main-outline</ElTitle>

    <ElButton size="l" disabled variation="main-outline">Кнопка L</ElButton>
    <ElButton variation="main-outline">Кнопка M</ElButton>
    <ElButton size="s" variation="main-outline">Кнопка S</ElButton>

    <ElButton size="s" variation="gray-light-small">Применить</ElButton>

    <div
      style="width: 200px;height: 60px; background-color: #333; display: flex; align-items: center; justify-content: center;"
    >
      <ElButton variation="white" size="s">Войти</ElButton>
    </div>
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElTitle from "../elements/ElTitle"
import ElSeparator from "../elements/ElSeparator"
import ElButton from "../elements/ElButton"

export default {
  name: "Index",
  components: {
    ElTitle,
    ElSvgIcon,
    ElSeparator,
    ElButton,
  },
  props: {},
}
</script>

<style lang="scss" scoped></style>
