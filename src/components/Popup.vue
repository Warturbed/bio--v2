<template>
    <div class="popup">
        <div class="popup__background"></div>
        <div class="popup__content">
          <div class="popup__coin" v-show="!isRobotPopupVisible"></div>
          <button class="popup__close" @click="closePopup"></button>
          <div class="popup__container"> {{isRobotPopupVisible}}
            <p class="popup__title" v-if="!isRobotPopupVisible">Количество монет ограничено</p>
            <p class="popup__title" v-else>Биоробот произведён</p>
            <p class="popup__text" v-if="!isRobotPopupVisible">Вы не можете нацыганить более 100 монет biorobo</p>
            <p class="popup__text" v-else>Поздравляем! <br>Вы произвели биоробота</p>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Popup',
  props: {
    isRobotPopupVisible: Boolean
  },
  methods: {
    closePopup() {
        this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
</style>