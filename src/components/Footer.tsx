"use client";

import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Oz astro consultation</h3>
            <p className="text-slate-700">
              Professional astrology readings and spiritual guidance for your
              cosmic journey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Quick Links</h4>
            <ul className="space-y-2 text-slate-700">
              <li>
                <Link href="#services" className="hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-green-600">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:ozastroconsultancy@gmail.com" className="hover:text-green-600">
                  ozastroconsultancy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a
                  href="https://chat.whatsapp.com/KjjpQyQCXXNBsdj1mJuQ3G?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  WhatsApp Group
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Online Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-700 text-xs sm:text-sm text-center md:text-left">
            <p>&copy; 2024 Oz astro consultation. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
