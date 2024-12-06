import ContactSection from "@/components/contact";
import InsuranceSection from "@/components/insuranceForms/InsuranceSection";
import Offers from "@/components/offers";
import Reviews from "@/components/reviews";
import localFont from "next/font/local";

const ralewayItalicVariable = localFont({
  src: "./fonts/Raleway-Italic-VariableFont_wght.ttf",
  variable: "--font-raleway-italic",
  weight: "100 900"
})

const ralewayVariable = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
  weight: "100 900"
})

export default function Home() {
  return (
    <div
      className={`${ralewayItalicVariable.variable} ${ralewayVariable.variable} bg-white items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col w-full bg-[#F9F9F9]">
        <InsuranceSection />
        <ContactSection />
        <Offers />
        <Reviews />
      </main>
    </div>
  );
}
