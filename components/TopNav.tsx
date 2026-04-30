import Link from "next/link"

export default function TopNav() {
    return (
        <nav className="w-full h-14 bg-gray-50 border-b border-gray-200 flex items-center justify-between px-6">
            <h1 className="text-lg font-semibold text-black">Store Platform</h1>
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition">
                Back to Login
            </Link>
        </nav>
    )
}