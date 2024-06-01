import { ThemeProvider } from "@/components/theme-provider";
import Section from "@/components/Section";
import Header from "@/components/Header";
import MouseBackground from "@/components/MouseBackground";
import Sharing from "@/components/sections/Sharing";
import Highlited from "@/components/Highlited";
import AISection from "@/components/sections/AISection";
import Download from "@/components/sections/Download";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wearable-theme">
      {/* <div className="from-app-color to-app-color-dark fixed inset-0 z-[-1] bg-gradient-to-r to-30%"></div> */}
      <MouseBackground />
      <Header />
      <main className="container m-0 flex min-h-screen min-w-full snap-y snap-mandatory flex-col items-center justify-center">
        <Section id="ai">
          <AISection />
        </Section>
        <Section id="share">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="h-1/12 flex w-full items-center justify-center">
              <h1 className="text-6xl font-bold">
                <Highlited>Share</Highlited> & take inspiration
              </h1>
            </div>
            <div className="flex h-full w-full flex-row items-center justify-center p-14">
              <Sharing />
            </div>
          </div>
        </Section>
        <Section id="download">
          <Download />
        </Section>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
