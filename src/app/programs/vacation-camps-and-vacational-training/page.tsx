import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ImageUploadForm from "@/app/components/image-upload-form"

export default function VacationCampsAndVocationalTraining() {
  return (
    <main className="flex-1">
      <title>Vacation Camps & Vocational Training - Chaplains of Hope</title>

      <div className="container mx-auto px-4 py-8">
        <Link href="/programs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Vacation Camps & Vocational Training</h1>
          <p className="text-lg text-gray-700 mb-8">
            Adventure with relaxation of minds, uniting the society, and equipping individuals with skills to secure
            employment and rebuild their lives.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Vacation Camps</h2>
              <p className="text-gray-700 mb-4">
                Our vacation camps provide a safe and enriching environment for children and youth to relax, learn, and
                build social connections. These camps combine fun activities with educational components to foster
                personal growth.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Team-building activities and sports</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Arts and creative expression</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Environmental awareness and conservation projects</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Cultural exchange and community service</div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Vocational Training</h2>
              <p className="text-gray-700 mb-4">
                Our vocational training programs focus on equipping individuals, particularly ex-convicts and at-risk
                youth, with practical skills that enhance their employability and self-sufficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Technical skills training in carpentry, welding, and mechanics</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Digital literacy and computer skills</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Entrepreneurship and business management</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Job placement assistance and career counseling</div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <div>Life skills and financial literacy</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Impact</h3>
            <p className="text-gray-700">
              Our integrated approach to vacation camps and vocational training has helped hundreds of individuals
              develop new skills, build confidence, and create pathways to sustainable livelihoods. By combining
              recreational activities with practical skills development, we create a holistic environment that nurtures
              both personal growth and professional development.
            </p>
          </div>

          <ImageUploadForm />
        </div>
      </section>
    </main>
  )
}

