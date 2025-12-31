"use client";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button/Button";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const handleNavigateLogin = () => {
    router.push("/auth/login");
  };
  const handleNavigateRegister = () => {
    router.push("/auth/register");
  };
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-yellow-300">E-Commerce</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/products" className="text-white hover:text-yellow-200">
            Products
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-200">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-200">
            Contact
          </Link>
          <Link href="/blog" className="text-white hover:text-yellow-200">
            Blog
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button
            fullWidth
            variant="primary"
            loading={false}
            onClick={handleNavigateLogin}
            className="bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="primary"
            loading={false}
            onClick={handleNavigateRegister}
            className="bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
          >
            Register
          </Button>
        </div>

        {/* Mobile menu Button */}
        <Button
          fullWidth
          variant="primary"
          loading={false}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen &&
        <nav className="md:hidden bg-blue-500 text-white px-4 py-2 space-y-2">
          <Link
            href="/products"
            className="block text-yellow-200 hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block text-yellow-200 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-yellow-200 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Button
            fullWidth
            variant="primary"
            loading={false}
            className="w-full text-left bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="primary"
            loading={false}
            className="w-full text-left bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
          >
            Register
          </Button>
        </nav>}
    </header>
  );
}
