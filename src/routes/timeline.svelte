<script lang="ts">
	export let title: string;
	export let datas: any;
</script>

<div>
	<h1 class="font-bold text-3xl text-gray-700">{title}</h1>

	{#each datas as data}
		<section class="my-4">
			<h2 class="text-xl font-semibold text-gray-700">{data.title}</h2>
			<div class="flex flex-row justify-between place-items-end font-light text-gray-600">
				<p class="text-lg">{data.location}</p>
				<p class="text-xs">{data.duration}</p>
			</div>
			<div>
				<p class="text-gray-600">{data.description}</p>
			</div>
		</section>
		<div class="border-b border-dotted border-b-gray-400" />
	{/each}
</div>

<style>
</style>
