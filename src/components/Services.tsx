import man_img from "../../assets/icon-portfolio-green.svg";
import blog_img from "../../assets/icon-blog.svg";
import ecomm from "../../assets/icon-ecommerce.svg";
import bus from "../../assets/icon-business.svg";
import life from "../../assets/icon-lifestyle.svg";
import startup from "../../assets/icon-startup.svg";



const Services = () => {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            What Services, We Give You!
          </h2>
        </div>
        <div className="space-y-8 mb-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* <!-- Service Card 1 --> */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center justify-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={man_img} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Easy Booking</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <!-- Service Card 2 --> */}
          <div className="flex flex-col p-6 mx-auto justify-center max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={startup} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Restaurant Home</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <!-- Service Card 3 --> */}
          <div className="flex flex-col p-6 mx-auto justify-center max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={life} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Swimming Pool</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <!-- Service Card 4--> */}
          <div className="flex flex-col p-6 mx-auto justify-center max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={ecomm} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Mobil Payment</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <!-- Service Card 5--> */}
          <div className="flex flex-col p-6 mx-auto justify-center max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={bus} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Bank Card Services</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* <!-- Service Card 6--> */}
          <div className="flex flex-col p-6 mx-auto justify-center max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={blog_img} alt="Service Image" className="block mx-auto" />
            <h3 className="text-3xl font-bold mt-8 mb-8">Best Home</h3>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        </div>
    </>
  );
};

export default Services;
