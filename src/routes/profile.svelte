<script lang="ts">
	export let biodata: any;
	export let socialMedia: any;
</script>

<figure>
	<div class="mb-10">
		<h1>{JSON.stringify(biodata)}</h1>
		<h1>{JSON.stringify(socialMedia)}</h1>
	</div>

	<h1>{biodata.name}</h1>
	<h2>{biodata.email}</h2>
</figure>

<style>
</style>
