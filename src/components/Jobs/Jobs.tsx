"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import useSWR from "swr";
import { fetchJobs } from "../../utils/api";
import { Job, Profile } from "../../utils/interfaces";
import JobCard from "../JobCard/JobCard";

export default function Jobs() {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => fetchJobs(values.title),
  });

  const [profile, setProfile] = useState<Profile | null>(null);

  const { data: jobs, isLoading } = useSWR(
    formik.values.title || profile?.desiredJobTitle || "", // Fallback to an empty string if profile is null
    fetchJobs
  );

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <div className="w-full">
      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="Search for jobs"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-4 gap-4 mt-8">
          {jobs?.map((job: Job) => (
            <JobCard
              key={job.job_id}
              job={job}
            />
          ))}
        </div>
      )}
    </div>
  );
}