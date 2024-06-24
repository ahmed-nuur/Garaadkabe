import { useState } from 'react';

// Example hardcoded project data (can be replaced with actual data fetched from an API)
const projects = [
  {
    id: 1,
    title: 'Awesome Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    startDate: 'June 1, 2023',
    estimatedCompletion: 'December 31, 2024',
    // Add more fields as needed
  },
  {
    id: 2,
    title: 'Amazing Project 2',
    description: 'Nulla eu urna eget ipsum dictum varius nec sed ligula...',
    startDate: 'July 1, 2023',
    estimatedCompletion: 'January 31, 2025',
    // Add more fields as needed
  },
  // Add more projects as needed
];

export default function Project() {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (projectId) => {
    setShowDetails(showDetails === projectId ? null : projectId);
  };

  return (
    <div className='min-h-screen max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-semibold mb-6'>Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => toggleDetails(project.id)}
            >
              {showDetails === project.id ? 'Hide Details' : 'Show Details'}
            </button>
            
            {showDetails === project.id && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Project Details</h3>
                <ul className="list-disc pl-6">
                  <li>Start Date: {project.startDate}</li>
                  <li>Estimated Completion: {project.estimatedCompletion}</li>
                  {/* Add more details */}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
