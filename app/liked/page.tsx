'use client'
import { useEffect, useState } from 'react';
import JobCard from "../../src/components/JobCard/JobCard";
import { Job } from "../../src/utils/interfaces";

const LikedJobs = () => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const storedJobs: Job[] = JSON.parse(localStorage.getItem('likedJobs') || '[]');
    setLikedJobs(storedJobs);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {likedJobs?.map((job) => (
          <JobCard 
            key={job.job_id} 
            job={job} 
            setLikedJobs={setLikedJobs} 
            isFromLikedPage={true} 
          />
        ))}
      </div>
    </div>
  );
};

export default LikedJobs;