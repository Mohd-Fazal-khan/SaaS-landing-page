import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Lightbulb } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI in Marketing: 2025 Trends and Predictions",
    excerpt:
      "Discover the latest AI marketing trends that will shape the industry in 2025 and beyond. From personalization to automation, learn what's coming next.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    image: "banner1.png?height=300&width=400&text=ML+Optimization",
    featured: true,
  },
  {
    title: "How to Optimize Your Ad Campaigns with Machine Learning",
    excerpt:
      "Learn practical strategies for using machine learning to improve your advertising ROI and campaign performance.",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Optimization",
    image: "banner2.png?height=300&width=400&text=ML+Optimization",
  },
  {
    title: "Building Brand Consistency Across Multiple Platforms",
    excerpt:
      "Maintain your brand voice and visual identity across all marketing channels with these proven strategies.",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Branding",
    image: "banner3.jpg?height=300&width=400&text=Brand+Consistency",
  },
  {
    title: "Data-Driven Marketing: Making Decisions with Analytics",
    excerpt:
      "Transform your marketing strategy with data-driven insights and learn how to interpret key metrics for better results.",
    author: "David Thompson",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Analytics",
    image: "banner4.png?height=300&width=400&text=Data+Analytics",
  },
  {
    title: "The Complete Guide to Marketing Automation",
    excerpt: "Streamline your marketing processes and improve efficiency with comprehensive automation strategies.",
    author: "Lisa Wang",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Automation",
    image: "banner5.jpg?height=300&width=400&text=Marketing+Automation",
  },
  {
    title: "Creating Compelling Content with AI Assistance",
    excerpt:
      "Discover how AI can enhance your content creation process while maintaining authenticity and brand voice.",
    author: "James Miller",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "Content",
    image: "banner6.jpg?height=300&width=400&text=AI+Content+Creation",
  },
]

const resources = [
  {
    title: "Marketing AI Toolkit",
    description: "Essential tools and templates for AI-powered marketing campaigns",
    type: "Download",
    icon: BookOpen,
  },
  {
    title: "ROI Calculator",
    description: "Calculate the potential return on investment for your marketing campaigns",
    type: "Tool",
    icon: TrendingUp,
  },
  {
    title: "Best Practices Guide",
    description: "Comprehensive guide to implementing AI in your marketing strategy",
    type: "Guide",
    icon: Lightbulb,
  },
]

export default function Blog() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resources 	&amp;
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights, guides, and resources on AI-powered marketing.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16" data-animation="fade-up" data-delay="200">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mr-4">
                    {blogPosts[0].category}
                  </span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {blogPosts[0].author}</span>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              data-animation="fade-up"
              data-delay={index * 100}
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">By {post.author}</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Resources Section */}
        <div
          className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg p-8"
          data-animation="fade-up"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Free Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                >
                  {resource.type}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16" data-animation="fade-up">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest insights, tips, and resources delivered to your inbox. Join thousands of marketers who
              trust our content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-blue-600 placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 mt-1 rounded-xl font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
