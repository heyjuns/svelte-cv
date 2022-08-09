<script lang="ts">
	import { onMount } from 'svelte';
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

<section>
	{#if data}
		<section class="mb-10 md:mt-10">
			<Profile biodata={data.biodata} socialMedia={data.social_media} />
		</section>

		<section class="grid md:grid-cols-2 md:gap-16 space-y-8">
			<div class="space-y-8">
				<Timeline title="WORKS" datas={data.works} />
				<Timeline title="FREELANCE" datas={data.freelance} />
			</div>
			<div class="space-y-8">
				<Timeline title="EDUCATION" datas={data.educations} />
        <Datalist title="CERTIFICATIONS" datas={data.certificates} />
				<Skills title="TECH SKILLS" skills={data.tech_skills} />
				<Skills title="SOFT SKILLS" skills={data.soft_skills} />
			</div>
		</section>
	{:else}
		<Skeleton />
	{/if}
</section>
