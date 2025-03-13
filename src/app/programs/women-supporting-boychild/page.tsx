import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function WomenSupportingBoychild() {
  return (
    <main className="flex-1">
      <title>Women Supporting the Boychild - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Women Supporting the Boychild</h1>
          <p className="text-lg text-gray-700 mb-8">
            Empowering the boychild through mentorship, guidance, and advocacy while fostering a balanced and inclusive
            society.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Focus Areas:</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Mentorship & Role Models</span> – Providing positive male and female
                mentors to guide boys in their personal and academic journeys.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Emotional Well-being & Mental Health</span> – Addressing challenges such
                as depression, identity crises, and societal pressures through counseling and support groups.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Education & Life Skills Training</span> – Equipping boys with essential
                skills, values, and financial literacy for a better future.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Challenging Gender Stereotypes</span> – Advocating for balanced
                discussions on gender issues and ensuring boys are not neglected in empowerment efforts.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Community Engagement</span> – Working with families, schools, and
                institutions to create an environment where boys thrive.
              </div>
            </li>
          </ul>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

