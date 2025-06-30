"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TreePine, Lock, Mail, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
      console.log("Login attempt:", { email, password })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <TreePine className="w-16 h-16 mx-auto text-amber-800 mb-4" />
          <h1 className="text-3xl font-bold text-amber-900 font-serif">Family Tree Access</h1>
          <p className="text-amber-700 mt-2">Sign in to explore our family heritage</p>
        </div>

        {/* Login Form */}
        <Card className="bg-white/90 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-amber-900">
              <Lock className="w-5 h-5" />
              <span>Member Login</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-amber-900">
                  Email Address
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-amber-500" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 border-amber-300 focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-amber-900">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-amber-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 border-amber-300 focus:border-amber-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-amber-500 hover:text-amber-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-amber-800 hover:bg-amber-900">
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Access Information */}
        <Card className="bg-amber-100/50">
          <CardContent className="p-6 text-center">
            <h3 className="font-semibold text-amber-900 mb-2">Need Access?</h3>
            <p className="text-amber-800 text-sm mb-4">
              This site is for Johnson family members only. If you're a family member and need access, please contact
              our site administrator.
            </p>
            <div className="space-y-2 text-sm text-amber-700">
              <p>
                <strong>Administrator:</strong> Sarah Johnson Davis
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:family.admin@example.com" className="underline hover:text-amber-900">
                  family.admin@example.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <div className="text-center text-xs text-amber-600">
          <p>By signing in, you agree to respect family privacy and use this site for family purposes only.</p>
        </div>
      </div>
    </div>
  )
}
