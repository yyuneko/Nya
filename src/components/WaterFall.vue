<template>
	<view class="WaterFall">
		<view v-for="{item in list}">
			<card>
				<template slot="title">
					{{item.title}}
				</template>
			</card>
		</view>

	</view>
</template>

<script>
	import card from './card.vue'
	export default {
		name: 'WaterFall',
		components: {
			card
		},
		data() {
			return {
				list: [{
						title: 'dwiifhifdehrf'
					},
					{
						title: 'dwiifhifdehrf'
					},
					{
						title: 'dwiifhifdehrf'
					},
					{
						title: 'dwiifhifdehrf'
					},
				]
			}
		}
	}
</script>

<style>
</style>
