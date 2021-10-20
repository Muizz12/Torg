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
                <h3 className='  text-gray-800 font-semibold sm:text-5xl mb-2'>Best Towing Service & </h3>
                <h3 className=' text-gray-800 font-semibold sm:text-5xl mb-2'>Roadside Assistance</h3>
                <p className=" sm:text-sm text-gray-800 font-semibold">When you're stranded on the side of the road, the</p>
                <p className="sm:text-sm text-gray-800 font-semibold">TORG App will connect you with the right</p>
                <p className=" sm:text-sm text-gray-800 font-semibold">professional</p>
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


            <Wave />



            <div className="hidden sm:hidden md:hidden lg:inline-block absolute top-10 right-32 ">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={100}
                    width={350}
                />




            </div>
            <div className=" hidden  lg:hidden  xl:hidden 2xl:hidden 4xl:hidden md:inline-block absolute top-20 right-24">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={100}
                    width={200}
                />

            </div>
            <div className=" sm:hidden md:hidden lg:hidden  xl:hidden 2xl:hidden 4xl:hidden sm:flex absolute top-12 right-12 ">
                <img
                    src="Images/iphone.png"
                    objectFit="contain"
                    height={50}
                    width={100}
                />

            </div>


        </div >

    )
}

export default Banner
