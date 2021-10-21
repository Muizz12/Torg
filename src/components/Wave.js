function Wave() {
    return (
        <div className=" -my-20 -mx-20">
            <div className="hidden md:inline-block">


                <img
                    src="I mages/wave.png"
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
                <div className="flex flex-grow items-center justify-center ml-5 pl-5 mr-5 pr-5 align-middle">
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

    )
}

export default Wave
