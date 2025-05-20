import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MigrateImages() {
  const [productionUrl, setProductionUrl] = useState('https://chaplains-of-hope.onrender.com');
  const [migrationKey, setMigrationKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResults(null);

    try {
      // Validate inputs
      if (!productionUrl) {
        throw new Error('Production URL is required');
      }
      if (!migrationKey) {
        throw new Error('Migration key is required');
      }

      // Create form data
      const formData = new FormData();
      formData.append('productionUrl', productionUrl);
      formData.append('migrationKey', migrationKey);

      // Call the migration API
      const response = await fetch('/api/migrate-images', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Migration failed');
      }

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Migration error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Migrate Images - Chaplains of Hope Admin</title>
      </Head>

      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-700">
            &larr; Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Migrate Local Images to Production</h1>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> This tool will migrate images from your local development environment to your production site. 
                  This should only be used once during initial setup. Set the migration key to "your-secure-migration-key" in the migration script before using.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productionUrl" className="block text-sm font-medium text-gray-700">
                Production URL
              </label>
              <input
                type="url"
                id="productionUrl"
                value={productionUrl}
                onChange={(e) => setProductionUrl(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="https://your-site.onrender.com"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                The full URL of your production site (e.g., https://chaplains-of-hope.onrender.com)
              </p>
            </div>

            <div>
              <label htmlFor="migrationKey" className="block text-sm font-medium text-gray-700">
                Migration Key
              </label>
              <input
                type="password"
                id="migrationKey"
                value={migrationKey}
                onChange={(e) => setMigrationKey(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Enter migration key"
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                The secure key defined in your migration script
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Migrating Images...
                  </>
                ) : (
                  'Start Migration'
                )}
              </button>
            </div>
          </form>

          {results && (
            <div className="mt-8 border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Migration Results</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-700">
                  <strong>Migration completed!</strong>
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Total images: {results.totalImages}<br />
                  Successfully migrated: {results.migratedSuccessfully}<br />
                  Failed: {results.failed}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Filename
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.results.map((result, index) => (
                      <tr key={index} className={result.success ? 'bg-green-50' : 'bg-red-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {result.filename}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.success ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Success
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Failed
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {result.success ? result.productionFilename : result.error}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}