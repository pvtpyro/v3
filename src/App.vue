<template>
	<v-app>
		<v-app-bar app dark>
			<div class="d-flex align-center">
				<v-img alt="Logo" class="mr-2" contain width="40" src="./assets/img/logo.png" transition="scale-transition" />
			</div>

			<v-spacer></v-spacer>

			<v-btn href="#" text>
				<span class="mr-2">Clients</span>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
		</v-main>

		<v-footer app padless>
			<v-card class="flex" flat tile dark>
				<v-card-text class="py-2 text-center">
					&copy;{{ new Date().getFullYear() }} Dandi
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		name: "App",

		components: {
		},

		data: () => ({
			//
		}),
	};
</script>

<style lang="scss">
	@import "./assets/css/app.scss";
</style>