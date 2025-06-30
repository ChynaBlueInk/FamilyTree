import Link from "next/link"
import { TreePine, Mail, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="w-8 h-8" />
              <span className="font-bold text-xl font-serif">Family Tree Collection</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Preserving our family heritage through stories, photos, and memories. Connecting generations and keeping
              our history alive.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-amber-100 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>family.admin@example.com</span>
              </div>
              <p>Site Administrator: Sarah Johnson</p>
              <p>For questions about family history or site access</p>
            </div>
          </div>

          {/* Legal and Privacy */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Privacy & Legal</h3>
            <div className="space-y-2 text-amber-100 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Statement
                </Link>
              </div>
              <p>Family members only - Invite required</p>
              <p className="text-xs mt-4">© {new Date().getFullYear()} Johnson Family Tree. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Family Motto */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-100 italic font-serif">
            "He tangata, he tangata, he tangata" - It is the people, it is the people, it is the people
          </p>
        </div>
      </div>
    </footer>
  )
}
