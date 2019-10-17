<template>
	<div id="">
		<h1>Dogs for Adoptions</h1>
		<b-table striped hover :items="dogs">
			<template v-slot:cell(name)="data">
			<router-link :to="`/pets/dogs/${data.index}`">{{ data.value }}</router-link>
			</template>
		</b-table>
	</div>
</template>

<script>
import { mapState } from 'vuex'
// import dataDogs from '@/dataDummy/dataDogs'

export default {
	data() {
		return {
			// dataDogs,
		}
	},
	computed: {
		...mapState([
			'dogs'
		])
	}
}	
</script>