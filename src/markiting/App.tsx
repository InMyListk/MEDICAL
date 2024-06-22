import { Header } from "./header";
import { SectionOne } from "./sectionOne/section";
import { SectionThree } from "./sectionThree/section";
import { SectionTwo } from "./sectionTwo/section";
import { SectionFour } from "./sectionFour/section";
import { SectionFive } from "./footer/section";

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </>
  );
}

export default App;
