import { Header } from "./_components/header";
import { Services } from "./_components/services";
import { Title } from "./_components/title";
import { Trusted } from "./_components/trusted";
import { Products } from "./_components/products";
import Certifications from "@/app/_components/certifications";
import Partners from "@/app/_components/partners";
import NewsSection from "@/app/_components/news-section";
import ConsultationSection from "@/app/_components/consultation-section";
import CareerSection from "@/app/_components/career-section";
import ContactsSection from "@/app/_components/contacts-section";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Title />

        <Trusted />

        <Services />

        <Products />

        <Certifications />

        <Partners />

        <NewsSection />

        <ConsultationSection />

        <CareerSection />

        <ContactsSection />
      </main>
    </div>
  );
}
