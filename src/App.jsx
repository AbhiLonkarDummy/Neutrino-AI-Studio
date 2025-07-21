"use client";
import "./App.css";
import Container from "./components/layout/Container/Container";
import Hero from "./components/sections/Hero/Hero";
import NavbarComponent from "./components/layout/NavbarComponent/NavbarComponent";
import UseCases from "./components/sections/Usecases/Usecases";
import CustomerLogos from "./components/ui/Logos";
import ReactLenis from "lenis/react";
function App() {
  return (
    <>
      <ReactLenis root>
        <NavbarComponent></NavbarComponent>
        <Hero></Hero>
        <Container>
          <section className="logos-section mb-12 max-w">
            <div className="mt-6 mb-4 text-center">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
                Trusted by top Companies
              </h2>

              {/* <p className="mt-2 text-lg sm:text-xl max-w-3xl mx-auto leading-snug">
                Don’t just take our word for it!
              </p> */}
            </div>

            <CustomerLogos></CustomerLogos>
          </section>
        </Container>
        <UseCases></UseCases>
      </ReactLenis>
    </>
  );
}

export default App;
