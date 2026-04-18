import { Briefcase, FolderKanban, Wrench } from '@lucide/svelte';
import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
import MailIcon from '$lib/components/icons/MailIcon.svelte';
import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';

export const navs = {
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

export const personalDetails = {
	name: 'Sai Sabarish',
	title: 'Software Engineer',
	location: 'Hyderabad, India',
	resumeUrl: 'https://drive.google.com/file/d/1kEj9tdzFtoo74CxP-u0NTh7G7sUkwppP/view?usp=sharing'
};

export const about = `A Software Engineer with a passion for building elegant and efficient solutions. <br/> Stay hungry, stay foolish.`;

export const workExperience = [
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

export const projects = [
	{
		name: 'Job Scraper TS',
		description:
			'Automated job scraper for Workday, Greenhouse, and Lever platforms featuring AI-driven analysis and real-time Telegram notifications.',
		tech: ['TypeScript', 'Node.js', 'OpenAI', 'Telegram API'],
		link: 'https://github.com/lyt3ral/job-scraper-ts'
	},
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

export const skills = {
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

export const hobbies = ['Rock climbing', 'Retro gaming', 'Building mechanical keyboards', 'Working out'];
