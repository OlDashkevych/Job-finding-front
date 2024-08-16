"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

import Success from "../../src/components/Success/Success";
import CreateProfileForm from "../../src/components/CreateProfileForm/CreateProfileForm";

const ProfileForm = () => {
  const router = useRouter();
  const [profileExist, setProfileExist] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      desiredJobTitle: "",
      aboutMe: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      desiredJobTitle: Yup.string().required("Required"),
      aboutMe: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("profile", JSON.stringify(values));
      setProfileExist(true);
    },
  });

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    if (profile) {
      setProfileExist(true);
    }
  }, [router]);

  return (
    <>{profileExist ? <Success /> : <CreateProfileForm formik={formik} />}</>
  );
};

export default ProfileForm;
