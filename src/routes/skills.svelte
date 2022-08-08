<script lang="ts">
	import Title from './title.svelte';

	export let title: string;
	export let skills: [];
</script>

<section>
	<Title {title} />
	<div class="flex gap-1 flex-wrap">
		{#each skills as skill}
			<p
				class="text-sm font-semibold break-normal inline px-5 py-2.5 rounded-full  text-slate-700 border border-slate-700 hover:bg-slate-700 cursor-pointer hover:text-white"
			>
				{skill}
			</p>
		{/each}

	</div>
</section>
