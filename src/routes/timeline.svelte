<script lang="ts">
	import Title from './title.svelte';
	export let title: string;
	export let datas: any;
</script>

<section class="">
	<Title {title} />

	<ol class="relative border-l border-slate-700 ">
		{#each datas as data}
			<li class="mb-10 ml-4">
				<div class="absolute w-3 h-3 bg-slate-700 rounded-full mt-1.5 -left-1.5 border" />
				<time class="mb-1 text-sm font-light leading-none text-slate-600 ">{data.duration}</time>
				<h3 class="text-lg font-semibold text-slate-700">
					{data.title}
				</h3>
				<p class="mb-4 font-normal text-slate-600 ">
					{data.description}
				</p>
				<p class="text-sm font-light">
					<span class="font-bold">Skills </span>:
					{#each data.skills as skill, i}
						{skill}
						{#if i < data.skills.length - 1}
							<span class="font-bold"> · </span>
						{/if}
					{/each}
				</p>
			</li>
		{/each}
	</ol>
</section>

<style>
</style>
