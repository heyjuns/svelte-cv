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
		<figure class="md:flex rounded-xl p-8 md:p-0 bg-white shadow-lg ">
			<img
				class="w-48 h-48 object-cover md:object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-l-xl :md rounded-full mx-auto"
				src="./avatar_edit.jpg"
				alt=""
			/>
			<div class="pt-6 md:p-5 text-center md:text-left space-y-4 text-gray-600">
				<blockquote>
					<p class="font-light">
						{data.biodata.second_summary}
					</p>
				</blockquote>
				<div>
					<p class="font-bold text-gray-700">{data.biodata.name}</p>
					<p class="">{data.biodata.position}, {data.works[0].location}</p>
				</div>

				<div class="flex flex-row space-x-4 justify-center">
					{#each data.social_media as item}
						<a href={item.url} target="_blank">
							<img src="./{item.name}.svg" alt="icon" class="w-10 h-10 fill-red-900" />
						</a>
					{/each}
				</div>
			</div>
		</figure>

		<section class="grid md:grid-cols-2 space-y-10 md:space-y-0 md:gap-16 mt-20">
			<Timeline title="WORKS" datas={data.works} />
			<Timeline title="EDUCATION" datas={data.educations} />
			<Timeline title="FREELANCE" datas={data.freelance} />
		</section>
	{:else}
		<p>loading</p>
	{/if}
</section>

<style>
</style>
