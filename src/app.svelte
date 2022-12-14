<style lang="scss" global>
	@import "./lib/style/variables.scss";
	@import "./lib/style/mixins.scss";
	@import "./lib/style/global.scss";
</style>

<script lang="ts">
	// import { site } from './app.ts'
	export let site = Array as ()=>any[] 
</script>

<div>{site}</div>