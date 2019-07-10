<template>
  <div>
    <ElTitle size="xxl" ellipsis
      >Минск — Мозыр Оформление заказа Минск — Мозыр Оформление заказа Минск — Мозыр Оформление
      зака</ElTitle
    >

    <ElSeparator indentTop="s" indentBottom="s" />

    <ElTitle size="xxs" color="danger">
      <ElSvgIcon slot="icon-prepend" name="checkbox-arrow"></ElSvgIcon>
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
    <ElButton loading>Кнопка M</ElButton>
    <ElButton size="s">Кнопка S</ElButton>
    <ElButton size="xs">Кнопка XS</ElButton>
    <ElButton size="l" radius="none">Кнопка</ElButton>
    <ElButton size="l" fullWidth>Кнопка</ElButton>

    <ElTitle size="m">Кнопки main-outline</ElTitle>

    <ElButton size="l" disabled variation="main-outline">Кнопка L</ElButton>
    <ElButton variation="main-outline">Кнопка M</ElButton>
    <ElButton size="s" variation="main-outline">Кнопка S</ElButton>
    <ElButton size="xs" variation="main-outline">Кнопка XS</ElButton>

    <ElButton size="s" variation="gray-light-small">Применить</ElButton>

    <div
      style="width: 200px;height: 60px;background-color: #333;display: flex;align-items: center;justify-content: center;"
    >
      <ElButton variation="white" size="s">Войти</ElButton>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="display: flex;">
      <ElFieldCheckbox
        main-text="Чекбокс 1"
        title="Заголовок чекбокса 1"
        name="checkbox1"
        help-text="Вспомогательный текст чекбокса."
        :errors="['Ошибка чекбокса 1', 'Ошибка чекбокса 2']"
      >
        <ElTitle tag-name="div" color="gray" :ellipsis="false" line-height="s" size="xs"
          >Чекбокс и ссылочка <a href="#">keke</a></ElTitle
        >
      </ElFieldCheckbox>

      <ElFieldCheckbox
        main-text="Чекбокс 2"
        title="Заголовок чекбокса 2"
        name="checkbox2"
        help-text="Вспомогательный текст чекбокса."
        :errors="['Ошибка чекбокса 3', 'Ошибка чекбокса 4']"
      >
        <ElTitle tag-name="div" color="gray" :ellipsis="false" line-height="s" size="xs"
          >Чекбокс и ссылочка <a href="#">keke</a></ElTitle
        >
      </ElFieldCheckbox>

      <ElFieldCheckbox
        main-text="Задизейбленный чекбокс"
        disabled
        title="Заголовок чекбокса 3"
        name="checkbox3"
      >
      </ElFieldCheckbox>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="display: flex;">
      <ElFieldCheckbox
        type="radio"
        :value="checkedRadio"
        main-text="Радио 1"
        title="Заголовок Радио 1"
        name="radio"
        help-text="Вспомогательный текст radio."
        :errors="['Ошибка radio 1', 'Ошибка radio 2']"
      >
      </ElFieldCheckbox>

      <ElFieldCheckbox
        type="radio"
        main-text="Радио 2"
        title="Заголовок радио 2"
        name="radio"
        help-text="Вспомогательный текст radio."
        :errors="['Ошибка radio 3', 'Ошибка radio 4']"
      >
      </ElFieldCheckbox>

      <ElFieldCheckbox
        type="radio"
        disabled
        main-text="Задизейбленный радио 3"
        title="Заголовок радио 3"
        name="radio"
        help-text="Вспомогательный текст radio."
        :errors="['Ошибка radio 3', 'Ошибка radio 4']"
      >
      </ElFieldCheckbox>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="margin-left: 30px; display: flex;">
      <div style="width: 30%; margin-left: 5px;margin-right: 5px;">
        <ElFieldText
          name="login1"
          title="Лейбл"
          help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
          v-model="inputText1"
        >
        </ElFieldText>
      </div>

      <div style="width: 30%; margin-left: 5px;margin-right: 5px;">
        <ElFieldText
          name="login2"
          title="Лейбл"
          help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
          :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
          v-model="inputText2"
        >
          <ElSvgIcon slot="append" name="direction"></ElSvgIcon>
        </ElFieldText>
      </div>

      <div style="width: 30%; margin-left: 5px;margin-right: 5px;">
        <ElFieldText name="login3" title="Лейбл" disabled="" v-model="inputText3"> </ElFieldText>
      </div>
    </div>

    <div style="display: flex; background-color: #333; padding: 15px;">
      <div style="width: 33%; border-right: 1px solid gray;">
        <ElFieldText name="login4" title="Лейбл1" v-model="inputText4" borderless radiusless>
        </ElFieldText>
      </div>
      <div style="width: 33%; border-right: 1px solid gray;">
        <ElFieldText name="login5" title="Лейбл" v-model="inputText5" borderless radiusless>
        </ElFieldText>
      </div>
      <div style="width: 33%;">
        <ElFieldText name="login6" title="Лейбл" v-model="inputText6" borderless radiusless>
        </ElFieldText>
      </div>
    </div>

    <div style="width: 700px; padding: 15px;">
      <ElFieldText
        name="Textarea"
        title="Лейбл7"
        type="textarea"
        help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
        v-model="inputText7"
      >
      </ElFieldText>

      <ElFieldText name="datePicker" title="Лейбл8" type="date" v-model="inputText8"> </ElFieldText>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="width: 700px; padding: 15px;">
      <ElFieldPassword
        name="password123"
        title="passwordTitle"
        :errors="['Имя пользователя и пароль не совпадают', 'Поле обязательно для заполнения.']"
        help-text="Используйте электронный адрес, указанный при регистрации аккаунта."
        v-model="inputPassword"
      >
      </ElFieldPassword>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <div style="padding: 15px;"><ElLink>Ссылочка</ElLink></div>
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElTitle from "../elements/ElTitle"
import ElSeparator from "../elements/ElSeparator"
import ElButton from "../elements/ElButton"
import ElLink from "../elements/ElLink"
import ElFieldCheckbox from "../elements/ElField/ElFieldCheckbox"
import ElFieldText from "../elements/ElField/ElFieldText"
import ElFieldPassword from "../elements/ElField/ElFieldPassword"

export default {
  name: "Index",
  components: {
    ElTitle,
    ElSvgIcon,
    ElSeparator,
    ElButton,
    ElLink,
    ElFieldCheckbox,
    ElFieldText,
    ElFieldPassword,
  },
  props: {},
  data() {
    return {
      checkedRadio: true,
      inputText1: null,
      inputText2: null,
      inputText3: null,
      inputText4: null,
      inputText5: null,
      inputText6: null,
      inputText7: null,
      inputText8: null,
      inputPassword: null,
    }
  },
  methods: {},
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
