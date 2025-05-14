import {Link} from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type {ButtonHTMLAttributes, ReactNode} from 'react';

const cn = (...inputs: string[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function HomePage() {
    const Button = ({
                        children,
                        variant = 'default',
                        size = 'default',
                        className = '',
                        ...props
                    }: {
        children: ReactNode;
        variant?: 'default' | 'outline';
        size?: 'default' | 'lg';
        className?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

        const variants = {
            default: 'bg-blue-600 text-white hover:bg-blue-700',
            outline: 'border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900',
        };

        const sizes = {
            default: 'h-10 px-4 text-base',
            lg: 'h-12 px-6 text-lg',
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Take Control of Your Finances
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Track your income and expenses, create custom categories, and visualize your financial data with our
                                        easy-to-use personal finance tracker.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link to="/pages/dashboard">
                                        <Button size="lg">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/about">
                                        <Button size="lg" className="bg-white">
                                            Learn More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <img
                                src="/placeholder.svg?height=550&width=550"
                                alt="Personal Finance Tracker Dashboard"
                                width="550"
                                height="550"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Everything you need to manage your personal finances effectively
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Transaction Tracking</h3>
                                <p className="text-center text-muted-foreground">
                                    Easily record and categorize your income and expenses
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M3 3v18h18"></path>
                                        <path d="m19 9-5 5-4-4-3 3"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Data Visualization</h3>
                                <p className="text-center text-muted-foreground">
                                    View your financial data with intuitive charts and graphs
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Custom Categories</h3>
                                <p className="text-center text-muted-foreground">
                                    Create and manage custom categories for better organization
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Budget Planning</h3>
                                <p className="text-center text-muted-foreground">
                                    Set budgets for different categories and track your spending
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">CSV Export</h3>
                                <p className="text-center text-muted-foreground">
                                    Export your transaction data to CSV for further analysis
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold">Data Persistence</h3>
                                <p className="text-center text-muted-foreground">
                                    Your data is securely stored locally and persists between sessions
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t py-6">
                <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © 2025 Personal Finance Tracker. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}