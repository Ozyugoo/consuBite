
import whatWeServeImage from '../assets/images/whatWeServe.png'

function WhatWeServe() {
    return (
        <div className="h-screen flex items-center justify-center px-6 sm:px-32 py-6 sm:py-0">
            <div className="container mx-auto text-left text-custom-black">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-16">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-8">
                        <img src={whatWeServeImage} alt="whatWeServeImage" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeServe;
