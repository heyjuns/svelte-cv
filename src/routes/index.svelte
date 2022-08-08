<script lang="ts">
	import { onMount } from 'svelte';
import Border from './border.svelte';
	import Profile from './profile.svelte';
	import Skills from './skills.svelte';
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
		<Profile biodata={data.biodata} socialMedia={data.social_media} />

		<section class="grid md:grid-cols-2 space-y-10 md:space-y-0 md:gap-16 mt-20">
			<Timeline title="WORKS" datas={data.works} />
			<Timeline title="EDUCATION" datas={data.educations} />
			<Timeline title="FREELANCE" datas={data.freelance} />

			<div class="space-y-4">
				<Skills title="TECH SKILLS" skills={data.tech_skills} />
				<Border/>
				<Skills title="SOFT SKILLS" skills={data.soft_skills} />
			</div>
		</section>
	{:else}
		<p>loading</p>
	{/if}
</section>

<style>
</style>
