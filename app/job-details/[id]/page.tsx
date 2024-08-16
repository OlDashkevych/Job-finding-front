"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchJobDetails } from "../../../src/utils/api";

const JobDetails = () => {
  const { id } = useParams();

  const { data: job, isLoading } = useSWR(id, fetchJobDetails);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="w-full h-fit flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="w-1/4 object-cover rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
        src={job?.employer_logo || ""}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="flex flex-col items-start p-4 leading-normal w-3/4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {job?.job_job_title}
        </h5>
        <div className="flex justify-between leading-normal">
          <span className="font-bold">Employer:&nbsp;</span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {job?.employer_name}
          </p>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {job?.job_description}
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
