export const getLikedJobs = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("likedJobs") || "[]");
  }
  return [];
};

export const toggleJobLiked = (job: any) => {
  const likedJobs = getLikedJobs();
  let isAlreadyExist = isAlreadyExistInLiked(job.job_id, likedJobs);

  if (isAlreadyExist) {
    removeJobFromLiked(job.job_id, likedJobs);
  } else {
    addJobToLiked(job, likedJobs);
  }

  return !isAlreadyExist;
};

const isAlreadyExistInLiked = (id: string, likedJobs: any) => {
  return likedJobs.some((e: any) => e.job_id === id);
};

export const addJobToLiked = (job: any, likedJobs) => {
  if (!likedJobs.some((likedJob: any) => likedJob.job_id === job.job_id)) {
    likedJobs.push(job);
    localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
  }
};

export const removeJobFromLiked = (jobId, likedJobs) => {
  console.log(jobId);
  likedJobs = likedJobs.filter((job) => job.job_id !== jobId);
  localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
};
