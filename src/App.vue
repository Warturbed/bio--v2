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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
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
:root {
	// Main background
	--background--color-main: radial-gradient(82.33% 70.44% at 50% 0%, #26394d 0%, #212529 100%);
	// Colors
	--main-color: #fff;
	--color-grey: #a3b8cc;
	// Family
	--font-family: 'Montserrat', sans-serif;
	// Fonts
	--font-bold: 600 56px/72px var(--font-family);
	--font-semibold: 600 32px/40px var(--font-family);

	--font-info-bold: 700 20px/24px var(--font-family);
	--font-info-regular: 600 20px/32px var(--font-family);
	--font-info-sm: 500 20px/32px var(--font-family);

	--font-text-bold: 600 16px/24px var(--font-family);
	--font-text-regular: 500 16px/24px var(--font-family);
	--font-text-medium: 500 14px/20px var(--font-family);
	--font-text-sm: 400 12px/16px var(--font-family);

	// 1024 - 1919
	@media (min-width: 1024px) and (max-width: 1919px) {
		--font-bold: 600 48px/56px var(--font-family);
		--font-semibold: 600 24px/32px var(--font-family);

		--font-info-bold: 700 18px/24px var(--font-family);
		--font-info-regular: 600 18px/24px var(--font-family);
		--font-info-sm: 600 18px/18px var(--font-family);
	}
	// 768 - 1023
	@media (min-width: 768px) and (max-width: 1023px) {
		--font-bold: 600 32px/40px var(--font-family);
		--font-semibold: 600 24px/32px var(--font-family);
		--font-info-bold: 700 18px/24px var(--font-family);

		--font-info-regular: 600 14px/20px var(--font-family);
		--font-info-sm: 600 20px/24px var(--font-family);
	}
	// < 767
	@media (max-width: 767px) {
		--font-bold: 600 28px/32px var(--font-family);
		--font-semibold: 600 24px/32px var(--font-family);

		--font-info-bold: 700 18px/24px var(--font-family);
		--font-info-regular: 600 14px/20px var(--font-family);
		--font-info-sm: 600 18px/24px var(--font-family);
	}
}
</style>
