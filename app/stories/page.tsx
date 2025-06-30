"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Filter, CheckCircle, Heart, HelpCircle, Calendar, User } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "The Great Cookie Incident",
    content:
      "When Sarah was 8, she tried to bake cookies for the school bake sale but accidentally used salt instead of sugar. The whole family still laughs about it! It became a running joke that whenever someone made a cooking mistake, we'd say they 'pulled a Sarah.'",
    person: "Sarah Johnson",
    author: "Linda Johnson",
    date: "2023-05-15",
    verified: "family-tale",
    tags: ["childhood", "funny", "cooking"],
  },
  {
    id: 2,
    title: "Robert's War Stories",
    content:
      "Grandpa Robert served in WWII and would tell us stories about his time in the Pacific. He always emphasized the friendships he made and how they helped each other through difficult times. His medals are still displayed in the family home.",
    person: "Robert Johnson",
    author: "James Johnson",
    date: "2023-04-20",
    verified: "confirmed",
    tags: ["military", "history", "courage"],
  },
  {
    id: 3,
    title: "Mary's Garden Legacy",
    content:
      "Grandma Mary had the most beautiful garden in the neighborhood. She taught all the grandchildren how to plant vegetables and flowers. Her rose bushes are still blooming in the backyard, and we think of her every spring.",
    person: "Mary Johnson",
    author: "Patricia Wilson",
    date: "2023-06-10",
    verified: "confirmed",
    tags: ["gardening", "legacy", "nature"],
  },
  {
    id: 4,
    title: "The Family Reunion of '85",
    content:
      "There's a story about a massive family reunion in 1985 where over 100 relatives showed up. Apparently, Uncle Tom organized a softball game that got so competitive it nearly caused a family feud! Need to verify the details with older relatives.",
    person: "Tom Wilson",
    author: "Jennifer Wilson",
    date: "2023-07-02",
    verified: "needs-verification",
    tags: ["reunion", "sports", "family-gathering"],
  },
  {
    id: 5,
    title: "David's First Business",
    content:
      "When David was 12, he started a lawn mowing business in the neighborhood. He was so determined to save money for a new bike that he worked every weekend for an entire summer. His entrepreneurial spirit showed early!",
    person: "David Johnson",
    author: "Sarah Johnson",
    date: "2023-05-28",
    verified: "confirmed",
    tags: ["childhood", "business", "determination"],
  },
]

const verificationTypes = {
  confirmed: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100", label: "Confirmed Fact" },
  "family-tale": { icon: Heart, color: "text-amber-600", bg: "bg-amber-100", label: "Family Tale" },
  "needs-verification": { icon: HelpCircle, color: "text-red-600", bg: "bg-red-100", label: "Needs Verification" },
}

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPerson, setFilterPerson] = useState("all")
  const [filterVerification, setFilterVerification] = useState("all")
  const [sortBy, setSortBy] = useState("date-desc")

  const filteredStories = stories
    .filter((story) => {
      const matchesSearch =
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesPerson = filterPerson === "all" || story.person === filterPerson
      const matchesVerification = filterVerification === "all" || story.verified === filterVerification
      return matchesSearch && matchesPerson && matchesVerification
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "person":
          return a.person.localeCompare(b.person)
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const uniquePersons = Array.from(new Set(stories.map((story) => story.person)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Family Stories & Memories</h1>
          <p className="text-amber-700 text-lg">Discover the stories that make our family unique</p>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-white/90 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Filter className="w-5 h-5" />
              <span>Search & Filter</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-amber-500" />
                <Input
                  placeholder="Search stories, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-amber-300 focus:border-amber-500"
                />
              </div>

              <Select value={filterPerson} onValueChange={setFilterPerson}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Filter by person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All People</SelectItem>
                  {uniquePersons.map((person) => (
                    <SelectItem key={person} value={person}>
                      {person}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterVerification} onValueChange={setFilterVerification}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Filter by verification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="confirmed">Confirmed Facts</SelectItem>
                  <SelectItem value="family-tale">Family Tales</SelectItem>
                  <SelectItem value="needs-verification">Needs Verification</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Newest First</SelectItem>
                  <SelectItem value="date-asc">Oldest First</SelectItem>
                  <SelectItem value="person">By Person</SelectItem>
                  <SelectItem value="title">By Title</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Stories List */}
        <div className="space-y-6">
          {filteredStories.map((story) => {
            const verification = verificationTypes[story.verified as keyof typeof verificationTypes]
            const VerificationIcon = verification.icon

            return (
              <Card key={story.id} className="bg-white/90 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-amber-900 mb-2">{story.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-amber-700">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <Link href={`/person/1`} className="hover:underline">
                            {story.person}
                          </Link>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(story.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${verification.bg} ${verification.color}`}>
                      <VerificationIcon className="w-3 h-3 mr-1" />
                      {verification.label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-800 leading-relaxed mb-4">{story.content}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-amber-400 text-amber-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-amber-600">Shared by: {story.author}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredStories.length === 0 && (
          <Card className="bg-white/90">
            <CardContent className="text-center py-12">
              <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">No Stories Found</h3>
              <p className="text-amber-700 mb-4">Try adjusting your search terms or filters to find more stories.</p>
              <Button asChild className="bg-amber-800 hover:bg-amber-900">
                <Link href="/add-person">Add a New Story</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Add Story Button */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/add-person">
              <BookOpen className="w-5 h-5 mr-2" />
              Share a New Story
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
