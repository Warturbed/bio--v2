<template>
  <div class="container">
      <div class="wrapper grid">
        <header class="header grid">
          <svg class="header__logo" width="78" height="48" viewBox="0 0 78 48" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C29.8512 0 35.2134 2.0939 39.378 5.57326L21 23.9513L39.431 42.3823C35.2589 45.8883 29.8761 48 24 48Z" fill="#FF7F22"/>
            <circle r="4.5" transform="matrix(-1 0 0 1 43.5 23.5)" fill="#FF7F22"/>
            <circle r="4.5" transform="matrix(-1 0 0 1 58.5 23.5)" fill="#FF7F22"/>
            <circle r="4.5" transform="matrix(-1 0 0 1 73.5 23.5)" fill="#FF7F22"/>
          </svg>
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
              <svg viewBox="0 0 16 20" fill="none">
                <rect width="16" height="20" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(-0.0152027) scale(0.0168919 0.0135135)"/>
                </pattern>
                <image id="image0" width="61" height="74" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
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
              <div class="product-list__img">
                <svg fill="#FF7F22" width="101" height="67">
                  <use xlink:href="@/img/sprites.svg#bio-big"></use>
                </svg>
              </div>
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
              <div class="product-list__img">
                <svg fill="#FF7F22" width="80" height="80">
                  <use xlink:href="@/img/sprites.svg#cpu-big"></use>
                </svg>
              </div>
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
              <div class="product-list__img">
                <svg fill="#FF7F22" width="88" height="88">
                  <use xlink:href="@/img/sprites.svg#soul-big"></use>
                </svg>
              </div>
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
.container {
	position: relative;
}
.wrapper {
	position: relative;
	width: 1016px;
	margin: 0 auto;
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 496px;
	}
	@media (max-width: 767px) {
		width: 236px;
	}
}
.grid {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	gap: 24px;
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media (max-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
	}
}
.button {
	box-sizing: border-box;
	font-weight: 600;
	height: 48px;
	border-radius: 60px;
	cursor: pointer;
}
.title {
	font: var(--font-semibold);
	@media (max-width: 767px) {
		text-align: center;
	}
}
.header {
	grid-column: 1/8 span;
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-column: 1/4 span;
	}
	@media (max-width: 767px) {
		grid-column: 1/2 span;
	}
	padding-top: 48px;
	&__logo {
		grid-column: 1 span;
		@media (min-width: 1024px) and (max-width: 1919px) {
			grid-column: 2/3 span;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 1 span;
		}
		@media (max-width: 767px) {
			display: none;
		}
	}
	&__button {
		grid-column: 7/9;
		@media (min-width: 1024px) and (max-width: 1919px) {
			grid-column: 6/8;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 3 / span 2;
		}
		@media (max-width: 767px) {
			grid-column: 1 / span 2;
		}
		display: block;
		font: var(--font-text-regular);
		color: #fff;
		border: 2px solid #ff7f22;
		background: transparent;
		&:hover {
			border: none;
			background: #ff5722;
		}
		&--disabled {
			color: var(--color-grey);
			border: 2px solid var(--color-grey);
			pointer-events: none;
		}
	}
}
.banner {
	grid-column: 1/8 span;
	padding: 71px 0 75px 0;
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-column: 1/4 span;
		padding: 55px 0 55px 0;
	}
	@media (min-width: 1024px) and (max-width: 1919px) {
		padding: 77px 0 65px 0;
	}
	@media (max-width: 767px) {
		grid-column: 1/2 span;
		grid-template-rows: 2fr 1fr;
		padding: 35px 0 34px 0;
	}
	&__content {
		grid-row: 1;
		grid-column: 2/4 span;
		@media (min-width: 1024px) and (max-width: 1919px) {
			grid-column: 2/3 span;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 1 / span 2;
		}
		@media (max-width: 767px) {
			grid-column: 1/2 span;
			grid-row: 2;
			text-align: center;
		}
	}
	&__title {
		font: var(--font-bold);
		max-width: 470px;
	}
	&__text {
		display: inline-block;
		font: var(--font-info-regular);
		color: var(--color-grey);
		padding-top: 24px;
		@media (max-width: 767px) {
			display: none;
		}
	}
	&__img {
		grid-column: 6 / span 3;
		grid-row: 1;
		width: 100%;
		height: 320px;
		background: url(../img/banner.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		@media (min-width: 1024px) and (max-width: 1919px) {
			grid-column: 6 / span 2;
			width: 100%;
			height: 206px;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 3 / span 2;
			width: 236px;
			height: 206px;
		}
		@media (max-width: 767px) {
			grid-column: 1/2 span;
			width: 236px;
			height: 206px;
			grid-row: 1;
		}
	}
}
.wallet {
	grid-column: 2/6 span;
	// 1024 - 1919
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-column: 1/4 span;
	}
	@media (max-width: 767px) {
		grid-column: 1/2 span;
	}
	&__list {
		display: flex;
		min-height: 20px;
		margin: 60px 0 26px 7px;
		@media (min-width: 768px) and (max-width: 1919px) {
			margin: 39px 0 24px 7px;
		}
		@media (max-width: 767px) {
			flex-wrap: wrap;
			row-gap: 8px;
			margin: 39px 0 32px 7px;
		}
	}
	&__coin {
		width: 16px;
		height: 20px;
		margin-left: -7px;
	}
	&__counter {
		font: var(--font-info-bold);
		color: var(--color-grey);
	}
	&__text {
		font: var(--font-info-sm);
		color: var(--color-grey);
		margin-left: 6px;
	}
	&__container {
		margin-top: 42px;
		@media (min-width: 768px) and (max-width: 1919px) {
			margin-top: 35px;
		}
		@media (max-width: 767px) {
			margin-top: 20px;
		}
	}
	&__multiply {
		color: #ff7f22;
		line-height: 24px;
		font-weight: 500;
		border-bottom: 1px solid #ff7f22;
		cursor: pointer;
		background: transparent;
	}
	input {
		display: none;
	}
	label {
		margin-left: 63px;
		@media (max-width: 767px) {
			display: inline-block;
			margin-left: 36px;
			margin-top: 24px;
		}
		position: relative;
		cursor: pointer;
		&::before {
			content: '';
			width: 20px;
			height: 20px;
			border: 2px solid var(--color-grey);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 70%;
			position: absolute;
			left: -36px;
		}
	}
	input:checked + label::before {
		background-color: transparent;
		background-image: url(../img/ok.png);
	}
}
.market {
	padding-top: 78px;
	grid-column: 2/6 span;
	@media (min-width: 768px) and (max-width: 1023px) {
		padding-top: 57px;
		grid-column: 1/4 span;
	}
	@media (max-width: 767px) {
		padding-top: 40px;
		grid-column: 1/2 span;
	}
	&__button {
		font: var(--font-text-bold);
		margin: 0 auto;
		background: linear-gradient(180deg, #ff7f22 0%, #ff5722 100%);
		margin-top: 24px;
		width: 200px;
		&:hover {
			background: linear-gradient(0deg, #ff5722, #ff5722);
		}
		&--disabled {
			background: #4c5865;
			pointer-events: none;
		}
	}
}
.storage {
	padding: 75px 0 92px 0;
	@media (min-width: 1024px) and (max-width: 1919px) {
		padding: 75px 0 118px 0;
	}
	grid-column: 2/6 span;
	@media (min-width: 768px) and (max-width: 1023px) {
		padding: 55px 0 102px 0;
		grid-column: 1/4 span;
	}
	@media (max-width: 767px) {
		padding: 35px 0 38px 0;
		grid-column: 1/2 span;
	}
	&__button {
		font: var(--font-text-regular);
		color: #7cdaf9;
		width: 200px;
		margin: 0 auto;
		background: transparent;
		border: 2px solid;
		margin-top: 24px;
		@media (min-width: 1024px) and (max-width: 1919px) {
			margin-top: 28px;
		}
		&:hover {
			color: #212529;
			background: #7cdaf9;
		}
		&--disabled {
			color: #4c5865;
			border: 2px solid;
			background: transparent;
			pointer-events: none;
		}
	}
}
.product-list {
	padding-top: 60px;
	@media (min-width: 768px) and (max-width: 1919px) {
		padding-top: 40px;
	}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media (min-width: 768px) and (max-width: 1023px) {
		padding-top: 40px;
		justify-content: center;
		&__item:first-child {
			margin-right: 20px;
		}
		&__item:last-child {
			margin-top: 35px;
		}
	}
	@media (max-width: 767px) {
		padding-top: 0;
	}
	&__item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		width: 236px;
		@media (max-width: 767px) {
			margin-top: 38px;
		}
	}
	&__img {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 128px;
		svg {
			filter: drop-shadow(0px 8px 90px #ff7f22);
		}
	}
	&__title {
		font: var(--font-info-bold);
	}
	&__text {
		font: var(--font-text-regular);
		color: var(--color-grey);
		margin-top: 5px;
	}
	&__price {
		font: var(--font-text-bold);
		color: var(--color-grey);
	}
	&__counter {
		font: var(--font-info-sm);
		margin-top: 16px;
	}
}
.production {
	grid-column: 2/6 span;
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-column: 1/4 span;
	}
	@media (max-width: 767px) {
		grid-column: 1 / span 2;
	}
	&__container {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: 2fr 1fr;
		gap: 60px 24px;
		padding: 75px 0 205px 0;
		@media (min-width: 1024px) and (max-width: 1919px) {
			padding: 38px 0 196px 0;
			gap: 40px 24px;
		}
		@media (min-width: 768px) and (max-width: 1023px) {
			padding: 37px 0 100px 0;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: 1fr 1fr;
			gap: 20px 24px;
		}
		@media (max-width: 767px) {
			padding: 37px 0 96px 0;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(5, auto);
			gap: 29px 24px;
		}
	}
	&__style {
		grid-column: 1 / span 2;
		grid-row: 1;
		@media (max-width: 767px) {
			grid-column: 1 / span 2;
			grid-row: 2;
		}
	}
	&__control {
		grid-column: 3/4 span;
		grid-row: 1;
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 1 / span 2;
			grid-row: 2;
		}
		@media (max-width: 767px) {
			grid-column: 1 / span 2;
			grid-row: 3;
		}
		display: grid;
		grid-template-columns: repeat(4, 48px);
		grid-template-rows: repeat(3, 48px);
		grid-gap: 16px 10px;
		margin-top: 5px;
	}
	&__button {
		grid-column: 1 / span 2;
		grid-row: 2;
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 1 / span 2;
			grid-row: 4;
		}
		@media (max-width: 767px) {
			grid-column: 1 / span 2;
			grid-row: 5;
		}
		font: var(--font-text-medium);
		display: block;
		background: transparent;
		&--active {
			border: 2px solid #ff7f22;
			&:hover {
				border: none;
				background: #ff5722;
			}
		}
		&--disabled {
			color: var(--color-grey);
			border: 2px solid var(--color-grey);
			pointer-events: none;
		}
	}
	&__info-text {
		@media (min-width: 768px) and (max-width: 1023px) {
			grid-column: 1 / span 2;
			grid-row: 3;
		}
		@media (max-width: 767px) {
			grid-column: 1 / span 2;
			grid-row: 4;
		}
		grid-row: 2;
		grid-column: 3 / span 2;
		font: var(--font-text-sm);
		color: var(--color-grey);
	}
}
.robot-style {
	&__container + &__container {
		margin-top: 35px;
	}
	&__text {
		font: var(--font-text-medium);
	}
	&__control {
		display: grid;
		align-content: center;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 21px;
		input {
			display: none;
		}
		label {
			display: flex;
			align-items: center;
			font: var(--font-text-sm);
			position: relative;
			cursor: pointer;
			margin-left: 40px;
			&::before {
				position: absolute;
				left: -34px;
				content: '';
				width: 20px;
				height: 20px;
				border: 2px solid var(--color-grey);
				border-radius: 50px;
			}
		}
		input:checked + label::before {
			background: url(../img/radio-bg.png);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 80%;
		}
	}
}
.main-robot {
	grid-column: 5 / span 2;
	grid-row: 1/3;
	@media (min-width: 768px) and (max-width: 1023px) {
		grid-column: 3 / span 2;
	}
	@media (max-width: 767px) {
		grid-column: 1 / span 2;
		grid-row: 1;
	}
	width: 236px;
	height: 319px;
	background: url(../img/robot_sprites.png);
	&.front.male {
		background-position: 0 -2560px;
	}
	&.front.female {
		background-position: 0 -2880px;
	}
	&.design.male {
		background-position: 0 -3200px;
	}
	&.design.female {
		background-position: 0 -3520px;
	}
	&.storage.front.male {
		background-position: 0 -1280px;
	}
	&.storage.front.female {
		background-position: 0 -1600px;
	}
	&.storage.design.male {
		background-position: 0 -1920px;
	}
	&.storage.design.female {
		background-position: 0 -2240px;
	}
	&.production.front.male {
		background-position: 0 0px;
	}
	&.production.front.female {
		background-position: 0 -320px;
	}
	&.production.design.male {
		background-position: 0 -640px;
	}
	&.production.design.female {
		background-position: 0 -960px;
	}
}

</style>
