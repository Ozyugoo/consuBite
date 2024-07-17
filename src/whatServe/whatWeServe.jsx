
import whatWeServeImage from '../assets/images/whatWeServe.png'

function WhatWeServe() {
    return (
        <div className="h-screen flex items-center justify-center px-6 sm:px-32 py-6 sm:py-0">
            <div className="container mx-auto text-left text-custom-black">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-16">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-8">
                        <img src={whatWeServeImage} alt="whatWeServeImage" className="w-full h-auto" />
                    </div>
                    <div className="m-20 w-full sm:w-1/2">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">What We <span className='text-custom-red'>Serve</span></h1>
                        <p className="text-sm sm:text-base font-normal mb-4">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
                        <p className="text-sm sm:text-base font-normal">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeServe;
