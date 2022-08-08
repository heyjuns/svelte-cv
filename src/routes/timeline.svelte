<script lang="ts">
	import Border from './border.svelte';

	import Title from './title.svelte';
	export let title: string;
	export let datas: any;
</script>

<section class="h-fit">
	<Title {title} />

	{#each datas as data}
		<section class="my-4">
			<div class="mb-2">
				<h2 class="text-xl font-semibold text-gray-700 leading-6">{data.title}</h2>
				<div class="flex flex-row justify-between place-items-center text-gray-600">
					<p class="text-lg">{data.location}</p>
					<p class="text-xs">{data.duration}</p>
				</div>
			</div>
			<div>
				<p class="text-gray-600 font-light">{data.description}</p>
			</div>
		</section>
		<Border />
	{/each}
</section>

<style>
</style>
