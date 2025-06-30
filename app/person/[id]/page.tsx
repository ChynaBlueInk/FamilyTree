"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Calendar,
  MapPin,
  Briefcase,
  Heart,
  Users,
  Camera,
  BookOpen,
  Upload,
  CheckCircle,
  HelpCircle,
} from "lucide-react"

// Mock person data
const personData = {
  id: "4",
  name: "Sarah Johnson",
  birthDate: "March 15, 1975",
  birthPlace: "Portland, Oregon",
  deathDate: null,
  occupation: "Software Engineer",
  nickname: "Sassy Sarah",
  spouse: "Mike Davis (married 2000)",
  parents: ["James Johnson", "Linda Johnson"],
  siblings: ["David Johnson"],
  children: ["Emma Davis", "Luke Davis"],
  photos: [
    { id: 1, url: "/placeholder.svg?height=300&width=300", caption: "Wedding Day, 2000", verified: true },
    { id: 2, url: "/placeholder.svg?height=300&width=300", caption: "College Graduation, 1997", verified: true },
    { id: 3, url: "/placeholder.svg?height=300&width=300", caption: "Family Vacation, 2010", verified: false },
  ],
  stories: [
    {
      id: 1,
      title: "The Great Cookie Incident",
      content:
        "When Sarah was 8, she tried to bake cookies for the school bake sale but accidentally used salt instead of sugar. The whole family still laughs about it!",
      author: "Linda Johnson (Mother)",
      date: "2023-05-15",
      verified: "family-tale",
    },
    {
      id: 2,
      title: "Career Achievement",
      content:
        "Sarah was promoted to Senior Software Engineer at TechCorp in 2018, leading a team of 12 developers on major projects.",
      author: "Mike Davis (Spouse)",
      date: "2023-06-20",
      verified: "confirmed",
    },
  ],
}

const verificationTypes = {
  confirmed: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100", label: "Confirmed Fact" },
  "family-tale": { icon: Heart, color: "text-amber-600", bg: "bg-amber-100", label: "Family Tale" },
  "needs-verification": { icon: HelpCircle, color: "text-red-600", bg: "bg-red-100", label: "Needs Verification" },
}

export default function PersonProfile({ params }: { params: { id: string } }) {
  const [newStory, setNewStory] = useState("")
  const [newStoryTitle, setNewStoryTitle] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white/90 rounded-lg p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-32 h-32 bg-amber-200 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-amber-700" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-amber-900 mb-2 font-serif">{personData.name}</h1>
              {personData.nickname && <p className="text-lg text-amber-700 mb-2 italic">"{personData.nickname}"</p>}
              <div className="grid md:grid-cols-2 gap-4 text-amber-700">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Born: {personData.birthDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{personData.birthPlace}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>{personData.occupation}</span>
                </div>
                {personData.spouse && (
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>{personData.spouse}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="relationships" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80">
            <TabsTrigger value="relationships" className="data-[state=active]:bg-amber-100">
              Relationships
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-amber-100">
              Photos
            </TabsTrigger>
            <TabsTrigger value="stories" className="data-[state=active]:bg-amber-100">
              Stories
            </TabsTrigger>
            <TabsTrigger value="add-content" className="data-[state=active]:bg-amber-100">
              Add Content
            </TabsTrigger>
          </TabsList>

          {/* Relationships Tab */}
          <TabsContent value="relationships">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/90">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-amber-900">
                    <Users className="w-5 h-5" />
                    <span>Family Connections</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Parents</h4>
                    <div className="space-y-1">
                      {personData.parents.map((parent, index) => (
                        <Link key={index} href="#" className="block text-amber-700 hover:underline">
                          {parent}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Siblings</h4>
                    <div className="space-y-1">
                      {personData.siblings.map((sibling, index) => (
                        <Link key={index} href="#" className="block text-amber-700 hover:underline">
                          {sibling}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Children</h4>
                    <div className="space-y-1">
                      {personData.children.map((child, index) => (
                        <Link key={index} href="#" className="block text-amber-700 hover:underline">
                          {child}
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90">
                <CardHeader>
                  <CardTitle className="text-amber-900">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Memory
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50 bg-transparent"
                  >
                    Edit Information
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-amber-900">
                  <Camera className="w-5 h-5" />
                  <span>Photo Gallery</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {personData.photos.map((photo) => (
                    <div key={photo.id} className="space-y-2">
                      <div className="relative">
                        <Image
                          src={photo.url || "/placeholder.svg"}
                          alt={photo.caption}
                          width={300}
                          height={300}
                          className="rounded-lg object-cover w-full h-48"
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
                      <p className="text-sm text-amber-700">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stories Tab */}
          <TabsContent value="stories">
            <div className="space-y-6">
              {personData.stories.map((story) => {
                const verification = verificationTypes[story.verified as keyof typeof verificationTypes]
                const VerificationIcon = verification.icon

                return (
                  <Card key={story.id} className="bg-white/90">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-amber-900">{story.title}</CardTitle>
                        <Badge className={`${verification.bg} ${verification.color}`}>
                          <VerificationIcon className="w-3 h-3 mr-1" />
                          {verification.label}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-amber-800 mb-4 leading-relaxed">{story.content}</p>
                      <div className="text-sm text-amber-600">
                        <p>Shared by: {story.author}</p>
                        <p>Date: {new Date(story.date).toLocaleDateString()}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* Add Content Tab */}
          <TabsContent value="add-content">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/90">
                <CardHeader>
                  <CardTitle className="text-amber-900">Add New Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="story-title">Story Title</Label>
                    <Input
                      id="story-title"
                      value={newStoryTitle}
                      onChange={(e) => setNewStoryTitle(e.target.value)}
                      placeholder="Enter a title for your story..."
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="story-content">Story Content</Label>
                    <Textarea
                      id="story-content"
                      value={newStory}
                      onChange={(e) => setNewStory(e.target.value)}
                      placeholder="Share a memory, story, or anecdote about this person..."
                      rows={6}
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Add Story
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/90">
                <CardHeader>
                  <CardTitle className="text-amber-900">Upload Photo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
                    <Camera className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <p className="text-amber-700 mb-2">Drag and drop photos here</p>
                    <p className="text-sm text-amber-600">or click to browse</p>
                  </div>
                  <div>
                    <Label htmlFor="photo-caption">Photo Caption</Label>
                    <Input
                      id="photo-caption"
                      placeholder="Describe this photo..."
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
