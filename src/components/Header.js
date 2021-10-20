function Header() {
    return (
        <header className="sticky top-0 z-50">
            <div className=" flex flex-grow pl-5 items-center justify-start cursor-pointer h-12 mt-5 ">
                <div className="flex items-center justify-center">
                    <img src="Images/logo.svg"
                        width={40}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer active:transform active:scale-90" />
                </div>
                <div className="flex flex-grow items-center justify-end text-sm text-gray-600 font-semibold ml-5 space-x-4">
                    <p className="hover:text-amazon_blue cursor-pointer">Home</p>
                    <p className="hover:text-amazon_blue cursor-pointer">How it works</p>
                    <p className="hover:text-amazon_blue cursor-pointer">Our Services</p>
                    <p className="hover:text-amazon_blue cursor-pointer">App Screenshots</p>

                </div>
                <div className="flex flex-grow justify-evenly ml-2 mr-5 ">
                    <button className="bg-amazon_blue pr-4 pl-4 rounded-lg text-sm w-auto h-9 text-white font-semibold" >
                        Download
                    </button>

                </div>
            

            </div>
        </header>
    )
}
export default Header
