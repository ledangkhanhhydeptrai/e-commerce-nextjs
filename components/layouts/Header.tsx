"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button/Button";

export default function Header() {
  const [user, setUser] = React.useState<{
    token: string | null;
    username: string;
  } | null>(null);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
  const router = useRouter();

  const handleNavigateLogin = () => {
    router.push("/auth/login");
  };

  const handleNavigateRegister = () => {
    router.push("/auth/register");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    setUser(null);
    setDropdownOpen(false);
    router.push("/");
  };

  React.useEffect(() => {
    const storeToken = localStorage.getItem("jwt");
    const storedUsername = localStorage.getItem("username");
    if (storeToken) {
      setUser({ token: storeToken, username: storedUsername || "User" });
    }
  }, []);

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
        {user ? (
          <div className="hidden md:flex items-center space-x-4 relative">
            {/* Shopping Cart Icon */}
            <Link href="/cart" className="relative">
              <Button
                loading={false}
                variant="primary"
                fullWidth
                className="text-white hover:text-yellow-200 transition-colors p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* Badge số lượng */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

            <div className="relative">
              <Button
                loading={false}
                variant="primary"
                fullWidth
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 bg-yellow-300 text-blue-600 px-4 py-2 rounded hover:bg-yellow-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">{user.username}</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Profile</span>
                    </div>
                  </Link>
                  <Button
                    loading={false}
                    variant="secondary"
                    fullWidth
                    onClick={handleLogout}
                    className="bg-white block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-black">Đăng xuất</span>
                    </div>
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            {/* Shopping Cart Icon */}
            <Link href="/cart" className="relative">
              <Button
                loading={false}
                variant="primary"
                fullWidth
                className="text-white hover:text-yellow-200 transition-colors p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>

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
        )}

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
      {menuOpen && (
        <nav className="md:hidden bg-blue-500 text-white px-4 py-2 space-y-2">
          <Link
            href="/cart"
            className="flex items-center justify-between text-yellow-200 hover:text-white transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex items-center space-x-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Giỏ hàng</span>
            </span>
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link
            href="/products"
            className="block text-yellow-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block text-yellow-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-yellow-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="block text-yellow-200 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>

          {user ? (
            <>
              <div className="pt-2 border-t border-blue-400">
                <p className="text-yellow-200 text-sm mb-2">
                  Hello, {user.username}
                </p>
                <Link
                  href="/profile"
                  className="block bg-yellow-300 text-blue-600 px-4 py-2 rounded hover:bg-yellow-400 transition-colors mb-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <Button
                  loading={false}
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="w-full text-left bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Đăng xuất
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button
                fullWidth
                variant="primary"
                loading={false}
                onClick={() => {
                  handleNavigateLogin();
                  setMenuOpen(false);
                }}
                className="w-full text-left bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
              >
                Login
              </Button>
              <Button
                fullWidth
                variant="primary"
                loading={false}
                onClick={() => {
                  handleNavigateRegister();
                  setMenuOpen(false);
                }}
                className="w-full text-left bg-black text-blue-600 px-4 py-1 rounded hover:bg-gray-100 hover:text-blue-800 transition-colors"
              >
                Register
              </Button>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
