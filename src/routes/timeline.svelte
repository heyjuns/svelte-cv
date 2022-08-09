<script lang="ts">
	import Title from './title.svelte';
	export let title: string;
	export let datas: any;
</script>

<section>
	<Title {title} />

	<ol class="relative border-l border-slate-700">
		{#each datas as data}
			<li class="space-y-4 ml-4">
				<div class="absolute w-3 h-3 bg-slate-700 rounded-full mt-1.5 -left-1.5 border" />
				<div class="space-y-1">
					<time class="mb-1 text-sm font-light leading-none text-slate-600 ">{data.duration}</time>
					<div>
						<h1 class="text-lg font-semibold text-slate-700">
							{data.title}
						</h1>
						<h2 class="leading-none font-semibold">{data.location}</h2>
					</div>

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
				</div>
			</li>
		{/each}
	</ol>
</section>

<style>
</style>
