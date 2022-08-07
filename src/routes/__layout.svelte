<script lang="ts">
	import '../app.css';
</script>

<main class="text-[#141414]">
	<slot />
</main>

<style>
	main {
    font-family: 'Inter',sans-serif;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
