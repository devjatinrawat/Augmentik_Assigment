
import hero_img from "../../assets/hero.png";


const BannerSection = () => {
  return (
    <>
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* Text section on the left */}
      <div>
        <h1 className="max-w-2xl mb-4 text-5xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Your customized Token <br />
        For Globally Compliant <br />
        Distribution Events
        </h1>
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry.
        </p>
        <button className="text-white bg-cyan-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2">Get Started</button>
      </div>
      
      {/* Image section on the right */}
      <div className="w-1/2 flex justify-center items-center">
      <img src={hero_img} alt="hero image" />
      </div>
    </div>
    </>
  )
}

export default BannerSection
