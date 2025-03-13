import Image from "next/image"
import Link from "next/link"

export default function Programs() {
  const programs = [
    {
      title: "Environmental Advocacy & Conservation",
      description:
        "Dedicated to promoting sustainable practices, environmental protection, and climate resilience within communities.",
      image: "/envi.jpg",
      link: "/programs/environmental-advocacy-and-conservation",
    },
    {
      title: "Community Paralegal Services",
      description: "Providing legal awareness, guidance, and advocacy to empower communities in accessing justice.",
      image: "/vocational-training.jpg",
      link: "/programs/community-paralegal-services",
    },
    {
      title: "Disaster Management",
      description:
        "Providing expertise in disaster preparedness, response, and recovery to mitigate risks and protect communities.",
      image: "/disaster.jpg",
      link: "/programs/disaster-management",
    },
    {
      title: "Women Supporting the Boychild",
      description:
        "Empowering the boychild through mentorship, guidance, and advocacy while fostering a balanced and inclusive society.",
      image: "/collabo-support.jpg",
      link: "/programs/women-supporting-boychild",
    },
    {
      title: "Contact Tracing for Lost Children",
      description:
        "Systematically tracking and identifying lost children to ensure their safe return and reintegration.",
      image: "/boy-child.jpg",
      link: "/programs/contact-tracing-for-lost-children",
    },
    {
      title: "Vacation Camps & Vocational Training",
      description:
        "Adventure with relaxation of minds, uniting the society, and equipping individuals with skills to secure employment and rebuild their lives.",
      image: "/fun.jpg",
      link: "/programs/vacation-camps-and-vocational-training",
    },
  ]

  return (
    <main className="flex-1">
      <title>Our Programs - Chaplains of Hope</title>

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
                  src={program.image || "/placeholder.svg?height=250&width=400"}
                  alt={program.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link href={program.link} className="text-green-600 hover:text-green-700 font-semibold">
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
  )
}

