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
        <body className={`flex flex-col h-screen justify-between`} style={{backgroundImage: `url(/resources/gags_pattern.png)`, backgroundRepeat: `repeat`}}>
        <Header className={`bg-white shadow-lg mb-4`}/>
        {children}
        <Footer className={`bg-white`}/>
        </body>
        </html>
    );
}
