import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TreePine, Mail, Users, Heart, Shield, Clock, Map, Mic, TimerIcon as Timeline, Bot } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <TreePine className="w-20 h-20 mx-auto text-amber-800 mb-4" />
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">About Our Family Tree</h1>
          <p className="text-amber-700 text-lg max-w-3xl mx-auto">
            Preserving our heritage, connecting our generations, and keeping our family stories alive for future
            generations to discover and cherish.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="bg-white/90 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Heart className="w-6 h-6" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800 leading-relaxed">
            <p className="mb-4">
              The Johnson Family Tree Collection exists to preserve, share, and celebrate our rich family heritage. We
              believe that every family member has a story worth telling, and every photograph holds memories that
              connect us across generations.
            </p>
            <p>
              Through this digital archive, we aim to create a lasting legacy that will help future generations
              understand their roots, learn from their ancestors, and feel connected to the family story that continues
              to unfold.
            </p>
          </CardContent>
        </Card>

        {/* Site Administrator */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Users className="w-6 h-6" />
                <span>Site Administrator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-amber-900">Sarah Johnson Davis</h3>
                  <p className="text-amber-700">Family Historian & Site Maintainer</p>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Sarah has been passionate about family history since childhood, inspired by her grandmother Mary's
                  stories and her grandfather Robert's war tales. She maintains this site as a labor of love, ensuring
                  our family's legacy is preserved for future generations.
                </p>
                <div className="flex items-center space-x-2 text-amber-700">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:family.admin@example.com" className="hover:underline">
                    family.admin@example.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Shield className="w-6 h-6" />
                <span>Privacy & Access</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Family Members Only</h4>
                <p className="text-amber-800 text-sm">
                  This site is private and accessible only to Johnson family members and their spouses. Access is
                  granted by invitation only to protect our family's privacy and personal information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Content Guidelines</h4>
                <p className="text-amber-800 text-sm">
                  All photos and stories are shared with love and respect. We encourage accuracy and ask that all
                  contributions be verified when possible.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <Link href="/privacy">View Privacy Policy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Family Motto */}
        <Card className="bg-gradient-to-r from-amber-800 to-green-800 text-white mb-8">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4 font-serif">Our Family Motto</h2>
            <blockquote className="text-xl italic mb-4">"He tangata, he tangata, he tangata"</blockquote>
            <p className="text-amber-100 mb-2">It is the people, it is the people, it is the people</p>
            <p className="text-amber-200 text-sm">
              This Māori whakatauki reminds us that people are the most important thing in life. Our family, our
              connections, and our relationships are what truly matter.
            </p>
          </CardContent>
        </Card>

        {/* Future Features */}
        <Card className="bg-white/90 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Clock className="w-6 h-6" />
              <span>Coming Soon</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 mb-6">
              We're constantly working to improve our family tree site. Here are some exciting features we're planning:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mic className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Audio Recordings</h4>
                    <p className="text-amber-700 text-sm">
                      Record and share audio stories, interviews with older relatives, and family anecdotes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Timeline className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Timeline View</h4>
                    <p className="text-amber-700 text-sm">
                      See family events alongside world history to understand the context of our ancestors' lives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Map className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">Migration Map</h4>
                    <p className="text-amber-700 text-sm">
                      Interactive map showing how our family moved and settled across different locations over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Bot className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-900">AI Story Generator</h4>
                    <p className="text-amber-700 text-sm">
                      AI-powered tool to help create comprehensive life stories from collected facts and memories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-amber-100/50">
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Get Involved</h2>
            <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
              Have photos to share? Stories to tell? Questions about family history? We'd love to hear from you and help
              grow our family tree together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-800 hover:bg-amber-900">
                <Link href="/add-person">Add Family Member</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                <a href="mailto:family.admin@example.com">Contact Administrator</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
