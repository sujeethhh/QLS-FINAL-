import { Container, Grid } from "@mui/material";
import Link from "next/link";

export const metadata = {
  title: "Insights & Blog | QuickLearn Systems",
  description: "Stay updated with the latest trends in IT Service Management, Project Management, Agile, and professional development.",
};

export default function Insights() {
  const blogPosts = [
    {
      id: 1,
      title: "ITIL 4 vs ITIL v3: Key Differences and Migration Guide",
      excerpt: "Understand the fundamental changes in ITIL 4 and how to successfully transition from ITIL v3.",
      category: "ITIL",
      readTime: "5 min read",
      date: "February 1, 2026",
      image: "/blog2.jpg",
      slug: "itil-4-vs-itil-v3-migration-guide"
    },
    {
      id: 2,
      title: "PMP Certification: Your Path to Project Management Excellence",
      excerpt: "Discover why PMP certification is crucial for project managers and how to prepare effectively.",
      category: "Project Management",
      readTime: "7 min read",
      date: "January 28, 2026",
      image: "/PMPC.jpg",
      slug: "pmp-certification-path-to-excellence"
    },
    {
      id: 3,
      title: "SAFe Agile Framework: Scaling Agile for Enterprise Success",
      excerpt: "Learn how SAFe helps large organizations implement Agile practices at scale.",
      category: "Agile",
      readTime: "6 min read",
      date: "January 25, 2026",
      image: "/SAFe.jpg",
      slug: "safe-agile-framework-enterprise-success"
    },
    {
      id: 4,
      title: "DevOps Best Practices: Bridging Development and Operations",
      excerpt: "Essential DevOps practices that improve collaboration and accelerate delivery.",
      category: "DevOps",
      readTime: "8 min read",
      date: "January 22, 2026",
      image: "/dev_ops.png",
      slug: "devops-best-practices-development-operations"
    },
    {
      id: 5,
      title: "Six Sigma Green Belt: Quality Management Fundamentals",
      excerpt: "Master the basics of Six Sigma methodology and improve process quality.",
      category: "Quality Management",
      readTime: "5 min read",
      date: "January 20, 2026",
      image: "/green_belt.png",
      slug: "six-sigma-green-belt-quality-fundamentals"
    },
    {
      id: 6,
      title: "ISTQB Foundation: Software Testing Career Starter",
      excerpt: "Begin your software testing career with ISTQB Foundation certification.",
      category: "Software Testing",
      readTime: "4 min read",
      date: "January 18, 2026",
      image: "/ISTQB.jpg",
      slug: "istqb-foundation-software-testing-career"
    }
  ];

  const categories = ["All", "ITIL", "Project Management", "Agile", "DevOps", "Quality Management", "Software Testing"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#9F2D2D] to-blue-700 text-white py-16">
        <Container maxWidth="lg">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay ahead with expert insights on IT Service Management, Project Management, 
              Agile methodologies, and professional development trends.
            </p>
          </div>
        </Container>
      </div>

      {/* Content Section */}
      <Container maxWidth="lg" className="py-12">
        <Grid container spacing={4}>
          {/* Category Filter */}
          <Grid item xs={12}>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-[#9F2D2D] hover:text-white hover:border-[#9F2D2D] transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </Grid>

          {/* Blog Posts Grid */}
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#9F2D2D] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center text-[#9F2D2D] hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* Coming Soon Notice */}
        <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Content Coming Soon!</h2>
          <p className="text-gray-600 mb-6">
            We're working on bringing you more valuable insights and expert articles. 
            Subscribe to our newsletter to get notified when new content is published.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-[#9F2D2D] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </Container>
    </div>
  );
}