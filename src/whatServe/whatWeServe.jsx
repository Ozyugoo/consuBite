import whatWeServeImage from '../assets/images/whatWeServe.png'

function WhatWeServe() {
    return (
        <div className="h-screen flex items-center justify-center px-6 sm:px-32 py-6 sm:py-0">
            <div className="mx-auto text-left text-custom-black">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-8">
                        <img src={whatWeServeImage} alt="whatWeServeImage" className="w-full h-auto" />
                    </div>
                    <div className="m-20 w-full">
                        <h1 className="text-xl md:text-4xl font-bold mb-6">What We <span className='text-custom-red'>Serve</span></h1>
                        <p className="text-xs sm:text-base font-normal mb-4">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
                        <p className="text-xs sm:text-base font-normal">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeServe;

// import whatWeServeImage from "../assets/images/whatWeServe.png";

// function WhatWeServe() {
//   return (
//     <div className="h-screen flex items-center justify-center px-6 sm:px-32 py-6 sm:py-0">
//       <div className="h-screen bg-gray-50 flex items-center">
//         <section
//           className="bg-cover bg-center py-32 w-full">
//           <div className="container mx-auto text-left text-white">
//             <div className="flex items-center">
//               <div className="w-1/2">
//                 <h1 className="text-5xl font-medium mb-6">Welcome to My Agency</h1>
//                 <p className="text-xl mb-12">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
//                   viverra euismod odio, gravida pellentesque urna varius vitae.
//                 </p>
//                 <a
//                   href="#"
//                   className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
//                 >
//                   Demo
//                 </a>
//               </div>
//               <div className="w-1/2 pl-16">
//               <img src={whatWeServeImage} alt="whatWeServeImage" className="w-full h-auto" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default WhatWeServe;
