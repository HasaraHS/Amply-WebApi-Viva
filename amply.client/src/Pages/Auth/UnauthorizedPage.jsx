import React from "react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-red-600 mb-3">Access Denied 🚫</h1>
      <p className="text-gray-600 mb-4">You don’t have permission to view this page.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go Back to Login
      </Link>
    </div>
  );
}
