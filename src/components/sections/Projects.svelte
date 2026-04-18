<script>
	import { reveal } from '$lib/utils';
	export let projects;

	// Duplicate projects to ensure a seamless loop in the marquee
	const displayProjects = [...projects, ...projects];
</script>

<section use:reveal id="projects" class="flex flex-col gap-8">
	<h3 class="text-2xl font-semibold text-zinc-200">Projects</h3>
	
	<div class="marquee-container -mx-4">
		<div class="marquee-content px-4">
			{#each displayProjects as project}
				<a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					class="project-card group block bg-zinc-900 border border-zinc-800 p-6 rounded-lg transition-all duration-300 hover:border-teal-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/20"
				>
					<h4
						class="text-lg font-medium text-zinc-100 mb-2 group-hover:text-teal-400 transition-colors"
					>
						{project.name}
					</h4>
					<p class="text-zinc-400 mb-4 text-sm leading-relaxed line-clamp-2">
						{project.description}
					</p>
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
	</div>
</section>

<style>
	.marquee-container {
		width: calc(100% + 2rem);
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
	}

	.marquee-content {
		display: flex;
		gap: 1.5rem;
		width: max-content;
		animation: marquee 40s linear infinite;
	}

	.marquee-content:hover {
		animation-play-state: paused;
	}

	.project-card {
		width: 320px;
		flex-shrink: 0;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Optional: mobile optimization */
	@media (max-width: 640px) {
		.project-card {
			width: 280px;
		}
	}
</style>
