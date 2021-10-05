<template>
  <div class="container">
      <div class="wrapper grid">
        <header class="header grid">
          <img class="header__logo" src="@/img/logo.png" alt="">
          <button class="button header__button"
            :class=" isEnoughToProduce ? 'production__button--active' : 'header__button--disabled' "
            @click="produceRobot">Произвести биоробота
          </button>
        </header>
        <section class="banner grid">
          <div class="banner__content">
            <h1 class="banner__title">Фабрика по производству биороботов</h1>
            <span class="banner__text">класса «монитор-кресло»</span>
          </div>
          <div class="banner__img"></div>
        </section>
        <section class="wallet"> 
          <h2 class="title">Кошелёк криптовалют</h2>
          <ul class="wallet__list"> 
            <li class="wallet__coin"
              v-for="coin, index in [...Array(COINS).keys()]"
              :key="index"
              :style=" {zIndex: 100-index}"
            >
            </li>
          </ul>
          <span class="wallet__counter">{{COINS}}</span>
          <span class="wallet__text">biorobo {{declOfNum(COINS, ['монета', 'монеты', 'монет'])}}</span>
          <div class="wallet__container">
            <button class="wallet__multiply"
              @click="addCoins"
              >Нацыганить
            </button>
            <input type="checkbox" id="add" v-model="addFiveCoins">
            <label for="add">Цыганить по 5 монет</label>
          </div>
        </section>
        <section class="market">
          <h2 class="title">Рынок комплектующих</h2>
          <ul class="product-list">
            <li class="product-list__item">
              <div class="product-list__img product-list__img--bio"></div>
              <h3 class="product-list__title">Биомеханизм</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">7 монет</span>
              </span>
              <button class="button market__button"
                :class=" COINS < 7 ? 'market__button--disabled' : '' "
                @click="buyItem(7)"
                >Установить
              </button>
            </li>
            <li class="product-list__item">
              <div class="product-list__img product-list__img--cpu"></div>
              <h3 class="product-list__title">Процессор</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">5 монет</span>
              </span>
              <button class="button market__button"
                :class=" COINS < 5 ? 'market__button--disabled' : '' "
                @click="buyItem(5)"
                >Установить
              </button>
            </li>
            <li class="product-list__item">
              <div class="product-list__img product-list__img--soul"></div>
              <h3 class="product-list__title">Душа</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">25 монет</span>
              </span>
              <button class="button market__button"
                :class=" COINS < 25 ? 'market__button--disabled' : '' "
                @click="buyItem(25)"
                >Установить
              </button>
            </li>
          </ul>
        </section>
        <section class="storage"> 
          <h2 class="title">Склад</h2>
          <ul class="product-list">
            <li class="product-list__item">
              <h3 class="product-list__title">Биомеханизм</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">5 монет</span>
              </span>
              <span class="product-list__counter">{{STORAGE.bio}} шт</span>
              <button class="button storage__button"
                :class=" STORAGE.bio > 0 ? '' : 'storage__button--disabled' "
                @click="sellItem(5)"
                >Продать
              </button>
            </li>
            <li class="product-list__item">
              <h3 class="product-list__title">Процессор</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">3 монет</span>
              </span>
              <span class="product-list__counter">{{STORAGE.cpu}} шт</span>
              <button class="button storage__button"
                :class=" STORAGE.cpu > 0 ? '' : 'storage__button--disabled' "
                @click="sellItem(3)"
                >Продать
              </button>
            </li>
            <li class="product-list__item">
              <h3 class="product-list__title">Душа</h3>
              <span class="product-list__text">Стоимость:
                <span class="product-list__price">15 монет</span>
              </span>
              <span class="product-list__counter">{{STORAGE.soul}} шт</span>
              <button class="button storage__button"
                @click="sellItem(15)"
                :class=" STORAGE.soul > 0 ? '' : 'storage__button--disabled' "
                >Продать
              </button>
            </li>
          </ul>
        </section>
        <section class="production"> 
          <h2 class="title">Производство</h2>
          <div class="production__container">
            <div class="robot-style production__style">
              <div class="robot-style__container">
                <span class="robot-style__text">Тип биоробота:</span>
                <div class="robot-style__control">
                  <input type="radio" id="frontend" name="type" value="frontend" checked v-model="robotType">
                  <label for="frontend">FrontEnd</label>
                  <input type="radio" id="design" name="type" value="design" v-model="robotType">
                  <label for="design">Design</label>
                </div>
              </div>
              <div class="robot-style__container">
                <span class="robot-style__text">Стабилизатор:</span>
                <div class="robot-style__control">
                  <input type="radio" id="male" name="gender" value="male" checked v-model="robotGender">
                  <label for="male">Male</label>
                  <input type="radio" id="female" value="female" name="gender" v-model="robotGender">
                  <label for="female">Female</label>
                </div>
              </div>
            </div>
            <div class="production__control">
              <ProdItem class="production-item production-item__bio" v-for="item in bioItems" :key="item.id" :item_data="item"/>
              <ProdItem class="production-item production-item__cpu" v-for="item in cpuItems" :key="item.id" :item_data="item"/>
              <ProdItem class="production-item production-item__soul" v-for="item in soulItems" :key="item.id" :item_data="item"/>
            </div>
            <div class="main-robot" :class="mainRobotClass"></div>
            <button class="button production__button"
              :class=" isEnoughToProduce ? 'production__button--active' : 'production__button--disabled' "
              @click="produceRobot">Произвести за 10 монет
            </button>
            <p class="production__info-text"
              v-show=" 4 > PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 > PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма, {{ 4-PRODUCTION.cpu }} процессора, души и денег
            </p>
            <p class="production__info-text"
              v-show=" 4 > PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 > PRODUCTION.soul & COINS > 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма, {{ 4-PRODUCTION.cpu }} процессора и души
            </p>
            <p class="production__info-text"
              v-show=" 4 === PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 > PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.cpu }} процессора и души
            </p>
            <p class="production__info-text"
              v-show=" 4 === PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 > PRODUCTION.soul & 10 >= COINS"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.cpu }} процессора, души и денег
            </p>
            <p class="production__info-text"
              v-show=" 4 > PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 > PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма и души
            </p>
            <p class="production__info-text"
              v-show=" 4 > PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 > PRODUCTION.soul & 10 >= COINS"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма, души и денег
            </p>
            <p class="production__info-text"
              v-show="4 > PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 === PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма и {{ 4-PRODUCTION.cpu }} процессора
            </p>
            <p class="production__info-text"
              v-show="4 > PRODUCTION.bio & 4 > PRODUCTION.cpu & 1 === PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма, {{ 4-PRODUCTION.cpu }} процессора и денег
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 === PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает денег
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 === PRODUCTION.soul & COINS >= 10"
              >Можно произвести биоробота
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 === PRODUCTION.cpu & 0 === PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает души и денег
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 === PRODUCTION.cpu & 0 === PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает души
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 != PRODUCTION.cpu & 1 === PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает{{ 4-PRODUCTION.bio }}  процессора и денег
            </p>
            <p class="production__info-text"
              v-show="4 === PRODUCTION.bio & 4 != PRODUCTION.cpu & 1 === PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.cpu }} процессора
            </p>
            <p class="production__info-text" 
              v-show=" 4 != PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 === PRODUCTION.soul & 10 > COINS"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма и денег
            </p>
            <p class="production__info-text" 
              v-show="4 != PRODUCTION.bio & 4 === PRODUCTION.cpu & 1 === PRODUCTION.soul & COINS >= 10"
              >Для производства биоробота не хватает {{ 4-PRODUCTION.bio }} биомеханизма
            </p>
          </div>
        </section>
      </div>
      <Popup
        v-show="isPopupVisible"
        :isRobotPopupVisible="isRobotPopupVisible"
        @closePopup="closePopup"
      />
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProdItem from '@/components/ProdItem.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'MainWrapper',
  components: {
    ProdItem,
    Popup
  },
  data() {
    return {
      addFiveCoins: false,
      isPopupVisible: false,
      isRobotPopupVisible: false,
      robotType: 'frontend',
      robotGender: 'male',
      bioItems: [
        {id: 1, type: 'bio'},
        {id: 2, type: 'bio'},
        {id: 3, type: 'bio'},
        {id: 4, type: 'bio'}
      ],
      cpuItems: [
        {id: 1, type: 'cpu'},
        {id: 2, type: 'cpu'},
        {id: 3, type: 'cpu'},
        {id: 4, type: 'cpu'}
      ],
      soulItems: [
        {id: 1, type: 'soul'}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'COINS',
      'STORAGE',
      'PRODUCTION'
    ]),
    // Проверяет достаточно ли элементов в хранилище для показа возможности производства робота
    isEnoughInStorage() {
      if (this.STORAGE.bio + this.PRODUCTION.bio >=4 && this.STORAGE.cpu + this.PRODUCTION.cpu >=4 &&
      this.STORAGE.soul + this.PRODUCTION.soul >= 1) {
        return true
      } else {
        return false
      }
    },
    // Проверяет достаточно ли элементов в производстве для показа возможности производства робота
    isEnoughToProduce() {
      if (this.PRODUCTION.bio >=4 && this.PRODUCTION.cpu >=4 &&
      this.PRODUCTION.soul >= 1 && this.COINS >= 10) {
        return true
      } else {
        return false
      }
    },
    // Функция для отображения класса робота на основе двух предыдущих
    mainRobotClass() {
      const status = () => {
        if (this.isEnoughInStorage && !this.isEnoughToProduce) {
        return 'storage'
        } else if (this.isEnoughToProduce) {
          return 'production'
        } else {
          return ''
        }
      } // Класс в зависимости от типа и пола робота
      if (this.robotType === 'frontend' && this.robotGender === 'male') {
        return status() + ' front male'
      } else if (this.robotType === 'frontend' && this.robotGender === 'female') {
        return status() + ' front female'
      } else if (this.robotType === 'design' && this.robotGender === 'male') {
        return status() + ' design male'
      } else {
        return status() + ' design female'
      }
    },
  },
  methods: {
    ...mapActions([
      'ADD_COINS',
      'BUY_ITEM',
      'SELL_ITEM',
      'PRODUCE_ROBOT'
    ]),
    addCoins() {
      if (!this.addFiveCoins && this.COINS + 1 <= 100) {
        this.ADD_COINS(1)
      } else if (this.addFiveCoins && this.COINS + 5 <= 100) {
        this.ADD_COINS(5)
      } else {
        this.isPopupVisible = true
      }
    },
    // Склонение по падежам
    declOfNum(number, titles) {  
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    },
    buyItem(value) {
      if (this.COINS >= value) {
        this.BUY_ITEM(value)
      }
    },
    sellItem(value) {
      if (this.COINS + value > 100) {
        this.isPopupVisible = true
      } else {
        this.SELL_ITEM(value)
      }
    },
    closePopup() {
      this.isPopupVisible = false
      this.isRobotPopupVisible = false
    },
    produceRobot() {
      this.isPopupVisible = true
      this.isRobotPopupVisible = true
      this.PRODUCE_ROBOT()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
