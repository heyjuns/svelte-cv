<script lang="ts">
	import '../app.css';
	import Footer from './footer.svelte';
</script>

<main class="text-slate-500 flex flex-col p-8 w-full max-w-5xl mx-auto box-border font-[Inter]">
	<slot />
</main>

<Footer />
