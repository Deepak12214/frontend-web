export const mockCategories = [
    { name: "All", slug: "all" },
    { name: "Technology", slug: "technology" },
    { name: "Career", slug: "career" },
    { name: "Design", slug: "design" },
    { name: "Marketing", slug: "marketing" }
];

export const mockBlogs = [
    {
        id: "1",
        title: "How to Build a Successful Career in Software Engineering",
        slug: "how-to-build-a-successful-career-in-software-engineering",
        excerpt: "A comprehensive guide on what it takes to thrive in the ever-evolving tech industry, focusing on both soft and hard skills.",
        content: `
            <p>A comprehensive guide on what it takes to thrive in the ever-evolving tech industry, focusing on both soft and hard skills.</p>
            <p>Software engineering is more than just writing code; it's about solving problems and continuously learning. The tech landscape changes so rapidly that adapting to new paradigms is arguably the most valuable skill you can cultivate.</p>
            <h2>1. Master the Fundamentals</h2>
            <p>Before diving into the latest frameworks and libraries, you need a solid grasp of core computer science concepts. This includes data structures, algorithms, and system design principles.</p>
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80" alt="Coding on monitors" />
            <p>Consider the fundamentals as the foundation of your house. Without them, whatever you build on top will eventually crumble when exposed to scale or complexity.</p>
            <blockquote>"The most important work you do in software engineering is the thinking that happens before you write a single line of code."</blockquote>
            <h2>2. Embrace Continuous Learning</h2>
            <p>Technology moves fast. What was cutting edge three years ago might be legacy today. To stay relevant, you must adopt a mindset of continuous education.</p>
            <ul>
                <li>Follow industry leaders and read technical blogs.</li>
                <li>Contribute to open-source projects.</li>
                <li>Attend conferences and local meetups.</li>
                <li>Build side projects outside your comfort zone.</li>
            </ul>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80" alt="Laptop and coffee" />
            <h2>3. Soft Skills are Hard Skills</h2>
            <p>Many junior developers mistakenly believe that coding prowess alone is enough to guarantee success. However, communication, empathy, and teamwork are equally crucial.</p>
            <p>You'll spend surprisingly large amounts of time reading other people's code, reviewing pull requests, and communicating complex technical ideas to non-technical stakeholders.</p>
            <h3>Conclusion</h3>
            <p>Building a successful career in software engineering is a marathon, not a sprint. Take care of your mental health, seek out mentorship, and never lose your curiosity.</p>
        `,
        faqs: [
            {
                question: "What is the most important skill for a junior developer?",
                answer: "Continuous learning and adaptability. Building a strong foundation in data structures and problem-solving matters more than learning a specific framework."
            },
            {
                question: "Do I need a Computer Science degree to get into software engineering?",
                answer: "While a degree helps secure interviews, the tech industry increasingly values skills, projects, and practical problem-solving. Many successful engineers are self-taught or bootcamp graduates."
            },
            {
                question: "How important are soft skills really?",
                answer: "Extremely. As you grow beyond a junior level, communication, documentation, and the ability to work cross-functionally become the deciding factors for career growth."
            }
        ],
        publishedAt: "2026-01-15T12:00:00Z",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
        },
        category: { name: "Career" },
        isFeatured: true,
        readTime: 5,
        tags: ["Career", "Software Engineering", "Tech"]
    },
    {
        id: "2",
        title: "The Future of Artificial Intelligence in Education",
        slug: "the-future-of-artificial-intelligence-in-education",
        excerpt: "Explore how AI is revolutionizing the way we learn, making education more accessible and personalized for everyone.",
        content: "<p>Explore how AI is revolutionizing the way we learn, making education more accessible and personalized for everyone.</p><p>Artificial Intelligence bridges the gap between traditional and modern learning.</p>",
        publishedAt: "2026-02-05T08:30:00Z",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
        },
        category: { name: "Technology" },
        isFeatured: false,
        readTime: 4,
        tags: ["AI", "Education", "Technology"]
    },
    {
        id: "3",
        title: "Mastering UI/UX Principles for Modern Web Apps",
        slug: "mastering-ui-ux-principles",
        excerpt: "Design matters. Learn the core principles of creating user interfaces that engage and delight your audience.",
        content: "<p>Design matters. Learn the core principles of creating user interfaces that engage and delight your audience.</p>",
        publishedAt: "2026-02-18T14:45:00Z",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
        },
        category: { name: "Design" },
        isFeatured: false,
        readTime: 6,
        tags: ["Design", "UI/UX", "Web Development"]
    },
    {
        id: "4",
        title: "Digital Marketing Strategies for the Next Decade",
        slug: "digital-marketing-strategies",
        excerpt: "Stay ahead of the competition by adapting to the latest digital marketing trends and strategies that drive growth.",
        content: "<p>Stay ahead of the competition by adapting to the latest digital marketing trends and strategies that drive growth.</p>",
        publishedAt: "2026-02-20T10:15:00Z",
        featuredImage: {
            url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80"
        },
        category: { name: "Marketing" },
        isFeatured: false,
        readTime: 3,
        tags: ["Marketing", "Digital Marketing", "Trends"]
    }
];
