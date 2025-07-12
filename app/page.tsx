import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Star, ArrowLeft, ArrowRight, Facebook, Twitter, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SaaSify</span>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Facebook className="w-4 h-4 text-blue-600" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="w-4 h-4 text-blue-400" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-4 h-4 text-blue-700" />
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-orange-100 text-orange-800">
            🚀 Now Available
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Complete Solution for
            <span className="text-orange-600 block">Modern Businesses</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Streamline your workflow, boost productivity, and scale your business with our all-in-one platform. Join
            thousands of companies already transforming their operations.
          </p>

          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video shadow-2xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Product Demo Video"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <Button size="lg" variant="secondary" className="rounded-full w-20 h-20 bg-white hover:bg-gray-100">
                <Play className="w-8 h-8 text-orange-600 ml-1" />
              </Button>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Watch how SaaSify transforms your business in under 2 minutes
          </p>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Beautiful Interface, Powerful Features</h2>

          <div className="relative">
            <div className="flex space-x-4 overflow-hidden">
              <div className="flex-shrink-0 w-80">
                <Image
                  src="/placeholder.svg?height=240&width=320"
                  alt="Dashboard Screenshot"
                  width={320}
                  height={240}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-80">
                <Image
                  src="/placeholder.svg?height=240&width=320"
                  alt="Analytics Screenshot"
                  width={320}
                  height={240}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-shrink-0 w-80">
                <Image
                  src="/placeholder.svg?height=240&width=320"
                  alt="Reports Screenshot"
                  width={320}
                  height={240}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 bg-white shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 bg-white shadow-lg"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Everything You Need to Succeed</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Advanced Analytics",
                description:
                  "Get deep insights into your business performance with real-time analytics and custom reports.",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications.",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Optimized for speed with global CDN and advanced caching for instant load times.",
              },
              {
                icon: "🔧",
                title: "Easy Integration",
                description: "Connect with 500+ tools and services through our robust API and pre-built integrations.",
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                description: "Fully responsive design that works perfectly on desktop, tablet, and mobile devices.",
              },
              {
                icon: "🎯",
                title: "Smart Automation",
                description: "Automate repetitive tasks and workflows to save time and reduce human error.",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Industry Leaders</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "SaaSify has completely transformed how we manage our operations. The automation features alone have
                    saved us 20 hours per week."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-gray-600">CEO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "The analytics dashboard gives us insights we never had before. Our team productivity has increased
                    by 40% since switching to SaaSify."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael Chen</p>
                      <p className="text-gray-600">CTO, InnovateLab</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 SaaSify | Transform Your Business with Smart Solutions |
            <a href="mailto:hello@saasify.com" className="text-orange-400 hover:text-orange-300 ml-1">
              hello@saasify.com
            </a>{" "}
            |
            <a href="https://saasify.com" className="text-orange-400 hover:text-orange-300 ml-1">
              www.saasify.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
