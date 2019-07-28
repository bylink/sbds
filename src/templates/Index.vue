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

    <div style="display: flex; align-items: center;">
      <ElButton size="s" variation="gray-light-small">Применить</ElButton
      ><ElAvatar size="xs" rounded></ElAvatar>
    </div>

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

    <div style="padding: 15px; background-color: #f2f2f2;">
      <ElLink href="https://www.google.ru" border="solid" border-color="main">Ссылочка</ElLink>
      <ElLink
        href="https://www.google.ru"
        border="dashed"
        variation="gray-darkest"
        border-color="main"
        >Ссылочка</ElLink
      >
      <ElLink variation="white" border="dashed" border-color="white">Ссылочка</ElLink>
      <ElLink variation="main" border="dashed" border-color="danger">
        <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
        Ссылочка
      </ElLink>
      <ElLink size="xxxs" disabled>
        <ElSvgIcon size="xxs" slot="icon-prepend" name="map"></ElSvgIcon>
        Ссылочка
      </ElLink>
    </div>

    <ElSeparator indentTop="l" indentBottom="l" />

    <ElButton @click.prevent="$modal.show('testModal')">Modal</ElButton>
    <ElModal name="testModal">
      <template slot="title"
        >Заголовок1</template
      >
      Контент1
      <template slot="footer"
        >Футер</template
      >
    </ElModal>
    <ElButton @click.prevent="$modal.show('testFormModal')">FormModal</ElButton>
    <ElFormModal
      name="testFormModal"
      submit-text="Войти или зарегистрироваться"
      linkText="Забыли пароль?"
    >
      <template slot="title"
        >Заголовок2</template
      >
      Контент2
    </ElFormModal>

    <ElSection background="gray" gutter-top="m" gutter-bottom="xl">
      <ElTitle> ElSection </ElTitle>
    </ElSection>

    <div style="width: 870px;margin: 0 auto;">
      <ElWysiwyg>
        <p>
          Наша основная работа — это экспресс-доставка пассажиров из Новополоцка/Полоцка в Минск и
          обратно! Это мы делаем каждый день на комфортабельных микроавтобусах вместимостью до 21
          пассажирских мест. Пассажирские перевозки Минск-Полоцк и Минск-Новополоцк под брендом
          «Полоцкий Экспресс» представляет собой качественный сервис по неизменно низкой стоимости
          проезда.
        </p>
        <p>
          Отправление каждый час и четко соблюдаемый график движения позволяет пассажирам комфортно
          и быстро добираться из Минска в Полоцк/Новополоцк и обратно. Предварительное бронирование
          мест в наших автобусах гарантирует пассажирам отсутствие проблем в день выезда.
        </p>
        <h3>Заголовок третьего уровня</h3>
        <p>
          Отправление каждый час и четко соблюдаемый график движения позволяет пассажирам комфортно
          и быстро добираться из Минска в Полоцк/Новополоцк и обратно. Предварительное бронирование
          мест в наших автобусах гарантирует пассажирам отсутствие проблем в день выезда.
        </p>
        <img src="https://gomel-minsk.by/assets/index/img/index/content-img.jpg" alt="" />
        <p>
          Если ваши коммуникативные навыки хорошо развиты и вы любите людей и общение с ними,
          приглашаем вас на работу в диспетчерскую службу polotsk-minsk.by. Если ваши
          коммуникативные навыки хорошо развиты и вы любите людей и общение с ними, приглашаем вас
          на работу в диспетчерскую службу polotsk-minsk.by.
        </p>
        <h4>Заголовок четвертого уровня</h4>
        <ul>
          <li>Четкая‚ грамотная речь;</li>
          <li>
            Ответственность, исполнительность, клиентоориентированность, серьезное отношение к
            работе, высокая обучаемость;
          </li>
          <li>Умение работать в коллективе;</li>
          <li>Стрессоустойчивость;</li>
        </ul>
        <p>Знание ПК на уровне пользователя.</p>
        <p><b> Нумерованный список </b></p>
        <ol>
          <li>Наша работа только в офисе (то есть работа в удаленном доступе не возможна).</li>
          <li>
            Если у Вас есть основная работа или вы планируете выходить на основную работу с графиком
            5/2, то сотрудничество наше будет невозможно.
          </li>
          <li>Вы должны быть готовы выходить в ночные смены.</li>
        </ol>
        <h5>Заголовок заглавными</h5>
        <p>
          Отправление каждый час и четко соблюдаемый график движения позволяет пассажирам комфортно
          и быстро добираться из Минска в Полоцк/Новополоцк и обратно. Предварительное бронирование
          мест в наших автобусах гарантирует пассажирам отсутствие проблем в день выезда.
        </p>
        <blockquote>
          Мы хотим расти и развиваться, и Ваша помощь в честной и справедливой оценке нашей работы
          будет неоценима!
        </blockquote>
        <p>
          Места сбора пассажиров по городам с фотографиями остановок, точное расписание выездов,
          фотогалерея наших автобусов, новости и прочее — максимально доступно и понятно описано на
          нашем сайте!
        </p>
      </ElWysiwyg>
    </div>
  </div>
</template>

<script>
import ElSvgIcon from "../elements/ElSvgIcon"
import ElTitle from "../elements/ElTitle"
import ElSeparator from "../elements/ElSeparator"
import ElButton from "../elements/ElButton"
import ElLink from "../elements/ElLink"
import ElModal from "../elements/ElModal"
import ElFormModal from "../patterns/ElFormModal"
import ElFieldCheckbox from "../elements/ElField/ElFieldCheckbox"
import ElFieldText from "../elements/ElField/ElFieldText"
import ElFieldPassword from "../elements/ElField/ElFieldPassword"
import ElSection from "../elements/ElSection"
import ElCard from "../elements/ElCard"
import ElAvatar from "../elements/ElAvatar/ElAvatar"
import ElWysiwyg from "../elements/ElWysiwyg"

export default {
  name: "Index",
  components: {
    ElTitle,
    ElSvgIcon,
    ElSeparator,
    ElButton,
    ElLink,
    ElModal,
    ElFormModal,
    ElFieldCheckbox,
    ElFieldText,
    ElFieldPassword,
    ElSection,
    ElCard,
    ElAvatar,
    ElWysiwyg,
  },
  props: {},
  data() {
    return {
      checkedRadio: true,
      inputText1: "kekek",
      inputText2: null,
      inputText3: 123,
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
@import "../../node_modules/reset-css/sass/reset";
</style>
