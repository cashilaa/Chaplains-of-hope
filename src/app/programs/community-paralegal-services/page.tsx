import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function CommunityParalegalServices() {
  return (
    <main className="flex-1">
      <title>Community Paralegal Services - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Community Paralegal Services</h1>
          <p className="text-lg text-gray-700 mb-8">
            Providing legal awareness, guidance, and advocacy to empower communities in accessing justice.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-green-700">Key Focus Areas:</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Legal Rights Education</span> – Conducting workshops and training
                sessions to inform individuals about their legal rights and responsibilities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Dispute Resolution & Mediation</span> – Offering conflict resolution
                services to help communities settle disputes amicably.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Legal Aid Support</span> – Assisting vulnerable individuals with
                documentation, court procedures, and representation where necessary.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Human Rights Advocacy</span> – Defending the rights of marginalized
                groups, including women, children, and persons with disabilities.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              <div>
                <span className="font-semibold">Bridging the Gap with the Legal System</span> – Connecting communities
                with legal professionals, government institutions, and justice mechanisms.
              </div>
            </li>
          </ul>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

