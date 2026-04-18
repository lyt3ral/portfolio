<script>
	export let workExperience;
</script>

<section id="experience" class="flex flex-col gap-8">
	<h3 class="text-2xl font-semibold text-zinc-200">Work Experience</h3>
	<div class="relative flex flex-col gap-12 border-l-2 border-zinc-800 ml-3">
		{#each workExperience as job}
			<div class="relative pl-8">
				<div
					class="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-teal-500 border-2 border-zinc-900"
				></div>

				<p class="text-sm text-zinc-500 mb-2">{job.duration}</p>
				<h4 class="text-lg font-medium text-zinc-100">{job.role}</h4>
				<p class="text-base text-zinc-400 mb-4">{job.company}</p>
				<ul class="list-disc list-outside ml-4 space-y-2 text-zinc-400 leading-relaxed">
					{#each job.description as point}
						<li>{point}</li>
					{/each}
				</ul>
				<div class="flex flex-wrap gap-2 mt-6">
					{#each job.skills as skill}
						<span class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
