import { Header } from "./header";
import { SectionOne } from "./sectionOne/section";
import { SectionThree } from "./sectionThree/section";
import { SectionTwo } from "./sectionTwo/section";
import { SectionFour } from "./sectionFour/section";
import { SectionFive } from "./footer/section";
import Fade from "react-reveal";

function App() {
  return (
    <>
      <Header />
      <Fade duration="3500">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Fade>
    </>
  );
}

export default App;
