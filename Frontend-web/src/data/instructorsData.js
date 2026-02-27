// Dummy Instructor/Faculty Data
export const instructorsData = [
    {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        title: 'Senior Software Architect',
        expertise: 'Full Stack Development, Cloud Computing, System Design',
        image: import.meta.env.BASE_URL + 'images/lfc-e1699336877330.png',
        totalLearners: 12345,
        activeLearners: 4820,
        totalCourses: 6,
        activeCourses: 4,
        averageRating: 4.8,
        reviewsCount: 234,
        lastUpdated: 'Jan 2025',
        yearsExperience: 15,
        completionRate: 92,
        aboutShort: 'Passionate educator with 15+ years of experience in software development and teaching. Specialized in Full Stack Development, Cloud Computing, and System Design.',
        aboutFull: `Dr. Rajesh Kumar is a renowned software architect and educator with over 15 years of industry experience. He has worked with leading tech companies including Google, Microsoft, and Amazon.

His teaching philosophy centers around practical, hands-on learning combined with solid theoretical foundations. He believes in making complex concepts accessible to everyone.

Dr. Kumar holds a Ph.D. in Computer Science from IIT Delhi and has published numerous papers on distributed systems and machine learning. He has trained over 12,000 students worldwide.`,
        socialLinks: {
            linkedin: 'https://linkedin.com/in/instructor',
            email: 'instructor@learningforcareer.com',
            facebook: 'https://facebook.com/instructor',
            twitter: 'https://twitter.com/instructor'
        }
    },
    {
        id: 2,
        name: 'Prof. Priya Sharma',
        title: 'Data Science Expert',
        expertise: 'Machine Learning, AI, Python, Data Analytics',
        image: import.meta.env.BASE_URL + 'images/lfc-e1699336877330.png',
        totalLearners: 9876,
        activeLearners: 3210,
        totalCourses: 4,
        activeCourses: 3,
        averageRating: 4.9,
        reviewsCount: 189,
        lastUpdated: 'Feb 2025',
        yearsExperience: 12,
        completionRate: 95,
        aboutShort: 'Leading expert in Data Science and AI with 12+ years of industry experience. Former Data Scientist at Facebook and Netflix.',
        aboutFull: `Prof. Priya Sharma is a leading expert in Data Science and Artificial Intelligence with extensive industry experience. She has worked at top tech companies like Facebook and Netflix, building recommendation systems and ML models.

She specializes in making complex mathematical concepts easy to understand through real-world examples and hands-on projects. Her courses have helped thousands of students transition into data science careers.

Priya holds a Master's degree from Stanford University and is a frequent speaker at AI conferences worldwide.`,
        socialLinks: {
            linkedin: 'https://linkedin.com/in/priya-sharma',
            email: 'priya@learningforcareer.com',
            facebook: 'https://facebook.com/priyasharma',
            twitter: 'https://twitter.com/priyasharma'
        }
    },
    {
        id: 3,
        name: 'Amit Patel',
        title: 'Mobile App Developer',
        expertise: 'React Native, Flutter, iOS, Android Development',
        image: import.meta.env.BASE_URL + 'images/lfc-e1699336877330.png',
        totalLearners: 8543,
        activeLearners: 2870,
        totalCourses: 5,
        activeCourses: 5,
        averageRating: 4.7,
        reviewsCount: 156,
        lastUpdated: 'Dec 2024',
        yearsExperience: 10,
        completionRate: 88,
        aboutShort: 'Expert mobile developer with 10+ years building cross-platform apps. Published 50+ apps on App Store and Play Store.',
        aboutFull: `Amit Patel is a seasoned mobile app developer who has built and published over 50 applications on both iOS and Android platforms. He specializes in cross-platform development using React Native and Flutter.

With experience at companies like Uber and Airbnb, Amit brings real-world industry practices to his teaching. He focuses on building production-ready apps with clean architecture and best practices.

Amit is passionate about helping developers ship their first app and has mentored hundreds of students through their app development journey.`,
        socialLinks: {
            linkedin: 'https://linkedin.com/in/amit-patel',
            email: 'amit@learningforcareer.com',
            facebook: 'https://facebook.com/amitpatel',
            twitter: 'https://twitter.com/amitpatel'
        }
    },
    {
        id: 4,
        name: 'Dr. Sneha Reddy',
        title: 'DevOps & Cloud Architect',
        expertise: 'AWS, Azure, Docker, Kubernetes, CI/CD',
        image: import.meta.env.BASE_URL + 'images/lfc-e1699336877330.png',
        totalLearners: 7234,
        activeLearners: 2150,
        totalCourses: 3,
        activeCourses: 2,
        averageRating: 4.8,
        reviewsCount: 142,
        lastUpdated: 'Feb 2025',
        yearsExperience: 14,
        completionRate: 91,
        aboutShort: 'Cloud infrastructure expert with 14+ years experience. AWS & Azure certified architect. Previously at Amazon Web Services.',
        aboutFull: `Dr. Sneha Reddy is a cloud infrastructure and DevOps expert with deep expertise in AWS and Azure. She previously worked at Amazon Web Services helping enterprise clients migrate to the cloud.

She specializes in infrastructure automation, containerization, and building scalable cloud architectures. Her practical approach helps students understand complex cloud concepts through hands-on labs.

Sneha holds multiple cloud certifications and a Ph.D. in Distributed Systems. She is passionate about teaching DevOps best practices and modern deployment strategies.`,
        socialLinks: {
            linkedin: 'https://linkedin.com/in/sneha-reddy',
            email: 'sneha@learningforcareer.com',
            facebook: 'https://facebook.com/snehareddy',
            twitter: 'https://twitter.com/snehareddy'
        }
    }
];

// Helper function to get instructor by ID
export const getInstructorById = (id) => {
    return instructorsData.find(instructor => instructor.id === parseInt(id));
};

// Helper function to get instructor by name
export const getInstructorByName = (name) => {
    return instructorsData.find(instructor => instructor.name === name);
};

export default instructorsData;
