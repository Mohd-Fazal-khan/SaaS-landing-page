import { Brain, Target, BarChart3, Zap, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Creation",
    description:
      "Generate compelling ad copy, social media posts, and marketing materials with advanced AI algorithms.",
  },
  {
    icon: Target,
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision targeting powered by machine learning.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track campaign performance with comprehensive analytics and actionable insights in real-time.",
  },
  {
    icon: Zap,
    title: "Automated Optimization",
    description: "Continuously improve campaign performance with AI-driven optimization and A/B testing.",
  },
  {
    icon: Users,
    title: "Multi-Platform Management",
    description: "Manage campaigns across all major platforms from a single, unified dashboard.",
  },
  {
    icon: Shield,
    title: "Brand Safety & Compliance",
    description: "Ensure brand consistency and regulatory compliance with built-in safety measures.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered suite transforms your marketing workflow with cutting-edge technology and
            intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-animation="fade-up"
              data-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
