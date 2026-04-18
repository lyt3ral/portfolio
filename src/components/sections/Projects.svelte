<script>
	export let projects;
</script>

<section id="projects" class="flex flex-col gap-8">
	<h3 class="text-2xl font-semibold text-zinc-200">Projects</h3>
	<div class="grid sm:grid-cols-2 gap-6">
		{#each projects as project}
			<a
				href={project.link}
				target="_blank"
				rel="noopener noreferrer"
				class="group block bg-zinc-900 border border-zinc-800 p-6 rounded-lg transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20"
			>
				<h4
					class="text-lg font-medium text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors"
				>
					{project.name}
				</h4>
				<p class="text-zinc-400 mb-4 leading-relaxed">{project.description}</p>
				<div class="flex flex-wrap gap-2 mt-auto">
					{#each project.tech as tech}
						<span class="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium">
							{tech}
						</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>
