"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Search, Filter, Upload, Calendar, User, CheckCircle, HelpCircle } from "lucide-react"

const photos = [
  {
    id: 1,
    url: "/placeholder.svg?height=400&width=400",
    title: "Wedding Day - Sarah & Mike",
    person: "Sarah Johnson",
    date: "2000-06-15",
    decade: "2000s",
    verified: true,
    tags: ["wedding", "celebration", "family"],
    description: "Sarah and Mike's beautiful wedding ceremony in Portland",
  },
  {
    id: 2,
    url: "/placeholder.svg?height=400&width=400",
    title: "Robert in Military Uniform",
    person: "Robert Johnson",
    date: "1943-08-20",
    decade: "1940s",
    verified: true,
    tags: ["military", "historical", "portrait"],
    description: "Grandpa Robert during his service in WWII",
  },
  {
    id: 3,
    url: "/placeholder.svg?height=400&width=400",
    title: "Mary's Garden",
    person: "Mary Johnson",
    date: "1975-05-10",
    decade: "1970s",
    verified: true,
    tags: ["garden", "nature", "hobby"],
    description: "Grandma Mary tending to her famous rose garden",
  },
  {
    id: 4,
    url: "/placeholder.svg?height=400&width=400",
    title: "Family Reunion 1985",
    person: "Multiple",
    date: "1985-07-04",
    decade: "1980s",
    verified: false,
    tags: ["reunion", "group", "celebration"],
    description: "The legendary family reunion with over 100 relatives",
  },
  {
    id: 5,
    url: "/placeholder.svg?height=400&width=400",
    title: "Emma's First Birthday",
    person: "Emma Davis",
    date: "2006-03-22",
    decade: "2000s",
    verified: true,
    tags: ["birthday", "childhood", "celebration"],
    description: "Emma's first birthday party with the whole family",
  },
  {
    id: 6,
    url: "/placeholder.svg?height=400&width=400",
    title: "David's Graduation",
    person: "David Johnson",
    date: "2000-05-15",
    decade: "2000s",
    verified: true,
    tags: ["graduation", "achievement", "education"],
    description: "David graduating from college with his engineering degree",
  },
  {
    id: 7,
    url: "/placeholder.svg?height=400&width=400",
    title: "Christmas Morning 1992",
    person: "Multiple",
    date: "1992-12-25",
    decade: "1990s",
    verified: true,
    tags: ["christmas", "family", "children"],
    description: "The kids opening presents on Christmas morning",
  },
  {
    id: 8,
    url: "/placeholder.svg?height=400&width=400",
    title: "Patricia's Wedding",
    person: "Patricia Wilson",
    date: "1970-09-12",
    decade: "1970s",
    verified: true,
    tags: ["wedding", "celebration", "vintage"],
    description: "Patricia and Tom's wedding day",
  },
]

export default function PhotosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPerson, setFilterPerson] = useState("all")
  const [filterDecade, setFilterDecade] = useState("all")
  const [filterVerified, setFilterVerified] = useState("all")
  const [viewMode, setViewMode] = useState("grid")

  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch =
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesPerson = filterPerson === "all" || photo.person === filterPerson
    const matchesDecade = filterDecade === "all" || photo.decade === filterDecade
    const matchesVerified =
      filterVerified === "all" ||
      (filterVerified === "verified" && photo.verified) ||
      (filterVerified === "unverified" && !photo.verified)
    return matchesSearch && matchesPerson && matchesDecade && matchesVerified
  })

  const uniquePersons = Array.from(new Set(photos.map((photo) => photo.person)))
  const uniqueDecades = Array.from(new Set(photos.map((photo) => photo.decade)))

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Family Photo Gallery</h1>
          <p className="text-amber-700 text-lg">Browse through generations of family photographs and memories</p>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-white/90 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Filter className="w-5 h-5" />
              <span>Search & Filter Photos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-amber-500" />
                <Input
                  placeholder="Search photos..."
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

              <Select value={filterDecade} onValueChange={setFilterDecade}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Filter by decade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Decades</SelectItem>
                  {uniqueDecades.sort().map((decade) => (
                    <SelectItem key={decade} value={decade}>
                      {decade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterVerified} onValueChange={setFilterVerified}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Verification status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Photos</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
                  <SelectItem value="unverified">Unverified Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-amber-700">
                Showing {filteredPhotos.length} of {photos.length} photos
              </p>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/add-person">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Photos
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card key={photo.id} className="bg-white/90 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  {photo.verified ? (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      <HelpCircle className="w-3 h-3 mr-1" />
                      Unverified
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-amber-900 mb-2">{photo.title}</h3>
                <p className="text-sm text-amber-700 mb-3">{photo.description}</p>

                <div className="space-y-2 text-xs text-amber-600">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{photo.person}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {photo.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="border-amber-400 text-amber-700 text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {photo.tags.length > 2 && (
                    <Badge variant="outline" className="border-amber-400 text-amber-700 text-xs">
                      +{photo.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <Card className="bg-white/90">
            <CardContent className="text-center py-12">
              <Camera className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">No Photos Found</h3>
              <p className="text-amber-700 mb-4">Try adjusting your search terms or filters to find more photos.</p>
              <Button asChild className="bg-amber-800 hover:bg-amber-900">
                <Link href="/add-person">Upload New Photos</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
