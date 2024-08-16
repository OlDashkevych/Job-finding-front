// Define the structure of a job object
export interface Job {
  job_id: string;
  job_job_title: string;
  employer_name: string;
}

// Define the structure of the profile object
export interface Profile {
  desiredJobTitle: string;
}

export interface JobCardProps {
  job: Job;
  setLikedJobs?: React.Dispatch<React.SetStateAction<Job[]>>;
  isFromLikedPage?: boolean;
}

export interface IProfile {
  name: string;
  desiredJobTitle: string;
  aboutMe: string;
}
