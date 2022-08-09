<script lang="ts">
	import { onMount } from 'svelte';
	import Border from './border.svelte';
	import Datalist from './datalist.svelte';
	import Profile from './profile.svelte';
import Skeleton from './skeleton.svelte';
	import Skills from './skills.svelte';
	import Timeline from './timeline.svelte';

	let data: any;
	onMount(async () => {
		const res = await fetch('https://juanda-backend.herokuapp.com/');
		data = await res.json();
	});
</script>

<svelte:head>
	<title>CV - Juanda Leonardo</title>
	<meta name="Curriculum Vitae" content="Juanda Leonardo" />
</svelte:head>

<section class="space-y-20">
	{#if data}
		<Profile biodata={data.biodata} socialMedia={data.social_media} />

		<section class="md:columns-2 md:space-y-0 md:gap-10">
			<Timeline title="WORKS" datas={data.works} />
			<Timeline title="EDUCATION" datas={data.educations} />
			<Timeline title="FREELANCE" datas={data.freelance} />

			<!-- <Datalist title="WORKS" datas={data.works} />
			<Datalist title="EDUCATION" datas={data.educations} />
			<Datalist title="FREELANCE" datas={data.freelance} /> -->

			<div class="space-y-10 md:space-y-4">
				<Skills title="TECH SKILLS" skills={data.tech_skills} />
				<Border />
				<Skills title="SOFT SKILLS" skills={data.soft_skills} />
			</div>
		</section>
	{:else}
    <Skeleton/>
	{/if}
</section>


