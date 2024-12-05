import '@/assets/main.scss';

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
