export const siteConfig = {
	name: 'Marwan Haithem Amin | Computer Engineer',
	description:
		'Computer Engineering graduate specializing in network engineering, robotics, and artificial intelligence.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		// {
		// 	title: 'Blog',
		// 	href: '/blog',
		// },
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/AminMarwan',
		linkedin: 'https://www.linkedin.com/in/marwanamin/',
		// twitter: 'https://twitter.com/yourusername',
		// facebook: 'https://facebook.com/yourusername',
		// instagram: 'https://instagram.com/yourusername',
		// whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:maro2004.mf@gmail.com',
		phone: 'tel:+97466338545',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Research Intern',
		company: 'Qatar Computing Research Institute (QCRI)',
		location: 'Doha, Qatar',
		startDate: 'May 2026',
		endDate: 'Sep 2026',
		description: [
		'Developed and evaluated federated learning and federated unlearning workflows for oral cancer classification.',
		'Experimented with ResNet-18, FedAvg, FedProx, FedBN, and FedMOON.',
		'Investigated knowledge distillation and privacy-preserving machine learning approaches.',
		],
		technologies: [
		'Python',
		'PyTorch',
		'Flower',
		'Federated Learning',
		'Machine Learning',
		],
	},
	/*
		Add more experiences using the same structure 
	*/

	// {
	// 	title: 'Research Assistant',
	// 	company: 'University Lab',
	// 	location: 'City, Country',
	// 	startDate: 'Jan 2023',
	// 	endDate: 'Apr 2023',
	// 	description: [
	// 		'Assisted in research focusing on advanced materials for mechanical applications',
	// 		'Conducted literature reviews and compiled research findings',
	// 		'Performed data analysis and visualization of experimental results',
	// 	],
	// 	technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	// },
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{ 	// HARIS
		title: 'HARIS — Hazard Autonomous Robotic Intervention System',
			description:
			'Developed an autonomous quadruped robot for industrial gas leak detection and valve manipulation, integrating computer vision, robotics, and intelligent control.',
			image: '/projects/HARIS.jpg',
			tags: [ 'Robotics', 'YOLOv11', 'ROS 2', 'Python', 'Computer Vision' ],
			link: 'https://drive.google.com/file/d/1FzHPajP3JJ5s2jGz5qsMm_hAjDZyzJIr/view?usp=sharing',
			repo: 'https://github.com/AminMarwan/HARIS-DRL',
	},
	{	// QCRI
		title: 'DA-FUSED: Domain-Aware Federated Unlearning via Selective Sparse Adapters for Oral Cancer Detection',
		description:
			'Developed and evaluated privacy-preserving machine learning approaches for oral cancer classification using multi-hospital datasets and federated learning and unlearning.',
		image: '/projects/DA-FUSED.jpg',
		tags: [ 'PyTorch', 'Flower', 'Federated Learning', 'Federated Unlearning', 'Deep Learning', 'ResNet-18',],
		repo: 'https://github.com/RanemAlhasan/FL-FU-ORAL3',
	},
	{ // RNMS-PR
		title: 'Remote Network Monitoring System (RNMS-PR)',
		description:
			'Developed a Raspberry Pi-based network monitoring solution using Prometheus and Grafana to collect, analyze, and visualize real-time network performance metrics.',
		image: '/projects/RNMS-PR.jpg',
		tags: ['Raspberry PI', 'Prometheus', 'Grafana', 'Network Monitoring'],
		repo: 'https://github.com/RNMS-PR/RNMS-PR',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Computer Engineering',
		institution: 'Qatar University',
		location: 'Doha, Qatar',
		startDate: 'Aug 2021',
		endDate: 'Jul 2026',
		gpa: '4.00/4.00',
		achievements: [
			'Minor in Engineering Project Management',
			'Amiri Academic Excellence Scholarship',
			'Vide President\'s List (All Semesters)',
			'Dean\'s List (All Semesters)',
			
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Cisco Certified Network Associate (CCNA)',
		issuer: 'Cisco',
		date: 'Oct 2026',
	},
	{
		title: 'SAP Certified – Implementation Consultant – SAP S/4HANA Cloud Private Edition',
		issuer: 'SAP',
		date: 'Aug 2026',
	},
	{
		title: 'Cybersecurity Fundamentals',
		issuer: 'IBM SkillsBuild',
		date: 'Jun 2024',
	},
	{
		title: 'Artificial Intelligence Fundamentals',
		issuer: 'IBM SkillsBuild',
		date: 'Jun 2024',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Computer Networking', level: 9, category: 'technical' },
	{ name: 'Routing & Switching', level: 9, category: 'technical' },
	{ name: 'Network Security', level: 7, category: 'technical' },
	{ name: 'Machine Learning', level: 8, category: 'technical' },
	{ name: 'Computer Vision', level: 8, category: 'technical' },
	{ name: 'Embedded Systems', level: 7, category: 'technical' },

	// Software Skills
	{ name: 'Python', level: 8, category: 'software' },
	{ name: 'PyTorch', level: 7, category: 'software' },
	{ name: 'Cisco Packet Tracer', level: 9, category: 'software' },
	{ name: 'MATLAB', level: 8, category: 'software' },
	{ name: 'Git & GitHub', level: 7, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Research', level: 9, category: 'soft' },	
	{ name: 'Adaptability', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Communication', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 9, category: 'language' },
	{ name: 'Arabic', level: 10, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];