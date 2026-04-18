<script>
	// Lucide Svelte
	import { Briefcase, FolderKanban, Wrench, MapPin } from '@lucide/svelte';
	// Shadcn Components
	import Separator from '$lib/components/ui/separator/separator.svelte';
	// Major Components
	import Dock from '../components/Dock.svelte';
	import DockIcon from '../components/DockIcon.svelte';
	// Inline SVG icons
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	// Tooltip
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let navs = {
		navbar: [
			{ label: 'Experience', icon: Briefcase, href: '#experience' },
			{ label: 'Projects', icon: FolderKanban, href: '#projects' },
			{ label: 'Skills', icon: Wrench, href: '#skills' }
		],
		contact: [
			{ label: 'Github', icon: GithubIcon, href: 'https://github.com/lyt3ral' },
			{ label: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com/in/sai-sabarish' },
			{ label: 'Email', icon: MailIcon, href: 'mailto:saisabarishmail@gmail.com' }
		]
	};

	const personalDetails = {
		name: 'Sai Sabarish',
		title: 'Software Engineer',
		location: 'Hyderabad, India',
		resumeUrl: 'https://drive.google.com/file/d/1kEj9tdzFtoo74CxP-u0NTh7G7sUkwppP/view?usp=sharing'
	};

	const about = `A Software Engineer with a passion for building elegant and efficient solutions. <br/> Stay hungry, stay foolish.`;

	const workExperience = [
		{
			role: 'Senior Associate Software Engineer',
			company: 'AT&T',
			duration: 'September 2025 - Present',
			description: [
				'Developing backend microservices using Java (Spring Boot) and Python.',
				'Orchestrating distributed workflows with Temporal for resilient state management.',
				'Building FastMCP tools to integrate AI models with internal data via Model Context Protocol.'
			],
			skills: ['Java', 'Spring Boot', 'Python', 'Temporal', 'FastMCP']
		},
		{
			role: 'Founding Software Engineer (Intern)',
			company: 'BCloudOne Jewellery and VStyle Private Limited',
			duration: 'June 2023 - June 2025',
			description: [
				'Led the development of over 10 features for web platforms, including Product, Invoice, and Careers modules.',
				'Engineered a scalable Candidate Screening Platform to automate onboarding processes.',
				'Deployed full-stack solutions with high system availability and scalability.'
			],
			skills: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Docker', 'AWS']
		},
		{
			role: 'Automation and IOT Intern',
			company: 'Lux & Decibels (SFNA, Southern Naval Command Kochi)',
			duration: 'February 2023 - March 2023',
			description: [
				'Authored Python automation scripts to streamline VR simulator setup, reducing preparation time by up to 10 minutes.',
				'Developed an IoT system for real-time control of mixed-reality firefighting simulators.'
			],
			skills: ['Python', 'Selenium', 'PyAutoGUI', 'Arduino', 'ESP-NOW']
		}
	];

	const projects = [
		{
			name: 'Seating Project',
			description:
				'A collaborative seat allocation system that automated assignments for over 5,000 students, eliminating errors and minimizing administrative tasks.',
			tech: ['Django', 'Next.JS', 'PostgreSQL', 'Docker'],
			link: 'https://github.com/seating-project/seating-project'
		},
		{
			name: 'TixApp: Ticket Booking Platform',
			description:
				'A ticket booking application featuring real-time, location-based movie selection, an admin dashboard with analytics',
			tech: ['Flask', 'Bootstrap', 'SQLite'],
			link: 'https://github.com/lyt3ral/TixApp'
		}
	];

	const skills = {
		Languages: ['Java', 'TypeScript', 'Python', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS'],
		Frameworks: [
			'Spring Boot',
			'Temporal',
			'FastMCP',
			'Next.js',
			'React',
			'React Native',
			'Flask',
			'Express.js',
			'Django',
			'FastAPI'
		],
		'Databases & ORMs': ['PostgreSQL', 'MySQL', 'SQLite', 'tRPC', 'Prisma', 'GraphQL'],
		'DevOps & Tools': ['Git', 'Docker', 'AWS', 'Expo', 'Arduino']
	};

	const hobbies = ['Rock climbing', 'Retro gaming', 'Building mechanical keyboards', 'Working out'];
</script>

<div class="max-w-3xl mx-auto min-h-screen font-sans px-4 py-16 sm:py-24 pb-[6.5rem]">
	<main class="flex flex-col gap-16">
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

		<Tooltip.Provider>
			<div class="fixed left-0 right-0 bottom-4 flex justify-center pointer-events-none z-50">
				<div class="pointer-events-auto">
					<Dock direction="middle" class="relative" let:mouseX let:distance let:magnification>
						{#each navs.navbar as item}
							<DockIcon {mouseX} {magnification} {distance}>
								<Tooltip.Root>
									<Tooltip.Trigger>
										<a
											href={item.href}
											class="hover:bg-zinc-800 transition-all duration-200 rounded-full p-3 mx-0 block"
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
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											class="hover:bg-zinc-800 transition-all duration-200 rounded-full p-0 block"
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
	</main>

	<footer class="text-center mt-24 pt-8 border-t border-zinc-800/50 text-zinc-500 text-sm">
		<p>Designed & Built by {personalDetails.name} &copy; {new Date().getFullYear()}</p>
	</footer>
</div>
