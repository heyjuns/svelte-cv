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
	<title>CV - Juanda Leonardo</title>
	<meta name="Curriculum Vitae" content="Juanda Leonardo" />
</svelte:head>

<section>
	{#if data}
		<Profile biodata={data.biodata} socialMedia={data.social_media} />

		<section class="grid md:grid-cols-2 space-y-10 md:space-y-0 md:gap-16 mt-20">
			<Timeline title="WORKS" datas={data.works} />
			<Timeline title="EDUCATION" datas={data.educations} />
			<Timeline title="FREELANCE" datas={data.freelance} />

			<div class="space-y-10 md:space-y-4">
				<Skills title="TECH SKILLS" skills={data.tech_skills} />
				<Border />
				<Skills title="SOFT SKILLS" skills={data.soft_skills} />
			</div>
		</section>
	{:else}
		<div
			role="status"
			class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
		>
			<div class="flex justify-center items-center w-full h-48 bg-gray-700 rounded sm:w-96">
				<svg
					class="w-12 h-12 text-gray-200"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 640 512"
					><path
						d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
					/></svg
				>
			</div>
			<div class="w-full">
				<div class="h-2.5 bg-gray-700 rounded-full w-48 mb-4" />
				<div class="h-2 bg-gray-700 rounded-full max-w-[480px] mb-2.5" />
				<div class="h-2 bg-gray-700 rounded-full mb-2.5" />
				<div class="h-2 bg-gray-700 rounded-full max-w-[440px] mb-2.5" />
				<div class="h-2 bg-gray-700 rounded-full max-w-[460px] mb-2.5" />
				<div class="h-2 bg-gray-700 rounded-full max-w-[360px]" />
			</div>
			<span class="sr-only">Loading...</span>
		</div>
	{/if}
</section>
