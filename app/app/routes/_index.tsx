import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Tailor & Laundry App!
        </h1>
        <p className="text-gray-700 mb-6">
          Connecting you with local tailors and laundry services. Sign up to get started.
        </p>
        <div className="flex space-x-4">
          <Link to="/signup/customer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Customer Sign Up
          </Link>
          <Link to="/signup/vendor" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Vendor Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
```
