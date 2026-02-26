// Mock data for course categories
export const courseCategoriesData = [
    {
        id: 1,
        name: 'Data Analyst',
        slug: 'data-analyst',
        description: 'Master the art of turning raw data into actionable insights. Learn data visualization, statistical analysis, SQL, Python, and business intelligence tools to make data-driven decisions.',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        skills: ['Python', 'SQL', 'Excel', 'Tableau', 'Power BI', 'Statistics', 'Data Visualization'],
        salary: {
            lowest: '3L',
            average: '6L',
            highest: '12L'
        },
        courses: [
            {
                id: 101,
                title: 'Complete Data Analyst Bootcamp',
                description: 'From Excel to advanced Python for data analysis',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                instructor: 'Amit Patel',
                rating: 4.8,
                reviewsCount: 2340,
                price: 10134.99,
                discountPrice: 5999,
                level: 'Beginner to Advanced',
                duration: '40 hours',
                students: 8543
            },
            {
                id: 102,
                title: 'SQL for Data Analysis Masterclass',
                description: 'Master SQL queries, joins, and database management',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                instructor: 'Priya Sharma',
                rating: 4.9,
                reviewsCount: 1890,
                price: 8999.99,
                discountPrice: 4999,
                level: 'Intermediate',
                duration: '25 hours',
                students: 6234
            },
            {
                id: 103,
                title: 'Python for Data Science',
                description: 'Pandas, NumPy, Matplotlib for data analysis',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
                instructor: 'Rajesh Kumar',
                rating: 4.7,
                reviewsCount: 3120,
                price: 9999.99,
                discountPrice: 5499,
                level: 'Beginner',
                duration: '35 hours',
                students: 12450
            },
            {
                id: 104,
                title: 'Tableau for Business Intelligence',
                description: 'Create stunning dashboards and visualizations',
                image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=300&fit=crop',
                instructor: 'Neha Gupta',
                rating: 4.6,
                reviewsCount: 980,
                price: 7999.99,
                discountPrice: 3999,
                level: 'Intermediate',
                duration: '20 hours',
                students: 4560
            },
            {
                id: 105,
                title: 'Advanced Excel for Analysts',
                description: 'Power Query, pivot tables, macros, and VBA',
                image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
                instructor: 'Vikram Singh',
                rating: 4.8,
                reviewsCount: 1560,
                price: 5999.99,
                discountPrice: 2999,
                level: 'Intermediate',
                duration: '18 hours',
                students: 7890
            },
            {
                id: 106,
                title: 'Power BI Complete Guide',
                description: 'DAX, data modeling, and report creation',
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop',
                instructor: 'Anita Desai',
                rating: 4.7,
                reviewsCount: 1230,
                price: 8499.99,
                discountPrice: 4499,
                level: 'Beginner to Intermediate',
                duration: '28 hours',
                students: 5670
            },
            {
                id: 107,
                title: 'Statistics for Data Analysis',
                description: 'Hypothesis testing, regression, and probability',
                image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
                instructor: 'Dr. Suresh Reddy',
                rating: 4.9,
                reviewsCount: 890,
                price: 6999.99,
                discountPrice: 3499,
                level: 'Beginner',
                duration: '22 hours',
                students: 3450
            },
            {
                id: 108,
                title: 'Data Cleaning & Preparation',
                description: 'Handle missing data, outliers, and transformations',
                image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&h=300&fit=crop',
                instructor: 'Meera Iyer',
                rating: 4.5,
                reviewsCount: 670,
                price: 4999.99,
                discountPrice: 2499,
                level: 'Beginner',
                duration: '15 hours',
                students: 2890
            },
            {
                id: 109,
                title: 'Business Analytics with R',
                description: 'ggplot2, dplyr, and statistical modeling',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                instructor: 'Karthik Menon',
                rating: 4.6,
                reviewsCount: 540,
                price: 7499.99,
                discountPrice: 3999,
                level: 'Intermediate',
                duration: '30 hours',
                students: 4120
            },
            {
                id: 110,
                title: 'Data Analyst Interview Prep',
                description: 'SQL queries, case studies, and technical rounds',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
                instructor: 'Rohit Malhotra',
                rating: 4.8,
                reviewsCount: 1120,
                price: 3999.99,
                discountPrice: 1999,
                level: 'All Levels',
                duration: '12 hours',
                students: 6780
            },
            {
                id: 111,
                title: 'Real-world Data Projects',
                description: 'Build portfolio with 10+ industry projects',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                instructor: 'Simran Kaur',
                rating: 4.9,
                reviewsCount: 2010,
                price: 11999.99,
                discountPrice: 6999,
                level: 'Intermediate to Advanced',
                duration: '50 hours',
                students: 9340
            }
        ],
        universityPartners: [
            {
                name: 'IIT Delhi',
                logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg'
            },
            {
                name: 'IIM Bangalore',
                logo: 'https://www.iimb.ac.in/sites/all/themes/iimb/images/iimb-logo.svg'
            },
            {
                name: 'BITS Pilani',
                logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg'
            },
            {
                name: 'NIT Trichy',
                logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/NIT_Trichy_Logo.png'
            },
            {
                name: 'Delhi University',
                logo: 'https://upload.wikimedia.org/wikipedia/en/4/49/University_of_Delhi.svg'
            }
        ],
        topInstructors: [
            {
                id: 1,
                name: 'Amit Patel',
                title: 'Senior Data Scientist at Google',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                rating: 4.9,
                students: 8543,
                courses: 5,
                reviews: 2340
            },
            {
                id: 2,
                name: 'Priya Sharma',
                title: 'Lead Analyst at McKinsey',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                rating: 4.8,
                students: 6234,
                courses: 3,
                reviews: 1890
            },
            {
                id: 3,
                name: 'Rajesh Kumar',
                title: 'Data Analytics Manager at Amazon',
                image: 'https://randomuser.me/api/portraits/men/45.jpg',
                rating: 4.9,
                students: 12450,
                courses: 8,
                reviews: 3120
            }
        ],
        successStories: [
            {
                name: 'Sneha Reddy',
                image: 'https://randomuser.me/api/portraits/women/65.jpg',
                testimonial: 'The Data Analyst course completely transformed my career. I went from a fresher to landing a job at Flipkart in just 6 months!',
                newRole: 'Junior Data Analyst',
                company: 'Flipkart'
            },
            {
                name: 'Vikram Singh',
                image: 'https://randomuser.me/api/portraits/men/52.jpg',
                testimonial: 'Excellent curriculum and hands-on projects. The SQL and Tableau skills I learned here helped me secure a role at Zomato.',
                newRole: 'Business Analyst',
                company: 'Zomato'
            },
            {
                name: 'Ananya Gupta',
                image: 'https://randomuser.me/api/portraits/women/68.jpg',
                testimonial: 'Best investment I made in my career! The instructors are industry experts and the course content is up-to-date.',
                newRole: 'Data Analyst',
                company: 'Paytm'
            }
        ],
        blogs: [
            {
                title: 'Top 10 Data Analyst Skills You Need in 2024',
                description: 'Discover the most in-demand skills that every aspiring data analyst should master to land their dream job.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
                readTime: '5 min read',
                date: 'Feb 10, 2024'
            },
            {
                title: 'SQL vs Python: Which Language Should You Learn First?',
                description: 'A comprehensive comparison to help you decide which programming language to prioritize for data analysis.',
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
                readTime: '7 min read',
                date: 'Feb 8, 2024'
            },
            {
                title: 'How to Build a Data Analyst Portfolio That Gets You Hired',
                description: 'Step-by-step guide to creating a portfolio that showcases your skills and impresses recruiters.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
                readTime: '10 min read',
                date: 'Feb 5, 2024'
            },
            {
                title: 'From Zero to Data Analyst: A Beginner\'s Roadmap',
                description: 'Everything you need to know to start your journey as a data analyst from scratch.',
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
                readTime: '8 min read',
                date: 'Feb 1, 2024'
            },
            {
                title: 'Tableau vs Power BI: Which Tool is Right for You?',
                description: 'Compare the top two data visualization tools and find out which one suits your career goals.',
                image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop',
                readTime: '6 min read',
                date: 'Jan 28, 2024'
            }
        ],
        faqs: [
            {
                question: 'What is the duration of the Data Analyst course?',
                answer: 'Our Data Analyst courses range from 15 to 50 hours depending on the level and depth. Most comprehensive bootcamps are around 40-50 hours and can be completed in 2-3 months at your own pace.'
            },
            {
                question: 'Do I need prior programming experience?',
                answer: 'No prior programming experience is required for beginner courses. We start from the basics and gradually build up to advanced concepts. However, basic computer literacy is recommended.'
            },
            {
                question: 'Will I get a certificate after completion?',
                answer: 'Yes, you will receive a verified certificate upon successful completion of the course, which you can share on LinkedIn and add to your resume.'
            },
            {
                question: 'What tools will I learn in this course?',
                answer: 'You will learn industry-standard tools including Excel, SQL, Python (Pandas, NumPy, Matplotlib), Tableau, Power BI, and statistical analysis techniques.'
            },
            {
                question: 'Is there placement assistance available?',
                answer: 'Yes, we provide comprehensive placement assistance including resume building, mock interviews, and direct referrals to partner companies.'
            },
            {
                question: 'Can I access the course materials after completion?',
                answer: 'Absolutely! You get lifetime access to all course materials, including future updates and additional resources.'
            }
        ]
    },
    {
        id: 2,
        name: 'Web Development',
        slug: 'web-development',
        description: 'Build modern, responsive websites and web applications from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and full-stack development.',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
        salary: {
            lowest: '4L',
            average: '8L',
            highest: '20L'
        },
        courses: [
            {
                id: 201,
                title: 'Complete Web Development Bootcamp',
                description: 'From basics to full-stack development',
                image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=300&fit=crop',
                instructor: 'Aryan Mehta',
                rating: 4.9,
                reviewsCount: 5670,
                price: 12999.99,
                discountPrice: 7999,
                level: 'Beginner to Advanced',
                duration: '60 hours',
                students: 15670
            }
        ]
    }
];

export default courseCategoriesData;
