import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "Vendor Sign Up" }, { name: "description", content: "Vendor sign up page" }];
};

export default function VendorSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [businessNameError, setBusinessNameError] = useState("");
  const [serviceTypeError, setServiceTypeError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setBusinessNameError("");
    setServiceTypeError("");

    let isValid = true;

    if (!businessName) {
      setBusinessNameError("Business Name is required");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (!serviceType) {
      setServiceTypeError("Service Type is required");
      isValid = false;
    }


    if (isValid) {
      // Handle vendor sign up logic here
      console.log("Vendor Sign Up:", { email, password, businessName, serviceType });
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Vendor Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="businessName" className="block text-gray-700 text-sm font-bold mb-2">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${businessNameError ? 'border-red-500' : ''}`}
              placeholder="Business Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
             {businessNameError && <p className="text-red-500 text-xs italic">{businessNameError}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${emailError ? 'border-red-500' : ''}`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
             {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordError ? 'border-red-500' : ''}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-gray-700 text-sm font-bold mb-2">
              Service Type
            </label>
            <input
              type="text"
              id="serviceType"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${serviceTypeError ? 'border-red-500' : ''}`}
              placeholder="Service Type (e.g., Tailoring, Laundry)"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            />
             {serviceTypeError && <p className="text-red-500 text-xs italic">{serviceTypeError}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
