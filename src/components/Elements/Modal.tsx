import { Link } from 'gatsby';
import React from 'react';
import { HiCheckCircle, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { modalBGVariant, modalVariant } from '../../animations/animations';

interface ContactFormPropTypes {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const Modal = ({ showModal, setShowModal }: ContactFormPropTypes) => {
  return (
    <>
      {showModal ? (
        <>
          <motion.div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl ">
              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={modalVariant}
                className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute p-1 m-1 right-0 text-gray-400 hover:bg-gray-50"
                >
                  <HiX />
                </button>
                <div className="flex flex-col justify-center items-center p-5 gap-3  rounded-t ">
                  <HiCheckCircle className="text-4xl text-theme-100" />

                  <h3 className="text-2xl font-semibold text-gray-900">
                    Thank you
                  </h3>
                </div>

                <div className=" p-4 flex gap-3 flex-col ">
                  <p className=" max-w-md text-base text-center text-gray-500">
                    We appreciate your inquiry and will respond <br /> as soon
                    as possible!
                  </p>
                  <Link to={'/'}>
                    <button className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-theme-300 hover:bg-theme-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-300">
                      Return Home
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={modalBGVariant}
            className=" fixed inset-0 z-40 bg-black"
          ></motion.div>
        </>
      ) : null}
    </>
  );
};
