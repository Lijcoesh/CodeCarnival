import Landingpage from "./Landingpage";
import CodeFeatures from "./CodeFeatures";
import Footer from "./Footer";
import AccountButton from "../../Components/Buttons/AccountButton";

export default function Homepage() {
  return (
    <>
      <AccountButton />
      <Landingpage />
      <CodeFeatures />
      <Footer />
    </>
  );
}
