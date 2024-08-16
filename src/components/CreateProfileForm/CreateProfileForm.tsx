import React from 'react';

const CreateProfileForm = ({formik} : any) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Profile</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`mt-1 block w-full p-2 border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          {/* Desired Job Title Field */}
          <div className="mb-4">
            <label
              htmlFor="desiredJobTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Desired Job Title
            </label>
            <input
              id="desiredJobTitle"
              name="desiredJobTitle"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desiredJobTitle}
              className={`mt-1 block w-full p-2 border ${
                formik.touched.desiredJobTitle && formik.errors.desiredJobTitle
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {formik.touched.desiredJobTitle && formik.errors.desiredJobTitle ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.desiredJobTitle}
              </div>
            ) : null}
          </div>

          {/* About Me Field */}
          <div className="mb-6">
            <label
              htmlFor="aboutMe"
              className="block text-sm font-medium text-gray-700"
            >
              About Me
            </label>
            <textarea
              id="aboutMe"
              name="aboutMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.aboutMe}
              className={`mt-1 block w-full p-2 border ${
                formik.touched.aboutMe && formik.errors.aboutMe
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            />
            {formik.touched.aboutMe && formik.errors.aboutMe ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.aboutMe}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfileForm;