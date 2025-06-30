"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Search, Filter, Calendar, MapPin, Heart, Users } from "lucide-react"

const people = [
  {
    id: "1",
    name: "Robert Johnson",
    birthYear: "1920",
    deathYear: "1995",
    birthPlace: "Chicago, Illinois",
    occupation: "Factory Worker",
    generation: 1,
    spouse: "Mary Johnson",
    children: 2,
    status: "deceased",
  },
  {
    id: "2",
    name: "Mary Johnson",
    birthYear: "1925",
    deathYear: "2010",
    birthPlace: "Milwaukee, Wisconsin",
    occupation: "Homemaker",
    generation: 1,
    spouse: "Robert Johnson",
    children: 2,
    status: "deceased",
  },
  {
    id: "3",
    name: "James Johnson",
    birthYear: "1945",
    deathYear: null,
    birthPlace: "Chicago, Illinois",
    occupation: "Electrician",
    generation: 2,
    spouse: "Linda Johnson",
    children: 2,
    status: "living",
  },
  {
    id: "4",
    name: "Linda Johnson",
    birthYear: "1948",
    deathYear: null,
    birthPlace: "Detroit, Michigan",
    occupation: "Teacher",
    generation: 2,
    spouse: "James Johnson",
    children: 2,
    status: "living",
  },
  {
    id: "5",
    name: "Patricia Wilson",
    birthYear: "1948",
    deathYear: null,
    birthPlace: "Chicago, Illinois",
    occupation: "Nurse",
    generation: 2,
    spouse: "Tom Wilson",
    children: 1,
    status: "living",
  },
  {
    id: "6",
    name: "Sarah Johnson",
    birthYear: "1975",
    deathYear: null,
    birthPlace: "Portland, Oregon",
    occupation: "Software Engineer",
    generation: 3,
    spouse: "Mike Davis",
    children: 2,
    status: "living",
  },
  {
    id: "7",
    name: "David Johnson",
    birthYear: "1978",
    deathYear: null,
    birthPlace: "Portland, Oregon",
    occupation: "Civil Engineer",
    generation: 3,
    spouse: "Anna Johnson",
    children: 1,
    status: "living",
  },
  {
    id: "8",
    name: "Jennifer Wilson",
    birthYear: "1980",
    deathYear: null,
    birthPlace: "Seattle, Washington",
    occupation: "Marketing Manager",
    generation: 3,
    spouse: "Chris Brown",
    children: 2,
    status: "living",
  },
]

export default function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterGeneration, setFilterGeneration] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredPeople = people
    .filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.birthPlace.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesGeneration = filterGeneration === "all" || person.generation.toString() === filterGeneration
      const matchesStatus = filterStatus === "all" || person.status === filterStatus
      return matchesSearch && matchesGeneration && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "birth-year":
          return Number.parseInt(a.birthYear) - Number.parseInt(b.birthYear)
        case "generation":
          return a.generation - b.generation
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Family Members</h1>
          <p className="text-amber-700 text-lg">Browse profiles of all our family members across generations</p>
        </div>

        {/* Search and Filter Controls */}
        <Card className="bg-white/90 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Filter className="w-5 h-5" />
              <span>Search & Filter People</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-amber-500" />
                <Input
                  placeholder="Search people..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-amber-300 focus:border-amber-500"
                />
              </div>

              <Select value={filterGeneration} onValueChange={setFilterGeneration}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Filter by generation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Generations</SelectItem>
                  <SelectItem value="1">Generation 1 (Founders)</SelectItem>
                  <SelectItem value="2">Generation 2</SelectItem>
                  <SelectItem value="3">Generation 3</SelectItem>
                  <SelectItem value="4">Generation 4</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Members</SelectItem>
                  <SelectItem value="living">Living</SelectItem>
                  <SelectItem value="deceased">Deceased</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-amber-300 focus:border-amber-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="birth-year">Birth Year</SelectItem>
                  <SelectItem value="generation">Generation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <p className="text-sm text-amber-700">
              Showing {filteredPeople.length} of {people.length} family members
            </p>
          </CardContent>
        </Card>

        {/* People Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPeople.map((person) => (
            <Card key={person.id} className="bg-white/90 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-amber-900">
                      <Link href={`/person/${person.id}`} className="hover:underline">
                        {person.name}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        variant={person.status === "living" ? "default" : "secondary"}
                        className={
                          person.status === "living" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }
                      >
                        {person.status === "living" ? "Living" : "Deceased"}
                      </Badge>
                      <Badge variant="outline" className="border-amber-400 text-amber-700">
                        Gen {person.generation}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm text-amber-700">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {person.birthYear} - {person.deathYear || "Present"}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{person.birthPlace}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{person.occupation}</span>
                  </div>

                  {person.spouse && (
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>Married to {person.spouse}</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>
                      {person.children} {person.children === 1 ? "child" : "children"}
                    </span>
                  </div>
                </div>

                <Button asChild size="sm" className="w-full bg-amber-800 hover:bg-amber-900">
                  <Link href={`/person/${person.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPeople.length === 0 && (
          <Card className="bg-white/90">
            <CardContent className="text-center py-12">
              <Users className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">No People Found</h3>
              <p className="text-amber-700 mb-4">
                Try adjusting your search terms or filters to find more family members.
              </p>
              <Button asChild className="bg-amber-800 hover:bg-amber-900">
                <Link href="/add-person">Add New Family Member</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Add Person Button */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/add-person">
              <User className="w-5 h-5 mr-2" />
              Add New Family Member
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
