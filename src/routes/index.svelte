<script lang="ts">
	import { onMount } from 'svelte';
	import Timeline from './timeline.svelte';
	let data: any;


	onMount(async () => {
		const res = await fetch('https://juanda-backend.herokuapp.com/');
		data = await res.json();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="Curriculum Vitae" content="Juanda Leonardo" />
</svelte:head>

<section>
	{#if data}
		<figure>
			<div class="text-center space-y-4">
				<div>
					<h1 class="text-5xl font-bold text-gray-700">{data.biodata.name}</h1>
					<p class="text-3xl text-gray-600">{data.position} - {data.works[0].location}</p>
				</div>
				<p class="text-lg text-gray-600">{data.summary}</p>
			</div>
		</figure>
		<section class="grid md:grid-cols-2 space-y-4 md:space-y-0 md:gap-16 mt-20">
			<Timeline title="WORKS TIMELINE" datas={data.works} />
			<Timeline title="EDUCATION TIMELINE" datas={data.educations} />
			<Timeline title="FREELANCE TIMELINE" datas={data.freelance} />
		</section>
	{:else}
		<p>loading</p>
	{/if}
</section>

<style>
</style>
