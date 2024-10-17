import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-4">
                        <Link href="https://github.com/jaczerob" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <img
                                className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
                                src={`https://cdn.simpleicons.org/github?viewbox=auto`}
                                width={`6`}
                                height={`6`}
                                alt={`Github Icon`}
                            />
                        </Link>
                        <Link href="https://discord.gg/uQG2eStg6q" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <img
                                className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
                                src={`https://cdn.simpleicons.org/discord/black?viewbox=auto`}
                                width={`6`}
                                height={`6`}
                                alt={`Discord Icon`}
                            />
                        </Link>
                    </div>

                    {/* Copyright and Creator Name */}
                    <div className="text-center text-sm text-gray-600">
                        <p>&copy; {currentYear} All Rights Reserved</p>
                        <p className="mt-1">Created by jaczerob</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}