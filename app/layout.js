import "./globals.css";
import Header from "@/components/app/header";
import Footer from "@/components/app/footer";

export const metadata = {
    title: "Toontown Companion",
    description: "A tracker for Toontown Rewritten",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`min-h-screen grid-rows-4`} style={{backgroundImage: `url(/resources/gags_pattern.png)`, backgroundRepeat: `repeat`}}>
        <Header className={`bg-white shadow-lg mb-4 h-16`}/>
        <div className={`row-span-2`}>
            {children}
        </div>
        <Footer className={`bg-white h-12`}/>
        </body>
        </html>
    );
}
