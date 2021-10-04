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
</style>