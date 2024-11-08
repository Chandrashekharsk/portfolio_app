{
          {/* Experience Section */}
          <section id="experience" className="bg-gray-100 py-20">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Experience</h2>
            <div className="space-y-10">
              {/* Experience Item */}
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <MdWork className="text-4xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Frontend Developer</h3>
                  <p className="text-gray-600">Company Name</p>
                  <p className="text-gray-500">Jan 2020 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Developed and maintained the front end functionality of websites.</li>
                    <li>Worked closely with designers to implement responsive designs.</li>
                    <li>Optimized applications for maximum speed and scalability.</li>
                  </ul>
                </div>
              </div>
              {/* Repeat Experience Items as needed */}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-5 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "Your Name is a highly skilled developer who consistently delivers high-quality work. Their attention to detail and dedication to excellence are truly commendable."
              </p>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Client One</h4>
                  <p className="text-gray-500">CEO, Company One</p>
                </div>
              </div>
            </div>
            {/* Repeat Testimonial Cards as needed */}
          </div>
        </section>
}