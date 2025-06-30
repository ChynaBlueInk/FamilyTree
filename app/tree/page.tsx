"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { User, MapPin, Heart, Users, ChevronDown, ChevronRight } from "lucide-react"

// Mock family data with more detailed information
const familyTreeData = {
  id: "1",
  name: "Robert Johnson",
  birthYear: "1920",
  deathYear: "1995",
  birthPlace: "Chicago, Illinois",
  occupation: "Factory Worker",
  spouse: "Mary Johnson",
  spouseYears: "1925-2010",
  children: [
    {
      id: "2",
      name: "James Johnson",
      birthYear: "1945",
      deathYear: null,
      birthPlace: "Chicago, Illinois",
      occupation: "Electrician",
      spouse: "Linda Johnson",
      spouseYears: "1948-",
      children: [
        {
          id: "4",
          name: "Sarah Johnson",
          birthYear: "1975",
          deathYear: null,
          birthPlace: "Portland, Oregon",
          occupation: "Software Engineer",
          spouse: "Mike Davis",
          spouseYears: "1973-",
          children: [
            {
              id: "7",
              name: "Emma Davis",
              birthYear: "2005",
              deathYear: null,
              birthPlace: "Portland, Oregon",
              children: [],
            },
            {
              id: "8",
              name: "Luke Davis",
              birthYear: "2008",
              deathYear: null,
              birthPlace: "Portland, Oregon",
              children: [],
            },
          ],
        },
        {
          id: "5",
          name: "David Johnson",
          birthYear: "1978",
          deathYear: null,
          birthPlace: "Portland, Oregon",
          occupation: "Civil Engineer",
          spouse: "Anna Johnson",
          spouseYears: "1980-",
          children: [
            {
              id: "9",
              name: "Oliver Johnson",
              birthYear: "2010",
              deathYear: null,
              birthPlace: "Portland, Oregon",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "3",
      name: "Patricia Wilson",
      birthYear: "1948",
      deathYear: null,
      birthPlace: "Chicago, Illinois",
      occupation: "Nurse",
      spouse: "Tom Wilson",
      spouseYears: "1945-",
      children: [
        {
          id: "6",
          name: "Jennifer Wilson",
          birthYear: "1980",
          deathYear: null,
          birthPlace: "Seattle, Washington",
          occupation: "Marketing Manager",
          spouse: "Chris Brown",
          spouseYears: "1978-",
          children: [
            {
              id: "10",
              name: "Sophia Brown",
              birthYear: "2012",
              deathYear: null,
              birthPlace: "Seattle, Washington",
              children: [],
            },
            {
              id: "11",
              name: "Mason Brown",
              birthYear: "2015",
              deathYear: null,
              birthPlace: "Seattle, Washington",
              children: [],
            },
          ],
        },
      ],
    },
  ],
}

interface Person {
  id: string
  name: string
  birthYear: string
  deathYear: string | null
  birthPlace?: string
  occupation?: string
  spouse?: string
  spouseYears?: string
  children: Person[]
}

interface PersonBoxProps {
  person: Person
  level: number
  onPersonClick: (person: Person) => void
}

function PersonBox({ person, level, onPersonClick }: PersonBoxProps) {
  const isLiving = !person.deathYear

  return (
    <div className="flex flex-col items-center">
      {/* Person Card */}
      <div
        onClick={() => onPersonClick(person)}
        className={`
          bg-white border-2 rounded-lg p-3 shadow-lg cursor-pointer hover:shadow-xl transition-all
          min-w-[200px] max-w-[220px]
          ${level === 0 ? "border-amber-600" : level === 1 ? "border-green-600" : "border-amber-400"}
          hover:scale-105
        `}
      >
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-amber-700" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-amber-900 text-sm leading-tight truncate">{person.name}</h3>
            <p className="text-xs text-amber-700">
              {person.birthYear} - {person.deathYear || "Living"}
            </p>
          </div>
        </div>

        {isLiving && <Badge className="bg-green-100 text-green-800 text-xs">Living</Badge>}
      </div>

      {/* Children */}
      {person.children.length > 0 && (
        <div className="mt-8">
          {/* Vertical line down */}
          <div className="w-0.5 h-6 bg-amber-400 mx-auto"></div>

          {/* Horizontal line across children */}
          {person.children.length > 1 && (
            <div className="relative">
              <div
                className="h-0.5 bg-amber-400"
                style={{ width: `${(person.children.length - 1) * 280}px`, marginLeft: "140px" }}
              ></div>
              {person.children.map((_, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-6 bg-amber-400"
                  style={{ left: `${140 + index * 280}px`, top: "0" }}
                ></div>
              ))}
            </div>
          )}

          {/* Children boxes */}
          <div className="flex space-x-20 mt-6">
            {person.children.map((child) => (
              <PersonBox key={child.id} person={child} level={level + 1} onPersonClick={onPersonClick} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function PersonModal({ person, isOpen, onClose }: { person: Person | null; isOpen: boolean; onClose: () => void }) {
  const [showSpouseChildren, setShowSpouseChildren] = useState(true)

  if (!person) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <DialogTitle className="text-xl text-amber-900">{person.name}</DialogTitle>
              <p className="text-amber-700">
                {person.birthYear} - {person.deathYear || "Living"}
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Basic Information */}
          <div className="space-y-2">
            {person.birthPlace && (
              <div className="flex items-center space-x-2 text-sm text-amber-700">
                <MapPin className="w-4 h-4" />
                <span>Born in {person.birthPlace}</span>
              </div>
            )}

            {person.occupation && (
              <div className="flex items-center space-x-2 text-sm text-amber-700">
                <User className="w-4 h-4" />
                <span>{person.occupation}</span>
              </div>
            )}
          </div>

          {/* Spouse & Children Section */}
          {(person.spouse || person.children.length > 0) && (
            <div className="border-t pt-4">
              <button
                onClick={() => setShowSpouseChildren(!showSpouseChildren)}
                className="flex items-center space-x-2 text-amber-900 font-medium hover:text-amber-700 transition-colors"
              >
                {showSpouseChildren ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                <span>Spouse & Children</span>
              </button>

              {showSpouseChildren && (
                <div className="mt-3 space-y-2">
                  {person.spouse && (
                    <div className="flex items-center space-x-2 text-sm text-amber-700">
                      <Heart className="w-4 h-4" />
                      <span>
                        {person.spouse} ({person.spouseYears})
                      </span>
                    </div>
                  )}

                  {person.children.length > 0 && (
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-amber-700 mb-2">
                        <Users className="w-4 h-4" />
                        <span>Children:</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {person.children.map((child) => (
                          <p key={child.id} className="text-sm text-amber-600">
                            {child.name} ({child.birthYear} - {child.deathYear || "Living"})
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button asChild className="flex-1 bg-amber-800 hover:bg-amber-900">
              <Link href={`/person/${person.id}`}>View Profile</Link>
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function TreePage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPerson(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">Johnson Family Tree</h1>
          <p className="text-amber-700 text-lg">Click on any family member to learn more about them</p>
        </div>

        {/* Tree Container */}
        <div className="bg-white/80 rounded-lg p-8 shadow-lg overflow-x-auto">
          <div className="min-w-max flex justify-center">
            <PersonBox person={familyTreeData} level={0} onPersonClick={handlePersonClick} />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white/80 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">How to Use</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-amber-700">• Click on any person's box to see their basic information</p>
              <p className="text-amber-700">
                • Use the "View Profile" button to see detailed information, photos, and stories
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-amber-600 rounded"></div>
                <span className="text-amber-700">Founding Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-green-600 rounded"></div>
                <span className="text-amber-700">Second Generation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-amber-400 rounded"></div>
                <span className="text-amber-700">Younger Generations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Person Modal */}
        <PersonModal person={selectedPerson} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}
