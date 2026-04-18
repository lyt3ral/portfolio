<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Dock from './Dock.svelte';
	import DockIcon from './DockIcon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { magnetic } from '$lib/utils';

	export let navs;
</script>

<Tooltip.Provider>
	<div class="fixed left-0 right-0 bottom-4 flex justify-center pointer-events-none z-50">
		<div class="pointer-events-auto">
			<Dock direction="middle" class="relative" let:mouseX let:distance let:magnification>
				{#each navs.navbar as item}
					<DockIcon {mouseX} {magnification} {distance}>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<a
									use:magnetic
									href={item.href}
									class="magnetic-link hover:bg-zinc-800 transition-all duration-200 rounded-full p-3 mx-0 block"
								>
									<svelte:component
										this={item.icon}
										size={22}
										strokeWidth={1.5}
										class="cursor-pointer text-zinc-400"
									/>
								</a>
							</Tooltip.Trigger>
							<Tooltip.Content sideOffset={8}>
								<p>{item.label}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</DockIcon>
				{/each}
				<Separator orientation="vertical" class="h-full w-[0.6px] bg-zinc-800" />
				{#each navs.contact as item}
					<DockIcon {mouseX} {magnification} {distance}>
						<Tooltip.Root>
							<Tooltip.Trigger>
								<a
									use:magnetic
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									class="magnetic-link hover:bg-zinc-800 transition-all duration-200 rounded-full p-0 block"
								>
									<svelte:component
										this={item.icon}
										className="m-3 h-5 w-5 text-zinc-400 cursor-pointer"
									/>
								</a>
							</Tooltip.Trigger>
							<Tooltip.Content sideOffset={9}>
								<p>{item.label}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</DockIcon>
				{/each}
			</Dock>
		</div>
	</div>
</Tooltip.Provider>

<style>
	.magnetic-link {
		transition: transform 0.1s ease-out;
	}

	.magnetic-link:hover {
		filter: drop-shadow(0 0 12px rgba(45, 212, 191, 0.6));
	}
</style>
