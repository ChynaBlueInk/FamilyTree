"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Upload, Calendar, Briefcase, Users } from "lucide-react"

export default function AddPersonPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    birthDate: "",
    deathDate: "",
    birthPlace: "",
    occupation: "",
    biography: "",
    relationship: "",
    relatedPerson: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Add Family Member</h1>
          <p className="text-amber-700 text-lg">Help grow our family tree by adding a new person</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <UserPlus className="w-5 h-5" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter first name"
                  className="border-amber-300 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter last name"
                  className="border-amber-300 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="nickname">Nickname</Label>
                <Input
                  id="nickname"
                  value={formData.nickname}
                  onChange={(e) => handleInputChange("nickname", e.target.value)}
                  placeholder="Enter nickname (optional)"
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Life Details */}
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Calendar className="w-5 h-5" />
                <span>Life Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="birthDate">Birth Date</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
              <div>
                <Label htmlFor="deathDate">Death Date (if applicable)</Label>
                <Input
                  id="deathDate"
                  type="date"
                  value={formData.deathDate}
                  onChange={(e) => handleInputChange("deathDate", e.target.value)}
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
              <div>
                <Label htmlFor="birthPlace">Birth Place</Label>
                <Input
                  id="birthPlace"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  placeholder="City, State/Province, Country"
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
              <div>
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange("occupation", e.target.value)}
                  placeholder="Enter occupation"
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Relationships */}
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Users className="w-5 h-5" />
                <span>Family Relationships</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="relationship">Relationship Type</Label>
                <Select onValueChange={(value) => handleInputChange("relationship", value)}>
                  <SelectTrigger className="border-amber-300 focus:border-amber-500">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="child">Child</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="grandparent">Grandparent</SelectItem>
                    <SelectItem value="grandchild">Grandchild</SelectItem>
                    <SelectItem value="cousin">Cousin</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="relatedPerson">Related to</Label>
                <Select onValueChange={(value) => handleInputChange("relatedPerson", value)}>
                  <SelectTrigger className="border-amber-300 focus:border-amber-500">
                    <SelectValue placeholder="Select family member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
                    <SelectItem value="mary-johnson">Mary Johnson</SelectItem>
                    <SelectItem value="james-johnson">James Johnson</SelectItem>
                    <SelectItem value="linda-johnson">Linda Johnson</SelectItem>
                    <SelectItem value="patricia-wilson">Patricia Wilson</SelectItem>
                    <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Biography */}
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Briefcase className="w-5 h-5" />
                <span>Biography & Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="biography">Biography</Label>
                <Textarea
                  id="biography"
                  value={formData.biography}
                  onChange={(e) => handleInputChange("biography", e.target.value)}
                  placeholder="Share any stories, achievements, or important details about this person..."
                  rows={6}
                  className="border-amber-300 focus:border-amber-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Photo Upload */}
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-amber-900">
                <Upload className="w-5 h-5" />
                <span>Photo Upload</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <p className="text-amber-700 mb-2">Drag and drop photos here</p>
                <p className="text-sm text-amber-600">or click to browse (optional)</p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex space-x-4 justify-center">
            <Button
              type="button"
              variant="outline"
              className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              Save as Draft
            </Button>
            <Button type="submit" className="bg-amber-800 hover:bg-amber-900 px-8">
              Add to Family Tree
            </Button>
          </div>
        </form>

        {/* Help Section */}
        <Card className="bg-amber-100/50 mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-900 mb-2">Need Help?</h3>
            <p className="text-amber-800 text-sm">
              If you're unsure about any information, it's okay to leave fields blank. You can always come back and edit
              the person's profile later. Contact the site administrator at family.admin@example.com for assistance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
