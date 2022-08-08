<script lang="ts">
	export let biodata: any;
	export let socialMedia: any;
</script>

<section class="md:mt-40 ">
	<figure class="md:flex rounded-xl p-8 md:p-0 bg-white shadow-lg ">
		<img
			class="w-48 h-48 object-cover md:object-cover md:w-48 md:h-auto md:rounded-r-none md:rounded-l-xl :md rounded-full mx-auto"
			src="./avatar_edit.jpg"
			alt=""
		/>
		<div class="pt-6 md:p-5 text-center md:text-left space-y-4 text-gray-600">
			<blockquote>
				<p class="font-light">
					{biodata.second_summary}
				</p>
			</blockquote>
			<div>
				<p class="font-bold text-2xl text-gray-700 leading-5 underline ">{biodata.name}</p>
				<p class="">
					{biodata.position}, {biodata.last_position}
				</p>
			</div>

			<div class="flex flex-col md:flex-row justify-center place-items-center space-x-0 md:space-x-4 space-y-2">
				<div class="flex place-items-center flex-grow">
					<a
						href="mailto:{biodata.email}"
						class="border  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-gray-700 border-gray-700 text-white hover:bg-gray-600"
					>
						Reach me here
					</a>
				</div>
				<div class="flex flex-row space-x-4">
					{#each socialMedia as item}
						<a href={item.url} target="_blank">
							<img src="./{item.name}.svg" alt="icon" class="w-[42px] h-[42px]" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</figure>
</section>

<style>
</style>
