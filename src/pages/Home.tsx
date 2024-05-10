import AdditionalFeature from "../components/AdditionalFeature"
import BannerSection from "../components/BannerSection"
import FeaturesSection from "../components/FeaturesSection"
import Navbar from "../components/Navbar"
import PrincingSection from "../components/PrincingSection"
import Services from "../components/Services"



const Home = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <Services />
      <FeaturesSection/>
      <PrincingSection />
      <AdditionalFeature/>

    </>
  )
}

export default Home

      {/* /* <FeaturesSection/>
      <PricingSection/>
      <AdditionalFeature/>
      <Testonomials/> */} 