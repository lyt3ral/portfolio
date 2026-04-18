<script>
	import { MapPin } from '@lucide/svelte';

	export let personalDetails;
	export let about;
</script>

<header class="flex flex-col items-start gap-4">
	<h1 class="text-5xl font-bold text-zinc-100">{personalDetails.name}</h1>
	<h2 class="text-2xl text-zinc-400 font-normal">{personalDetails.title}</h2>
	<div class="flex items-center gap-2 text-zinc-500">
		<MapPin size={16} />
		<span>{personalDetails.location}</span>
	</div>
	<a
		href={personalDetails.resumeUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="mt-4 inline-block bg-zinc-800 text-zinc-200 px-4 py-2 rounded-md hover:bg-teal-500 transition-colors"
	>
		Download Resume
	</a>
	<p class="max-w-2xl my-4 text-zinc-300 leading-relaxed">
		{@html about}
	</p>
</header>
