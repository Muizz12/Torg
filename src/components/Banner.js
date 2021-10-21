import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import Wave from './wave';
function Banner() {
    return (
        <div className="relative cursor-pointer">
            <div className='absolute w-screen   bottom-0 z-20' />
            <div >
                <img loading="lazy" src="Images/Base.png" alt='Banner' />
            </div>
            <div className=' absolute top-5 left-12 align-middle sm:top-15 md:top-32'>
                <h3 className='  text-gray-800 font-semibold md:text-5xl mb-2'>Best Towing Service & </h3>
                <h3 className=' text-gray-800 font-semibold md:text-5xl mb-2'>Roadside Assistance</h3>
                <p className="lg:text-sm text-gray-800 font-semibold">When you're stranded on the side of the road, the</p>
                <p className="lg:text-sm text-gray-800 font-semibold">TORG App will connect you with the right</p>
                <p className=" lg:text-sm text-gray-800 font-semibold">professional</p>
                <div className="flex flex-grow items-center space-x-5 mt-5">
                    <div className=" pt-2 pb-2 flex items-center justify-center bg-amazon_blue pr-4 pl-4 rounded-lg  text-white ">

                        <ShopIcon className="text-gray-100" />
                        <div className="ml-2">
                            <p className="text-xs font-extralight">Download on the</p>
                            <p>Google Play</p>
                        </div>

                    </div>
                    <div className="flex  items-center justify-center bg-amazon_blue pr-4 pl-4 pt-2 pb-2 rounded-lg   text-white ">
                        <AppleIcon className="text-gray-100" />
                        <div className="ml-2">
                            <p className="text-xs font-extralight">Download on the</p>
                            <p>App Store</p>
                        </div>

                    </div>
                </div>
                {/* hidden md:flex lg:flex relative align-bottom  */}

            </div>
            <div className="absolute top-11 right-11 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={50}
                    width={100}
                />




            </div>
            <div className="hidden sm:inline-block absolute top-5 -right-6 md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={100}
                    width={150}
                />
            </div>
            <div className="hidden md:inline-block absolute top-11 right-6 sm:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={150}
                    width={200}
                />
            </div>
            <div className="hidden lg:inline-block absolute top-11 right-6 sm:hidden md:hidden xl:inline-block ">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={250}
                    width={350}
                />
            </div>


            <div className=" -my-20 -mx-20">
                <div className="hidden md:inline-block">


                    <img
                        src="Images/wave.png"
                        objectFit="contain"
                        height={1500}
                        width={2500}

                    />
                </div>
                <div className="flex flex-grow items-center justify-center ml-5 pl-2 mb-5 pb-5">
                    <div className="flex flex-grow items-center justify-center space-x-5 ">
                        <img
                            src="Images/Group 195.png"
                            objectFit="contain"
                            height={200}
                            width={550}
                        />

                    </div>
                    <div className="flex flex-grow items-center justify-center ml-5 pl-5 mr-5 pr-5 align-middle mt-28 pt-12">
                        <div>
                            <p className="flex flex-grow items-center  text-3xl font-semibold">How it Works</p>
                            <p className="flex flex-grow items-center text-xx font-extralight mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                            <div className=" flex flex-grow items-center justify-center border border-gray-300 p-4 mt-4 rounded-md hover:border-amazon_blue  hover:bg-amazon_blue hover:text-white rounded-md">

                                <img
                                    src="Images/icon.png"
                                    width={50}
                                    height={50}
                                    objectFit="contain"
                                    className="cursor-pointer active:transform active:scale-90 "
                                />



                                <div className="ml-4 pl-4 mr-4 pr-4">
                                    <p className="text-sm font-semibold">Sign In</p>
                                    <p className="text-xs font-extralight pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                </div>
                            </div>
                            <div className=" flex flex-grow items-center justify-center border border-gray-300 p-4 mt-4 rounded-md hover:border-amazon_blue  hover:bg-amazon_blue hover:text-white rounded-md">

                                <img
                                    src="Images/icon.png"
                                    width={50}
                                    height={50}
                                    objectFit="contain"
                                    className="cursor-pointer active:transform active:scale-90 "
                                />


                                <div className="ml-4 pl-4 mr-4 pr-4">
                                    <p className="text-sm font-semibold">Select a service</p>
                                    <p className="text-xs font-extralight pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                </div>
                            </div>
                            <div className=" flex flex-grow items-center justify-center border border-gray-300 p-4 mt-4 rounded-md hover:border-amazon_blue  hover:bg-amazon_blue hover:text-white rounded-md">

                                <img
                                    src="Images/icon.png"
                                    width={50}
                                    height={50}
                                    objectFit="contain"
                                    className="cursor-pointer active:transform active:scale-90 "
                                />


                                <div className="ml-4 pl-4 mr-4 pr-4">
                                    <p className="text-sm font-semibold">Professional will assit</p>
                                    <p className="text-xs font-extralight pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div >

    )
}

export default Banner
