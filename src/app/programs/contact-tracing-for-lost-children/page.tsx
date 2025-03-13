import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function ContactTracingForLostChildren() {
  return (
    <main className="flex-1">
      <title>Contact Tracing for Lost Children - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Contact Tracing for Lost Children</h1>
          <p className="text-lg text-gray-700 mb-8">
            Systematically tracking and identifying lost children to ensure their safe return and reintegration.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Focus Areas:</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Investigation & Information Gathering</span> – Collecting crucial
                details, such as last known locations, family information, and potential leads.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Surveillance & Digital Footprints</span> – Analyzing security footage,
                mobile data, and online activity to track lost children.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Witness Interviews & Community Alerts</span> – Engaging the public,
                local businesses, and transport networks to widen the search scope.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Law Enforcement & Child Protection Coordination</span> – Partnering with
                authorities to conduct thorough investigations and facilitate safe recoveries.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Reintegration & Support Services</span> – Providing psychological
                support, shelter, and rehabilitation for recovered children.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Prevention & Public Awareness</span> – Educating communities on child
                safety, abduction prevention, and emergency response measures.
              </div>
            </li>
          </ul>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

