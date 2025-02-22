import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Programs() {
  const programs = [
    {
      title: "Chaplaincy Services",
      description: "Providing spiritual and emotional support to individuals in various settings.",
      image: "/chaplaincy.jpg",
    },
    {
      title: "Prison Visitations & Reintegration Support",
      description: "Assisting inmates and ex-convicts in their journey towards rehabilitation and reintegration.",
      image: "/prison-support.jpg",
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
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Our Programs - Chaplains of Hope</title>
      </Head>

      {/* Header component (same as home page) */}

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

      {/* Footer component (same as home page) */}
    </div>
  )
}

