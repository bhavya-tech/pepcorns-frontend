
export default function Hero() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto px-5 flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/4 w-full  rounded" src="https://api.pepcorns.com/clientassets/icon1651230435196.png" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Letzrent</h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Address : Mumbai, Maharashtra</h2>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">PAN/TAN : AAJCR3294F</h2>
            <div className="flex">

              <a className="text-indigo-300">hello@letzrent.com</a>
            </div>
            <div className="flex">
              <a className="text-indigo-300">letzrent.com</a>
            </div>
            <div className="flex mb-4">

              <span className="flex  py-2 space-x-2s">
                <a className="text-gray-500 hover:text-indigo-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500 hover:text-indigo-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500 hover:text-indigo-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Online search, compare & booking platform for self-drive cars, charter flights, living space & more that rewards users
            </p>


          </div>
        </div>
      </div>
    </section>

  )
}