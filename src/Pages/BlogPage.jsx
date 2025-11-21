import BlogCard from "../Components/BlogCard";
import sponsor_blogs_img from "../assets/Photos/sponsor_blogs.png";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Tech Innovators Ltd. Joins as Platinum Partner",
            image: sponsor_blogs_img,
            excerpt:
                "Tech Innovators Ltd. joins IEEE BranchFest 2025 as our Platinum Partner, bringing expertise in AI-driven solutions and IoT integration.",
            content:
                "Tech Innovators Ltd. has officially partnered with IEEE BranchFest 2025 as a Platinum Sponsor. Their participation highlights the growing intersection of academia and industry in emerging technologies. The company will host an exclusive workshop on Smart IoT Systems, AI-Powered Infrastructure, and future-ready business ecosystems...",
        },
        {
            id: 2,
            title: "RoboTech Solutions to Host Robotics Challenge",
            image: sponsor_blogs_img,
            excerpt:
                "RoboTech Solutions will host an interactive Robotics Challenge at BranchFest, offering hands-on exposure to modern automation.",
            content:
                "RoboTech Solutions, a leader in industrial and educational robotics, will conduct a Robotics Challenge at IEEE BranchFest 2025. Participants will work on real-world robot design problems, competing to develop autonomous solutions. This partnership aims to inspire young minds to enter the world of robotics and automation.",
        },
        {
            id: 3,
            title: "DataSoft Bangladesh Signs Collaboration Agreement",
            image: sponsor_blogs_img,
            excerpt:
                "DataSoft Bangladesh has entered a collaboration agreement with IEEE BUP Student Branch to promote smart innovation at BranchFest.",
            content:
                "DataSoft Bangladesh Limited, one of the country's premier software development companies, has signed an MoU with IEEE BUP Student Branch. The collaboration will enable workshops, mentorship programs, and project showcases focusing on sustainable technology and data-driven innovations.",
        },
        {
            id: 4,
            title: "Aqua Paints Partners with IEEE BranchFest 2025",
            image: sponsor_blogs_img,
            excerpt:
                "Aqua Paints has joined IEEE BranchFest 2025 as an official sponsor, supporting creativity and sustainable innovation.",
            content:
                "Aqua Paints, one of Bangladesh's leading paint and coating companies, has partnered with IEEE BranchFest 2025. Known for their high-quality and eco-friendly products, Aqua Paints aims to inspire young innovators and promote sustainable practices through this collaboration.",
        },
        {
            id: 5,
            title: "Health Care Pharmaceuticals Sponsors IEEE BranchFest 2025",
            image: sponsor_blogs_img,
            excerpt:
                "Health Care Pharmaceuticals joins IEEE BranchFest 2025 to support youth-driven innovation and scientific excellence.",
            content:
                "Health Care Pharmaceuticals Limited, a leading pharmaceutical manufacturer in Bangladesh, has partnered with IEEE BranchFest 2025. Through this sponsorship, the company aims to encourage young talents and promote advancements in science, technology, and healthcare innovation.",
        },
        {
            id: 6,
            title: "Ingenious Partners with IEEE BranchFest 2025",
            image: sponsor_blogs_img,
            excerpt:
                "Ingenious Community collaborates with IEEE BranchFest 2025 to foster creativity, technology, and practical innovation.",
            content:
                "Ingenious, a growing name in technology and creative solutions, has joined as a sponsor for IEEE BranchFest 2025. The partnership aims to empower students with opportunities in innovation, problem-solving, and modern tech applications, contributing to a more impactful event experience.",
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,255,0.08),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(138,43,226,0.1),transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r/hsl from-sky-600 to-emerald-400 text-center mb-12">
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
