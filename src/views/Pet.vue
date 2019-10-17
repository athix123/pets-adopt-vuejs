<template>
	<div>
		<h1>{{ animals.name }} ({{this.$route.params.species}})</h1>
		<p>Age: {{ animals.age }} years old</p>
		<p>Breed: {{ animals.location }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			animals: {}
		}
	},
	computed: {
		...mapState([
			'cats',
			'dogs'
		])
	},
	mounted() {
		const animal = this[this.$route.params.species][this.$route.params.id]
		this.animals = animal
	},
	methods: {
		// pets() {
		// 	const animal = this[this.$route.params.species][this.$route.params.id]
		// 	console.log(this.animals)
		// 	return this.animals = animal
		// }
	}
}	
</script>