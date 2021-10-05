<template>
    <div class="popup">
        <div class="popup__background"></div>
        <div class="popup__content">
          <div class="popup__coin" v-show="!isRobotPopupVisible"></div>
          <button class="popup__close" @click="closePopup"></button>
          <div class="popup__container">
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
.popup {
	&__background {
		z-index: 999;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #1a1a1a;
		opacity: 0.67;
	}
	&__content {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background: var(--main-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		width: 496px;
		height: 240px;
		z-index: 9999;
		@media (max-width: 767px) {
			width: 236px;
			height: 210px;
			text-align: center;
		}
	}
	&__title {
		font: 600 32px/40px var(--font-family);
		@media (max-width: 767px) {
			font: 600 18px/24px var(--font-family);
		}
		color: #212529;
		max-width: 320px;
	}
	&__text {
		display: inline-block;
		font: 600 20px/32px var(--font-family);
		@media (max-width: 767px) {
			font: 600 14px/20px var(--font-family);
			margin-top: 10px;
		}
		color: #4c5865;
		max-width: 320px;
		margin-top: 23px;
	}
	&__img {
		position: absolute;
		top: 10px;
		width: 43px;
		height: 52px;
		background: url(../img/big-coin.png);
		background-size: cover;
		background-position: center;
	}
	&__coin {
		position: absolute;
		@media (max-width: 767px) {
			position: static;
			margin-bottom: 5px;
		}
		top: 50px;
		left: 25px;
		width: 43px;
		height: 52px;
		background: url(../img/big-coin.png);
		background-size: cover;
		background-position: center;
	}
	&__close {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 32px;
		height: 32px;
		background: url(../img/close-popup.png);
		background-size: 45%;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
	}
}
</style>