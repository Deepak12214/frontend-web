/**
 * Mock data for career paths
 * This data will be replaced with API calls once backend is ready
 * Use with TanStack Query: const { data: careers } = useCareers()
 */

export const careers = [
    {
        id: 1,
        title: "Software Developer",
        description: "Build innovative applications",
        medianSalary: "₹8-15 LPA",
        jobAvailability: "High"
    },
    {
        id: 2,
        title: "Data Analyst",
        description: "Turn data into insights",
        medianSalary: "₹6-12 LPA",
        jobAvailability: "High"
    },
    {
        id: 3,
        title: "Digital Marketing Specialist",
        description: "Drive brand growth",
        medianSalary: "₹5-10 LPA",
        jobAvailability: "Medium to High"
    },
    {
        id: 4,
        title: "Product Manager",
        description: "Lead cross-functional teams",
        medianSalary: "₹12-25 LPA",
        jobAvailability: "High"
    }
];

export default careers;
