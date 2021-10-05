<template>
  <svg @click="toggleActive(item_data.type)" :class="changeClass">
    <rect x="1" y="1" width="48" height="48" rx="3" fill="#333940"/>
    <use xlink:href="@/img/sprites.svg#bio"  v-if="item_data.type === 'bio'"></use>
    <use xlink:href="@/img/sprites.svg#cpu" v-else-if="item_data.type === 'cpu'"></use>
    <use xlink:href="@/img/sprites.svg#soul" v-else></use>
  </svg>
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
    ...mapGetters([
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
    ...mapActions([
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
  border-radius: 4px;
	cursor: pointer;
	&__bio.disabled {
    fill: #4C5865;
		pointer-events: none;
	}
	&__bio.choose {
		fill: white;
	}
	&__bio.active {
		fill: #FF7F22;
    rect {
      width: 46px;
      height: 46px;
      stroke: #FF7F22;
      stroke-width: 2;
    }
	}
	&__cpu.disabled {
		fill: #4C5865;
		pointer-events: none;
	}
	&__cpu.choose {
		fill: white;
		background-position: center;
	}
	&__cpu.active {
    fill: #FF7F22;
    rect {
      width: 46px;
      height: 46px;
      stroke: #FF7F22;
      stroke-width: 2;
    }
	}
	&__soul.disabled {
		fill: #4C5865;
		pointer-events: none;
		background-position: center;
	}
	&__soul.choose {
		fill: white;
	}
	&__soul.active {
		fill: #FF7F22;
    rect {
      width: 46px;
      height: 46px;
      stroke: #FF7F22;
      stroke-width: 2;
    }
	}
}
</style>