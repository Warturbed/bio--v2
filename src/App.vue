<template>
  <MainWrapper/>
</template>

<script>
import MainWrapper from './components/MainWrapper.vue'

export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style lang="scss">
@import '@/styles/style.scss';
* {
	color: var(--main-color);
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 24px;
	font-weight: 600;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
	list-style: none;
	outline: none;
}

body {
	background: var(--background--color-main);
	background-repeat: no-repeat;
}
</style>
