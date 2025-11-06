import BlogCard from "../Components/BlogCard";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Tech Innovators Ltd. Joins as Platinum Partner",
            image: "Assets/Companies/tech_innovators.jpg",
            excerpt:
                "Tech Innovators Ltd. joins IEEE BranchFest 2025 as our Platinum Partner, bringing expertise in AI-driven solutions and IoT integration.",
            content:
                "Tech Innovators Ltd. has officially partnered with IEEE BranchFest 2025 as a Platinum Sponsor. Their participation highlights the growing intersection of academia and industry in emerging technologies. The company will host an exclusive workshop on Smart IoT Systems, AI-Powered Infrastructure, and future-ready business ecosystems...",
        },
        {
            id: 2,
            title: "RoboTech Solutions to Host Robotics Challenge",
            image: "Assets/Companies/robotics.jpg",
            excerpt:
                "RoboTech Solutions will host an interactive Robotics Challenge at BranchFest, offering hands-on exposure to modern automation.",
            content:
                "RoboTech Solutions, a leader in industrial and educational robotics, will conduct a Robotics Challenge at IEEE BranchFest 2025. Participants will work on real-world robot design problems, competing to develop autonomous solutions. This partnership aims to inspire young minds to enter the world of robotics and automation.",
        },
        {
            id: 3,
            title: "DataSoft Bangladesh Signs Collaboration Agreement",
            image: "Assets/Companies/datasoft.jpg",
            excerpt:
                "DataSoft Bangladesh has entered a collaboration agreement with IEEE BUP Student Branch to promote smart innovation at BranchFest.",
            content:
                "DataSoft Bangladesh Limited, one of the country's premier software development companies, has signed an MoU with IEEE BUP Student Branch. The collaboration will enable workshops, mentorship programs, and project showcases focusing on sustainable technology and data-driven innovations.",
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,255,0.08),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Company Blogs & Announcements
                </h2>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
