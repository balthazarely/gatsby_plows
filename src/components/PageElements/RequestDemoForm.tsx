import { navigate } from 'gatsby-link';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormPropTypes {
  setShowModal: (value: boolean) => void;
}

export const RequestDemoForm = ({ setShowModal }: ContactFormPropTypes) => {
  const AWS_API_GATEWAY = process.env.GATSBY_ENV_AWS_CONTACT_FORM_API_GATEWAY;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (AWS_API_GATEWAY !== undefined && !data.address && !data.city) {
      try {
        fetch(AWS_API_GATEWAY, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        setShowModal(true);
        reset();
      } catch (error) {
        console.log('there was an error');
      }
    }
  };

  return (
    <div className="flex justify-center flex-1">
      <div className=" w-full">
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            {/* FULLNAME */}
            <div className="input-wrapper">
              <input
                {...register('name', {
                  required: true,
                  maxLength: 30,
                  minLength: 2,
                })}
                aria-label="name-input"
                aria-required="true"
                type="text"
                className={`mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm ${
                  errors.name
                    ? 'border-2 border-red-500 '
                    : 'border border-gray-300'
                }`}
                placeholder="Name"
              />
              {errors.name && (
                <div className="text-left text-xs text-red-500">
                  Your name is required
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <input
                {...register('organization', {
                  required: false,
                  maxLength: 30,
                  minLength: 2,
                })}
                aria-label="organization-input"
                aria-required="true"
                type="text"
                className="mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm  "
                placeholder="Organization"
              />
            </div>
            <div className="input-wrapper">
              <input
                {...register('email', {
                  required: true,
                  maxLength: 30,
                  pattern: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                })}
                aria-label="email-input"
                aria-required="true"
                type="text"
                className={`mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm ${
                  errors.email
                    ? 'border-2 border-red-500 '
                    : 'border border-gray-300'
                }`}
                placeholder="Email"
              />
              {errors.email && (
                <div className="text-left text-xs text-red-500">
                  A valid email is required.
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <input
                {...register('phone', {
                  required: true,
                  maxLength: 10,
                  minLength: 10,
                })}
                aria-label="phone-input"
                aria-required="true"
                type="text"
                className={`mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm ${
                  errors.phone
                    ? 'border-2 border-red-500 '
                    : 'border border-gray-300'
                }`}
                placeholder="Phone"
              />
              {errors.phone && (
                <div className="text-left text-xs text-red-500">
                  A valid phone number is required.
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <input
                {...register('vehicleNumber', {
                  required: true,
                  maxLength: 100000,
                  minLength: 1,
                })}
                aria-label="vehicle-number-input"
                aria-required="true"
                type="number"
                className={`mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm ${
                  errors.vehicleNumber
                    ? 'border-2 border-red-500 '
                    : 'border border-gray-300'
                }`}
                placeholder="Number of winter maintenance vehicles"
              />
              {errors.vehicleNumber && (
                <div className="text-left text-xs text-red-500">
                  A valid vehicle number is required.
                </div>
              )}
            </div>
            <div className="input-wrapper">
              <textarea
                rows={5}
                {...register('desc', {
                  required: true,
                  maxLength: 100,
                  minLength: 10,
                })}
                aria-label="desc-input"
                aria-required="true"
                className={`mb-1 mt-5 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-theme-300 focus:border-theme-300 focus:z-10 text-sm ${
                  errors.desc
                    ? 'border-2 border-red-500 '
                    : 'border border-gray-300'
                }`}
                placeholder="How can we help?"
              />
              {errors.desc && (
                <div className="text-left text-xs text-red-500">
                  A message is required
                </div>
              )}
            </div>
            {/* H O N E Y P O T */}
            <div className="input-wrapper">
              <input
                autoComplete="new-password"
                {...register('address', {
                  required: false,
                  maxLength: 30,
                  minLength: 2,
                })}
                type="text"
                className="ohnohoney"
                placeholder="First Name"
              />
              <input
                {...register('city', {
                  required: false,
                  maxLength: 30,
                  minLength: 2,
                })}
                autoComplete="new-password"
                type="text"
                className="ohnohoney"
                placeholder="Last Name"
              />
            </div>
            {/* H O N E Y P O T */}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-theme-300 hover:bg-theme-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-300"
            >
              Request Demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
