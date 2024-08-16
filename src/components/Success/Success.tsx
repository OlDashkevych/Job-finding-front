import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IProfile } from "../../utils/interfaces";

const Success = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    const profileString = localStorage.getItem("profile");
    if (profileString) {
      try {
        const profileData = JSON.parse(profileString);
        setProfile(profileData);
      } catch (error) {
        console.error("Error parsing profile data", error);
        setProfile(null); // Optional: Handle parsing errors by setting profile to null
      }
    } else {
      setProfile(null); // Handle case where profile is not found
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Profile Created!
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-bold">
          Your profile has been successfully created.
        </p>
        <p className="text-lg text-gray-700 mb-2">Name: {profile?.name || 'N/A'}</p>
        <p className="text-lg text-gray-700 mb-2">
          Desired job title: {profile?.desiredJobTitle || 'N/A'}
        </p>
        <p className="text-lg text-gray-700 mb-6">
          About me: {profile?.aboutMe || 'N/A'}
        </p>
        <Link
          href="/jobs"
          className="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Go to Job Listings
        </Link>
      </div>
    </div>
  );
};

export default Success;