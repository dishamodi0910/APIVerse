import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />

      <section className="py-20 px-4 text-center bg-blue-100 text-white rounded-3xl">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-blue-900">
            Welcome to My CMS
          </h1>
          <p className="text-lg mb-8 text-blue-500">
            Your one-stop solution for managing content with ease.
          </p>
          <a
            href="/New-Schema"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                Easy Content Management
              </h3>
              <p>
                Effortlessly manage your website's content with our intuitive
                and user-friendly interface. Update pages, add blog posts, and
                upload media with ease.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                Customizable Templates
              </h3>
              <p>
                Choose from a wide range of professionally designed templates to
                match your brand's style. Customize layouts, colors, and fonts
                to create a unique look for your website.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                Collaboration Tools
              </h3>
              <p>
                Streamline your workflow with built-in collaboration tools.
                Invite team members to collaborate on content creation, assign
                tasks, and track progress in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-300 rounded-lg bg-white">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Save Time and Effort
              </h3>
              <p>
                Our CMS simplifies content management tasks, saving you time and
                effort. Spend less time on technicalities and more time on
                creating engaging content for your audience.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg bg-white">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Increase Productivity
              </h3>
              <p>
                With streamlined workflows and collaboration features, our CMS
                helps teams work more efficiently. Increase productivity and
                accomplish more together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <blockquote className="text-lg text-gray-700 mb-4">
                "My CMS has transformed the way we manage our website. It's
                intuitive, powerful, and has everything we need to keep our
                content fresh and engaging."
              </blockquote>
              <cite className="block text-sm font-semibold">
                - John Doe, Marketing Manager
              </cite>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <blockquote className="text-lg text-gray-700 mb-4">
                "As a small business owner, I appreciate how easy it is to
                update my website using My CMS. It has helped me save time and
                maintain a professional online presence."
              </blockquote>
              <cite className="block text-sm font-semibold">
                - Jane Smith, Small Business Owner
              </cite>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-blue-50">
              <blockquote className="text-lg text-gray-700 mb-4">
                "The collaboration tools in My CMS have revolutionized our
                content creation process. Now, our team can work together
                seamlessly, no matter where we are."
              </blockquote>
              <cite className="block text-sm font-semibold">
                - Emily Johnson, Content Creator
              </cite>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My CMS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
