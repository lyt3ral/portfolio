<script>
	// Section Components
	import Hero from '../components/sections/Hero.svelte';
	import Experience from '../components/sections/Experience.svelte';
	import Projects from '../components/sections/Projects.svelte';
	import Skills from '../components/sections/Skills.svelte';

	// Nav Component
	import FloatingNav from '../components/FloatingNav.svelte';

	// Data
	import {
		navs,
		personalDetails,
		about,
		workExperience,
		projects,
		skills,
		hobbies
	} from '$lib/data';
</script>

<div class="max-w-3xl mx-auto min-h-screen font-sans px-4 py-16 sm:py-24 pb-[6.5rem]">
	<main class="flex flex-col gap-16">
		<Hero {personalDetails} {about} />

		<Experience {workExperience} />

		<Projects {projects} />

		<Skills {skills} {hobbies} />

		<FloatingNav {navs} />
	</main>

	<footer class="text-center mt-24 pt-8 border-t border-zinc-800/50 text-zinc-500 text-sm">
		<p>Designed & Built by {personalDetails.name} &copy; {new Date().getFullYear()}</p>
	</footer>
</div>
