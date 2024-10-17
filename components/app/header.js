"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header({className}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [isOpen])

    return (
        <nav className={className}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/" className="flex items-center py-4 px-2">
                                <h1 className="text-lg">Toontown Companion</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Links className="py-4 px-2 hover:text-gray-900 transition duration-300"/>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <Links className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300"/>
            </div>
        </nav>
    )
}

function Links({className}) {
    return (
        <div>
            <Link href="/" className={className}>Home</Link>
            <Link href="/fishing" className={className}>Fishing</Link>
            {/*<Link href="#" className={className}>Statistics</Link>*/}
            {/*<Link href="#" className={className}>Promotions</Link>*/}
            {/*<Link href="#" className={className}>Gardening</Link>*/}
            {/*<Link href="#" className={className}>Racing</Link>*/}
            {/*<Link href="#" className={className}>Golfing</Link>*/}
        </div>
    )
}