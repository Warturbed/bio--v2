<template>
  <button :class="changeClass" @click="toggleActive(item_data.type)"></button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProdItem',
  props: {
    item_data: Object
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ..mapGetters([
      'STORAGE',
      'PRODUCTION'
    ]),
    // В зависимости от наличия в хранилище и производстве нужного типа элементов присваиваем классы по id
    changeClass() {
      let type = this.item_data.type
      let id = this.item_data.id
      if (this.STORAGE[type] + this.PRODUCTION[type] >= id && !this.isActive) {
        return 'choose'
      } else if (this.STORAGE[type] + this.PRODUCTION[type] >= id && this.isActive) {
        return 'active'
      } else {
        return 'disabled'
      }
    },
  },
  methods: {
    ..mapActions([
      'SEND_TO_PROD',
      'BACK_TO_STORAGE'
    ]),
    toggleActive(type) {
      if (!this.isActive) {
        this.isActive = !this.isActive
        this.SEND_TO_PROD(type)
      } else {
        this.isActive = !this.isActive
        this.BACK_TO_STORAGE(type)
      }
    }
  },
  // При нажатии кнопки произвести робота в parent comp в сторе меняется весь объект PRODUCTION
  // Отслеживаем это изменение и убираем класс active у элементов
  watch: {
    PRODUCTION: function() {
      this.isActive = false
    },
  }
}
</script>

<style lang="scss">
.production-item {
	width: 48px;
	height: 48px;
	background-size: cover;
	cursor: pointer;
	&__bio.disabled {
		background: url(./img/bio-sprites.png) -0 -0;
		pointer-events: none;
	}
	&__bio.choose {
		background: url(./img/bio-sprites.png) -48px -0;
	}
	&__bio.active {
		background: url(./img/bio-sprites.png) -96px -0;
	}
	&__cpu.disabled {
		background: url(./img/cpu-sprites.png) -0 -0;
		pointer-events: none;
	}
	&__cpu.choose {
		background: url(./img/cpu-sprites.png) -48px -0;
		background-position: center;
	}
	&__cpu.active {
		background: url(./img/cpu-sprites.png) -96px -0;
	}
	&__soul.disabled {
		background: url(./img/soul_sprites.png);
		pointer-events: none;
		background-position: center;
	}
	&__soul.choose {
		background: url(./img/soul_sprites.png);
	}
	&__soul.active {
		background: url(./img/soul_sprites.png);
		background-position: 100% 0;
	}
}
</style>