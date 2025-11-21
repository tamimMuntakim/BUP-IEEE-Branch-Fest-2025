import BlogCard from "../Components/BlogCard";
import aqua_paint_banner from "../assets/Logo/Ap.png";
import ostad_banner from "../assets/Logo/ostaad_banner.jpeg";
// import health_care_banner from "../assets/Logo/health_care_banner.png";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Aqua Paints",
            image: aqua_paint_banner,
            excerpt:
                "Aqua Paints, a legacy-driven and innovation-focused paint brand, continues to lead through quality, sustainability, and advanced manufacturing.",
            content: `
Aqua Paints is one of Bangladesh's leading paint and coating companies, known for combining legacy with innovation and high-quality, eco-friendly products.

About Aqua Paints:
Aqua Paints is a brand under Octagon Fibres & Chemicals, a major player in Bangladesh’s paints and specialty chemicals sector.
The company’s legacy traces back to Elite Paints, founded in 1952 by Serajuddin Ahmed.
The Aqua brand was later launched by the founding family to blend heritage with modern quality.
Their headquarters is in Gulshan, Dhaka, with a manufacturing facility in the Tongi Industrial Area.


Vision, Mission & Values:
Vision: To provide high-quality paint products at competitive prices.
Mission: Utilize legacy, human capital, and future-driven technologies to create world-class paints for Bangladesh.
Core Values:
- Accountability
- Excellence
- Innovation
- Collaboration
- Initiative
- Respect
- Integrity


Why Choose Aqua Paints? (Unique Selling Points):
- High Performance: Premium Silk Emulsion and Outer Coat products offer excellent adhesion, coverage, and durability.
- Rich Color Range: Their “Colour Factory” provides over 1,000 shades with precise color-matching.
- Quality Ingredients: Uses top-grade raw materials like titanium dioxide and acrylic resins.
- Environment Friendly: Focused on low-VOC paints and sustainable production.
- Local Manufacturing: Produces key raw materials in-house, ensuring quality and cost control.
- Strong Customer Support: Known for project guidance, timely delivery, and responsive service.


Leadership Team:
- Ramzul Seraj – Managing Director, chemical engineer trained in the UK; leads product development and quality.
- Shayaan Seraj – Director, drives brand modernization and innovation.
- S.M. Ahsanul Karim – Executive Director overseeing R&D, production, and their Colour Factory.


Innovation & Product Development:
Aqua Paints is vertically integrated, manufacturing both paints and core raw materials like resins.
Their paints are engineered for Bangladesh’s climate — heat, humidity, and salinity.
They emphasize eco-friendly formulations with low or zero VOC.
Digital innovations include:
- InstaColor tinting machines
- AI-based color recommendation tools

The company is also pursuing international certifications, such as SIRIM QAS International, to elevate global standards.


Social & Community Contributions:
Aqua Paints supports youth-led beautification initiatives.
They provide paints and umbrellas to volunteers working to transform vandalized public walls into art.
Their CSR efforts reflect their commitment to community development.


Safety, Quality & Standards:
Aqua ensures safety through strict TDS guidelines for application, ventilation, and handling.
Their paints are free from added lead, mercury, arsenic, and chromium—making them safer and environmentally compliant.


Future Outlook:
Aqua Paints plans to expand regionally using its technical capability and integrated manufacturing.
Climate-adapted coatings such as anti-saline and elastomeric roof coatings position them for growth.
They aim to capture markets in South Asia, the Middle East, and Africa.
With AI tools and digital design solutions, Aqua continues appealing to modern homeowners, designers, and architects.
`,
        },
        {
            id: 2,
            title: "Ostad",
            image: ostad_banner,
            excerpt:
                "Ostad is Bangladesh’s leading live-learning and skill development platform, focusing on job-ready skills and industry-aligned training.",
            content: `
Ostad is a leading Bangladeshi live-learning and skill development platform founded in October 2020. It provides interactive, instructor-led training focused on job-ready skills. Their model emphasizes live classes, hands-on tasks, and continuous learner support, bridging the gap between academic knowledge and industry expectations.

Ostad serves learners across Bangladesh, especially students and early-career professionals seeking structured, outcome-driven training.

Mission & Core Goals:
Mission: To empower individuals with practical, industry-aligned skills through interactive live programs and to support them in achieving meaningful employment opportunities.

Goals:
- Deliver live, engaging, task-based learning instead of passive pre-recorded tutorials.
- Maintain high learner engagement through daily tasks, streak monitoring, and weekly assessments.
- Create a skilled and job-ready talent pool for the Bangladeshi tech and corporate sectors.
- Provide career and placement support, including CV building, mock interviews, and talent showcases.
- Offer corporate upskilling programs through Ostad Business.

Founding Story:
Ostad was established in 2020 by a group of young Bangladeshi graduates, including KUET alumni. Their motivation:
- University students often graduate without industry-focused skills.
- Many learners lack access to quality mentorship or structured, accountable learning.

Ostad was built to solve this through real-time learning, small cohort mentorship, and a job-outcome-driven curriculum.

Core Offerings:
1. Live, Instructor-Led Bootcamps
- Multiple live classes weekly
- Dedicated instructors
- Task-based daily curriculum
- Assignment feedback and constant support

2. Job Placement Services
- Dedicated placement team
- Portfolio and CV building
- Talent showcase to partner companies
- Interview preparation and mock sessions

3. Corporate Training (Ostad Business)
- Customized training for companies
- Leadership, communication, data skills, technical upskilling
- Helps companies develop in-house talent

4. Community Programs
- Weekly free sessions or webinars
- Success story features
- Learner communities for peer support

Impact & Metrics:
According to Ostad publicly:
- 125,000+ users
- 15,000+ graduates
- 9,000+ successful job placements

Partnerships & Ecosystem:
Notable collaborations include Teachmint (India) to improve live-class delivery and reduce bandwidth issues, and corporate partners through Ostad Business. They maintain an active digital presence with community-driven content.

How Ostad Helps the Community:
- Accessible Skill Development: Affordable, structured training for students and young professionals.
- Job Readiness & Placement: Placement team connects graduates to employers.
- Industry-Aligned Learning: Courses adapt to market needs (programming, design, Excel, communication, business skills).
- Empowering Local Talent: Instructors are mostly Bangladeshi professionals.
- Supporting Lifelong Learning: Free workshops, webinars, and career guidance events.

Strengths:
- Strong emphasis on live, interactive instruction.
- High engagement through structured tasks and accountability mechanisms.
- Placement-focused services and high reported job placement numbers.
- Active online community and consistent success stories.

Sources:
- Ostad About Us page
- Ostad course and placement information
- Success Story pages
- Future Startup article on Ostad–Teachmint partnership
- Prothom Alo feature on founders and journey
- Company social media profiles
`,
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
