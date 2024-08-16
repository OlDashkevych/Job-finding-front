import Link from "next/link";
import { useState } from "react";
import { toggleJobLiked } from "../../utils/localStorage";

interface JobCardProps {
  job: {
    job_job_title: string;
    employer_name: string;
    job_id: string;
  };
  setLikedJobs: Function;
  isFromLikedPage: boolean;
}

export default function JobCard({
  job,
  setLikedJobs,
  isFromLikedPage,
}: JobCardProps) {
  const [liked, useLiked] = useState(false);

  const handleToggleAddJobToLiked = () => {
    const isLiked = toggleJobLiked(job);
    useLiked(isLiked);
    if (isFromLikedPage) {
      const storedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");
      setLikedJobs(storedJobs);
    }
  };

  return (
    <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {job.job_job_title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {job.employer_name}
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <button className="mb-2" onClick={handleToggleAddJobToLiked}>
          <svg
            className="h-8 w-8 text-$-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`${liked || isFromLikedPage ? "red" : "gray"}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <Link
          href={`/job-details/${job.job_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
