import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      title: "Chaplaincy Services",
      description: "Providing spiritual and emotional support to individuals in various settings.",
      image: "/chaplaincy.jpg",
    },
    {
      title: "Reintegration Support",
      description: "collaboration with Kabiria Reformed Boys, continues to grow and make a lasting impact each day. Transformation is not a one-time event but an ongoing process that requires dedication and commitment.",
      image: "/collabo-support.jpg",
    },
    {
      title: "Boy Child Advocacy & Contact Tracing",
      description: "Promoting the rights and well-being of boys, and helping reunite families.",
      image: "/boy-child.jpg",
    },
    {
      title: "Vocational Training for Ex-Convicts",
      description: "Equipping former inmates with skills to secure employment and rebuild their lives.",
      image: "/vocational-training.jpg",
    },
    {
      title: "Legal Aid & Community Paralegal Services",
      description: "Providing legal assistance and education to underserved communities.",
      image: "/legal-aid.jpg",
    },
    {
      title: "Vacation camps ",
      description: "Adventure with relaxation of minds and uniting the society.",
      image: "/fun.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Our Programs - Chaplains of Hope</title>
      </Head>

      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={120} height={120} className="mr-2 transform scale-150" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="hover:text-red-500 transition-colors">
              Programs
            </Link>
            <Link href="/membership" className="hover:text-red-500 transition-colors">
              Membership
            </Link>
            <Link href="/donations" className="hover:text-red-500 transition-colors">
              Donate
            </Link>
            <Link href="/news" className="hover:text-red-500 transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </nav>
          <button className="md:hidden">Menu</button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/programs-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Programs</h1>
            <p className="text-xl md:text-2xl animate-fade-in animation-delay-300">
              Making a difference, one life at a time
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-green-700">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Link
                      href={`/programs/${program.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-green-600 hover:text-green-700 font-semibold"
                    >
                      Learn More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-700">How to Get Involved</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your support can make a significant impact on the lives of those we serve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donations"
                className="bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>00100 Muslim, Kawangware, Nairobi</p>
              <p>Phone: (+245) 728620614/ 100546840</p>
              <p>Email: chaplinofhopecbo@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-gray-300">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="hover:text-gray-300">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/donations" className="hover:text-gray-300">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-gray-300">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/muthioram.kuria/" className="hover:text-gray-300">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 Chaplains of Hope. All rights reserved.</p>
            <p className="mt-2 text-lg font-semibold">&quot;You Will Never Walk Alone&quot;</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
