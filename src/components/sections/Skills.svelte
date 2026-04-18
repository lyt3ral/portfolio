<script>
	export let skills;
	export let hobbies;
</script>

<section id="skills" class="flex flex-col gap-8">
	<h3 class="text-2xl font-semibold text-zinc-200">Skills & Technologies</h3>
	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
		{#each Object.entries(skills) as [category, skillList]}
			<div>
				<h4 class="mb-4 text-lg font-medium text-zinc-300">{category}</h4>
				<div class="flex flex-wrap gap-2">
					{#each skillList as skill}
						<span
							class="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium"
						>
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="flex flex-col gap-4">
	<h3 class="text-2xl font-semibold text-zinc-200">Hobbies & Past-times</h3>
	<p class="text-zinc-400">{hobbies.join(' • ')}</p>
</section>
