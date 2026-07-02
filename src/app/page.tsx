import { WebTechHeader } from "@/components/webtech/header";
import { Hero } from "@/components/webtech/hero";
import { Problem } from "@/components/webtech/problem";
import { Benefits } from "@/components/webtech/benefits";
import { BeforeAfter } from "@/components/webtech/before-after";
import { DemoCta } from "@/components/webtech/demo-cta";
import { HowItWorks } from "@/components/webtech/how-it-works";
import { Includes } from "@/components/webtech/includes";
import { Faq } from "@/components/webtech/faq";
import { FinalCta } from "@/components/webtech/final-cta";
import { WebTechFooter } from "@/components/webtech/footer";

export default function Home() {
  return (
    <>
      <WebTechHeader />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <BeforeAfter />
        <DemoCta />
        <HowItWorks />
        <Includes />
        <Faq />
        <FinalCta />
      </main>
      <WebTechFooter />
    </>
  );
}
