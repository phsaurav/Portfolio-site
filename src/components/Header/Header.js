import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let activeStyle = {
    color: "#000000",
    borderBottom: "2px solid black",
    fontWeight: "500",
    pointerEvents: "none",
  };
  let mobileActiveStyle = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontWeight: "600",
    backgroundSize: "100% 0px",
  };

  return (
    <div className='bg-brand-1 pb-16 pt-5 md:pt-5 md:pb-3'>
      <nav className='relative z-20'>
        <div className='container mx-auto'>
          <div className='text-black'>
            <div className='ml-5 flex items-center justify-between pl-10 md:ml-0'>
              <div className='hidden items-center space-x-10 md:flex '>
                <NavLink
                  to='/home'
                  className='font-base link  link-underline-black pb-2 text-black'
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  Home
                </NavLink>
                {/* <NavLink
                  to='/allprojects'
                  className='font-base link  link-underline link-underline-black pb-2 text-black'
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  All Projects
                </NavLink> */}
                <NavLink
                  to='/blogs'
                  className='font-base link  link-underline link-underline-black pb-2 text-black'
                  style={({ isActive }) => (isActive ? activeStyle : {})}
                >
                  Blogs
                </NavLink>
                {/* <NavLink
                                    to='/aboutme'
                                    className='font-base link  link-underline link-underline-black pb-2 text-black'
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    About Me
                                </NavLink> */}
              </div>
              <div>
                <div className='h-24 hidden items-center justify-center md:flex'>
                  {" "}
                  <HashLink
                    smooth
                    to='/home#contact'
                    className='bg-brand-white  mb-2 mr-28  transform cursor-default border-2 border-brand-3 py-2 px-6 uppercase text-brand-3 shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:bg-brand-4 hover:text-white hover:shadow-xl md:border-2 md:px-8'
                  >
                    Contact
                  </HashLink>
                </div>
              </div>
            </div>
            <div className='absolute right-5 top-2 -mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='focus:outline-none inline-flex items-center justify-center rounded-xl border-2 border-brand-4 bg-brand-1 p-1 text-brand-4 transition duration-300 ease-in-out hover:bg-brand-4 hover:text-brand-1 '
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='h-6 block w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='h-6 block w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden ' id='mobile-menu'>
              <div ref={ref} className=' mx-auto   bg-brand-1 pt-2 text-center'>
                <NavLink
                  to='/home'
                  className='mt-10 block w-full border-b border-brand-2 px-3   py-3 text-base font-semibold text-brand-2 hover:bg-white hover:text-brand-2'
                  style={({ isActive }) => (isActive ? mobileActiveStyle : {})}
                >
                  Home
                </NavLink>
                {/* <NavLink
                  to='/allprojects'
                  className='border-brand-2 text-brand-2 hover:text-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white'
                  style={({ isActive }) => (isActive ? mobileActiveStyle : {})}
                >
                  All Projects
                </NavLink> */}
                <NavLink
                  to='/blogs'
                  className='block w-full border-b border-brand-2 px-3 py-3  text-base font-semibold text-brand-2 hover:bg-white hover:text-brand-2'
                  style={({ isActive }) => (isActive ? mobileActiveStyle : {})}
                >
                  Blogs
                </NavLink>
                {/* <NavLink
                  to='/aboutme'
                  className='border-brand-2 text-brand-2 hover:text-brand-2 block w-full border-b  px-3 py-3 text-base font-semibold hover:bg-white'
                  style={({ isActive }) => (isActive ? mobileActiveStyle : {})}
                >
                  About Me
                </NavLink> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Header;
