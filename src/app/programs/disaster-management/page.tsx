import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function DisasterManagement() {
  return (
    <main className="flex-1">
      <title>Disaster Management - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Disaster Management</h1>
          <p className="text-lg text-gray-700 mb-8">
            Providing expertise in disaster preparedness, response, and recovery to mitigate risks and protect
            communities.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Focus Areas:</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Disaster Preparedness</span> – Training individuals and communities on
                emergency response, evacuation plans, and risk assessment.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Emergency Response & Crisis Coordination</span> – Mobilizing resources
                and coordinating efforts during disasters such as floods, droughts, fires, and pandemics.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Post-Disaster Rehabilitation</span> – Assisting in rebuilding efforts,
                trauma counseling, and economic recovery for affected individuals.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Humanitarian Aid & Relief Distribution</span> – Ensuring food, shelter,
                and medical assistance reach disaster-affected populations.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Resilience-Building</span> – Strengthening infrastructure and community
                awareness to withstand future disasters.
              </div>
            </li>
          </ul>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

