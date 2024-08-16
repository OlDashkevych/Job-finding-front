import { Job } from "../utils/interfaces";

// Function to get liked jobs from local storage
export const getLikedJobs = (): Job[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("likedJobs") || "[]");
  }
  return [];
};

// Function to toggle a job's liked status
export const toggleJobLiked = (job: Job): boolean => {
  const likedJobs = getLikedJobs();
  const isAlreadyExist = isAlreadyExistInLiked(job.job_id, likedJobs);

  if (isAlreadyExist) {
    removeJobFromLiked(job.job_id, likedJobs);
  } else {
    addJobToLiked(job, likedJobs);
  }

  return !isAlreadyExist;
};

// Check if a job is already in the liked list
const isAlreadyExistInLiked = (id: string, likedJobs: Job[]): boolean => {
  return likedJobs.some((e) => e.job_id === id);
};

// Add a job to the liked list
export const addJobToLiked = (job: Job, likedJobs: Job[]): void => {
  if (!likedJobs.some((likedJob) => likedJob.job_id === job.job_id)) {
    likedJobs.push(job);
    localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
  }
};

// Remove a job from the liked list
export const removeJobFromLiked = (jobId: string, likedJobs: Job[]): void => {
  likedJobs = likedJobs.filter((job) => job.job_id !== jobId);
  localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
};
