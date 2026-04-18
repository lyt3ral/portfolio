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

<div class="max-w-3xl mx-auto min-h-screen font-sans px-4 pb-[6.5rem]">
	<main class="flex flex-col gap-40">
		<div class="sm:min-h-[85vh] flex flex-col sm:justify-center pt-24 sm:pt-0">
			<Hero {personalDetails} {about} />
		</div>

		<Experience {workExperience} />

		<Projects {projects} />

		<Skills {skills} {hobbies} />

		<FloatingNav {navs} />
	</main>
</div>
