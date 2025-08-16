<script>
	// --- PERSONAL INFORMATION ---
	// Replace this placeholder data with your own.

	const personalDetails = {
		name: 'Alex Doe',
		title: 'Full-Stack Developer',
		location: 'Chennai, India',
		email: 'alex.doe@example.com',
		github: 'github.com/alexdoe'
	};

	const about = `
    As a recent Computer Science graduate with a passion for building elegant and efficient solutions, 
    I specialize in full-stack development. I thrive on turning complex problems into beautiful, 
    intuitive applications. My goal is to leverage modern technologies to create meaningful 
    digital experiences.
  `;

	const workExperience = [
		{
			role: 'Software Development Intern',
			company: 'Innovatech Solutions',
			duration: 'Jun 2024 - Aug 2024',
			description:
				'Contributed to a client-facing web application using React and Node.js. Developed new API endpoints, wrote unit tests, and collaborated with a team of 5 developers in an agile environment.'
		},
		{
			role: 'Freelance Web Developer',
			company: 'Self-Employed',
			duration: 'Jan 2023 - May 2024',
			description:
				'Designed and built responsive websites for small businesses using modern frameworks. Managed project lifecycle from client consultation to deployment and maintenance.'
		}
	];

	const projects = [
		{
			name: 'Project Atlas',
			description:
				'A full-stack application for tracking personal projects and deadlines, featuring user authentication and a sleek, interactive dashboard.',
			tech: ['SvelteKit', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
			link: '#' // Replace with your project link
		},
		{
			name: 'Code Snippet Manager',
			description:
				'A minimalist desktop app built with Electron and React to organize and quickly access frequently used code snippets.',
			tech: ['React', 'Electron', 'SQLite'],
			link: '#' // Replace with your project link
		}
	];

	const skills = {
		Frontend: [
			'JavaScript (ES6+)',
			'TypeScript',
			'React',
			'Svelte',
			'HTML5 & CSS3',
			'Tailwind CSS'
		],
		Backend: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL'],
		Databases: ['PostgreSQL', 'MongoDB', 'Redis'],
		'Tools & DevOps': ['Git & GitHub', 'Docker', 'CI/CD', 'Vite', 'Webpack']
	};

	const hobbies = [
		'Exploring new cafes',
		'Retro gaming',
		'Building mechanical keyboards',
		'Hiking'
	];
</script>

<div class="container">
	<main>
		<header>
			<h1>{personalDetails.name}</h1>
			<h2>{personalDetails.title}</h2>
			<p class="about-text">{about}</p>
			<div class="contact-links">
				<a href="mailto:{personalDetails.email}">Email</a>
				<a href="https://{personalDetails.github}" target="_blank" rel="noopener noreferrer"
					>GitHub</a
				>
			</div>
		</header>

		<section>
			<h3>Work Experience</h3>
			<div class="card-grid">
				{#each workExperience as job}
					<article class="card">
						<h4>{job.role}</h4>
						<p class="company-info">
							{job.company} &bull; <span class="duration">{job.duration}</span>
						</p>
						<p>{job.description}</p>
					</article>
				{/each}
			</div>
		</section>

		<section>
			<h3>Projects</h3>
			<div class="card-grid">
				{#each projects as project}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="card project-card"
					>
						<h4>{project.name}</h4>
						<p>{project.description}</p>
						<div class="tech-tags">
							{#each project.tech as tech}
								<span>{tech}</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</section>

		<section>
			<h3>Skills & Technologies</h3>
			<div class="skills-container">
				{#each Object.entries(skills) as [category, skillList]}
					<div class="skill-category">
						<h4>{category}</h4>
						<div class="tech-tags">
							{#each skillList as skill}
								<span>{skill}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h3>Hobbies & Past-times</h3>
			<p>{hobbies.join(', ')}</p>
		</section>
	</main>

	<footer>
		<p>Designed & Built by {personalDetails.name} &copy; {new Date().getFullYear()}</p>
	</footer>
</div>

<style>
	:root {
		--bg-color: #111111;
		--text-primary: #e0e0e0;
		--text-secondary: #a0a0a0;
		--card-bg: #1a1a1a;
		--border-color: #2e2e2e;
		--accent-color: #007bff;
		--accent-hover: #0056b3;
		--tag-bg: #252525;
		--tag-text: #cccccc;
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--text-primary);
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
		margin: 0;
		padding: 2rem 1rem;
		line-height: 1.6;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	header {
		text-align: center;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 2rem;
		margin-bottom: 1rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0.25rem;
		font-weight: 700;
	}

	h2 {
		font-size: 1.5rem;
		color: var(--text-secondary);
		font-weight: 400;
		margin-top: 0;
	}

	h3 {
		font-size: 1.75rem;
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 0.5rem;
		margin-bottom: 1.5rem;
	}

	h4 {
		font-size: 1.2rem;
		color: var(--text-primary);
		margin: 0 0 0.25rem 0;
	}

	p {
		margin: 0 0 1rem 0;
		color: var(--text-secondary);
	}

	.about-text {
		max-width: 600px;
		margin: 1.5rem auto;
		color: var(--text-primary);
	}

	.contact-links {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		margin-top: 1rem;
	}

	.contact-links a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.contact-links a:hover {
		color: var(--accent-hover);
		text-decoration: underline;
	}

	.card-grid {
		display: grid;
		gap: 1.5rem;
	}

	.card {
		background-color: var(--card-bg);
		border: 1px solid var(--border-color);
		padding: 1.5rem;
		border-radius: 8px;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}

	a.card {
		text-decoration: none;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	.company-info {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.duration {
		font-style: italic;
		font-weight: 400;
		color: var(--text-secondary);
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.tech-tags span {
		background-color: var(--tag-bg);
		color: var(--tag-text);
		padding: 0.25rem 0.75rem;
		border-radius: 16px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.skills-container {
		display: grid;
		gap: 1.5rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.skill-category h4 {
		margin-bottom: 1rem;
	}

	footer {
		text-align: center;
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-color);
		color: var(--text-secondary);
		font-size: 0.9rem;
	}
</style>
