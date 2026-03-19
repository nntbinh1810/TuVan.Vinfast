'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { label: 'Mẫu xe', href: '#models' },
    { label: 'Giá bán', href: '#pricing' },
    { label: 'Chỉ số kỹ thuật', href: '#specs' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-secondary/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="hidden sm:block font-bold text-xl text-foreground">
              VinFast Electric
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-primary hover:bg-orange-600 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
            Đặt lịch tư vấn
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-2 bg-primary hover:bg-orange-600 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Đặt lịch tư vấn
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
