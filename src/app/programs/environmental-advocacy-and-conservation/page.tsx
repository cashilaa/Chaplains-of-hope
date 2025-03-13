import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function EnvironmentalAdvocacyAndConservation() {
  return (
    <main className="flex-1">
      <title>Environmental Advocacy & Conservation - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Environmental Advocacy & Conservation</h1>
          <p className="text-lg text-gray-700 mb-8">
            Dedicated to promoting sustainable practices, environmental protection, and climate resilience within
            communities.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Focus Areas:</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Awareness Campaigns</span> – Educating communities on environmental
                conservation, climate change, and the importance of sustainable practices.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Conservation Initiatives</span> – Engaging in afforestation,
                reforestation, and wildlife conservation efforts to combat deforestation and habitat destruction.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Pollution Control</span> – Addressing air, water, and land pollution
                through waste management, recycling programs, and clean energy advocacy.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Policy Advocacy</span> – Collaborating with policymakers to promote and
                enforce environmental regulations and sustainable resource management.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Climate Resilience</span> – Implementing adaptive strategies to mitigate
                the effects of climate change, including renewable energy adoption and sustainable agriculture.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Community-Led Projects</span> – Empowering local communities to take
                charge of conservation efforts and environmental stewardship.
              </div>
            </li>
          </ul>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

