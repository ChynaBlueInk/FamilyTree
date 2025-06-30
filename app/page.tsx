import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, Users, BookOpen, Camera, UserPlus } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <TreePine className="w-20 h-20 mx-auto text-amber-800 mb-4" />
            <h1 className="text-5xl font-bold text-amber-900 mb-4 font-serif">Welcome to Our Family Tree</h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto leading-relaxed">
              Share stories, photos, and memories to keep our history alive. Discover the roots that connect us all and
              preserve our legacy for future generations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/80 border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="w-12 h-12 text-green-700 mx-auto" />
                <CardTitle className="text-amber-900">Explore Our Tree</CardTitle>
                <CardDescription className="text-amber-700">
                  Navigate through generations and discover family connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-amber-800 hover:bg-amber-900">
                  <Link href="/tree">View Family Tree</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-green-700 mx-auto" />
                <CardTitle className="text-amber-900">Family Members</CardTitle>
                <CardDescription className="text-amber-700">
                  Browse profiles and learn about each family member
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="/people">Browse People</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-amber-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <UserPlus className="w-12 h-12 text-green-700 mx-auto" />
                <CardTitle className="text-amber-900">Add Family Member</CardTitle>
                <CardDescription className="text-amber-700">
                  Help grow our family tree by adding new members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-800 text-amber-800 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="/add-person">Add Person</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12 font-serif">Preserve Our Heritage</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-amber-100 to-green-100 border-amber-200">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-amber-800" />
                <CardTitle className="text-amber-900">Family Stories</CardTitle>
                <CardDescription className="text-amber-700">
                  Read and share the stories that define our family history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="text-amber-800 hover:bg-amber-200">
                  <Link href="/stories">Explore Stories →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100 to-amber-100 border-amber-200">
              <CardHeader>
                <Camera className="w-10 h-10 text-green-800" />
                <CardTitle className="text-amber-900">Photo Gallery</CardTitle>
                <CardDescription className="text-amber-700">
                  Browse through generations of family photographs and memories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="text-green-800 hover:bg-green-200">
                  <Link href="/photos">View Photos →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Family Motto Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-serif italic mb-4">
            "The roots of a family tree begin with the love of two hearts"
          </blockquote>
          <p className="text-amber-100">— Family Motto</p>
        </div>
      </section>
    </div>
  )
}
