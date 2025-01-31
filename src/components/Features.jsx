import React from 'react';

export function Features() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Completion</h2>
        <p className="text-gray-600">
          Real-time code suggestions as you type, offering functions, 
          snippets, and full blocks based on comments and existing code.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Multi-Language Support</h2>
        <p className="text-gray-600">
          Supports Python, JavaScript, TypeScript, Go, Ruby, and more. 
          Adapts to different coding styles and frameworks.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Context-Aware Assistance</h2>
        <p className="text-gray-600">
          Uses deep learning models trained on billions of lines of code 
          to predict what you need next based on project context.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Code Generation</h2>
        <p className="text-gray-600">
          Generates boilerplate code, test cases, and repetitive logic. 
          Helps with data structures, algorithms, and API calls.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Documentation</h2>
        <p className="text-gray-600">
          Explains complex code in plain language and helps understand 
          unfamiliar codebases.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Security & Best Practices</h2>
        <p className="text-gray-600">
          Suggests code that follows best practices while maintaining 
          security filtering mechanisms.
        </p>
      </div>
    </div>
  );
}