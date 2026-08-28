import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
    links: Array<{ href: string; label: string }>;
}

export default function MobileMenu({ links }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-14 left-0 right-0 bg-card border-b border-border shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
                        <nav className="container py-4 space-y-1">
                            {/* Home Link */}
                            <a
                                href="/"
                                className="block px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>

                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
}
