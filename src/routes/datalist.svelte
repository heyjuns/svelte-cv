<script lang="ts">
	import Border from './border.svelte';

	import Title from './title.svelte';
	export let title: string;
	export let datas: any;
</script>

<section>
	<Title {title} />

	{#each datas as data}
		<section class="my-4">
			<div class="mb-2">
				<a href={data.url} target="_blank" class="text-lg font-semibold text-slate-700 hover:text-slate-500"
					>{data.name}
				</a>
				<div class="flex flex-row justify-between place-items-center text-slate-600">
					<p class="text-base">{data.issued_by}</p>
					<p class="text-xs">{data.valid_date}</p>
				</div>
			</div>
		</section>
		<Border />
	{/each}
</section>

