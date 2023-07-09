import React from "react";
import { Footer } from "flowbite-react";
import Logo from "../Logo";

const CustomFooter = ({}) => {
  return (
    <Footer className={"pt-32 shadow-none"}>
      <div className="w-full bg-primary p-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className={"mb-8"}>
            <Logo variant={"Secondary"} />
          </div>
          <div
            id={"contatti_footer"}
            className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6"
          >
            <div>
              <Footer.Title
                title="Referenti"
                className="text-white font-montserrat font-light tracking-[1px] text-left sm:text-right"
              />
              <Footer.LinkGroup
                col={true}
                className="text-white font-montserrat font-light text-left sm:text-right"
              >
                <a href="mailto:maurizio.poli@artigianelli.tn.it?subject=Richiesta%20informazioni">
                  Maurizio Poli
                </a>
                <a href="mailto:maurizio.poli@artigianelli.tn.it?subject=Richiesta%20informazioni">
                  Marco Rossi
                </a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Contatti"
                className="text-white font-montserrat font-light tracking-[1px] text-left sm:text-right"
              />
              <Footer.LinkGroup
                col={true}
                className="text-white font-montserrat font-light text-left sm:text-right"
              >
                <a href="tel:111111111">366 2287 342</a>
                <a href="tel:111111111">266 5416 761</a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Indirizzo"
                className="text-white font-montserrat font-light tracking-[1px] text-left sm:text-right"
              />
              <Footer.LinkGroup
                col={true}
                className="text-white font-montserrat font-light text-left sm:text-right"
              >
                <a href="https://goo.gl/maps/ySqKtdKSXmvtyrDC8">
                  Via Porta Nuova
                </a>
                <a href="https://goo.gl/maps/ySqKtdKSXmvtyrDC8">Verona - VR</a>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <div className="w-full pt-7 sm:flex sm:items-center sm:justify-between text-secondary">
          <Footer.Copyright href="#" by="La Pavoni S.R.L.™" year={2023} />
          <Footer.LinkGroup col={true}>
            <Footer.Link href="#">Privacy & Policy</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
