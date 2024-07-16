function Footer() {
  return (
    <>
      <footer className="bg-black w-full h-auto px-24 py-20 text-white flex flex-row place-content-between items-start font-poppins max-md:flex-col max-md:gap-8 max-md:px-6 max-md:py-12">
        {/* Consubite logo, tagline and social media links */}
        <div className="w-72 flex flex-col gap-y-8 max-md:w-fit">
          <div className="w-fit flex flex-col gap-y-4">
            <img
              src="/pictures/ConsuBite logo red.png"
              alt="consubite logo"
              className="w-48 h-14"
            />
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam
              rhoncus amet at lobortis nec
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold">Follow Us</p>
            <div className="flex flex-row gap-4">
              <img src="/pictures/instagram icon.svg" alt="instagram icon" />
              <img src="/pictures/facebook icon.svg" alt="facebook icon" />
              <img src="/pictures/X icon.svg" alt="X icon" />
            </div>
          </div>
        </div>

        <div className="w-2/3 flex flex-row place-content-between items-start pt-6 max-md:flex-col max-md:gap-6 max-md:w-full">
          {/* Opening hours section */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Opening Hours</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <p className="text-sm font-normal">Mon - Fri</p>
                <p className="text-sm font-normal">09:00 AM - 10:00 PM</p>
              </div>
              <div className="flex flex-row gap-3">
                <p className="text-sm font-normal">Sat - Sun</p>
                <p className="text-sm font-normal">11:00 AM - 09:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick links section */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Quick Links</p>
            <div className="flex flex-col gap-3 text-sm font-normal">
              <p>About Us</p>
              <p>Menu</p>
              <p>Help</p>
            </div>
          </div>

          {/* Contact us section */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="flex flex-col gap-3 text-sm font-normal">
              {/* Email Address */}
              <div className="flex flex-row gap-3 items-center">
                <img src="/pictures/email icon.svg" alt="email icon" />
                <p className="text-sm font-normal">admin@consubite.io</p>
              </div>
              {/* Phone number */}
              <div className="flex flex-row gap-3 items-center">
                <img src="/pictures/call icon.svg" alt="call icon" />
                <p className="text-sm font-normal">+234 8012345678</p>
              </div>
              {/* Address */}
              <div className="flex flex-row gap-3 items-center">
                <img src="/pictures/address icon.svg" alt="location icon" />
                <p className="text-sm font-normal">
                  10 Chow road, Maryland, Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
