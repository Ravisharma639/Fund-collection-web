"use client";

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { fetchuser, updateProfile } from '@actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Toastify Component with Notification
function Toastify() {
  const notify = () => toast.info("This is a toast notification!");

  return (
    <div>
      <button onClick={notify} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    profilepic: '',
    coverpic: ''
  });

  // Redirect if not logged in, or fetch user data
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    } else if (status === 'authenticated') {
      getData();
    }
  }, [status]);

  // Fetch user data from backend
  const getData = async () => {
    try {
      const user = await fetchuser(session.user.name);
      setForm({
        name: user.name || '',
        email: user.email || '',
        username: user.username || '',
        profilepic: user.profilepic || '',
        coverpic: user.coverpic || ''
      });
    } catch (error) {
      console.error("Failed to fetch user:", error);
      toast.error("Could not fetch user data");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(form, session.user.username);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Profile update failed.");
    }
  };

  // Show loading screen
  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div className='container mx-auto py-5 px-4'>
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* Displaying the Toastify Component */}
      <Toastify />

      <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

      <form className='max-w-2xl mx-auto' onSubmit={handleSubmit}>
        {/* Form Fields */}
        {["name", "email", "username", "profilepic", "coverpic"].map((field) => (
          <div className='my-2' key={field}>
            <label htmlFor={field} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize'>
              {field.replace("pic", " picture")}
            </label>
            <input
              value={form[field] || ''}
              onChange={handleChange}
              type='text'
              name={field}
              id={field}
              placeholder={`Enter your ${field}`}
              className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white focus:ring-blue-500 focus:border-blue-500 text-sm'
            />
          </div>
        ))}

        {/* Image Previews */}
        {form.profilepic && (
          <div className="my-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">Profile Picture Preview</p>
            <img src={form.profilepic} alt="Profile" className="mx-auto w-24 h-24 rounded-full object-cover" />
          </div>
        )}
        {form.coverpic && (
          <div className="my-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">Cover Picture Preview</p>
            <img src={form.coverpic} alt="Cover" className="mx-auto w-full h-32 object-cover rounded-lg" />
          </div>
        )}

        {/* Submit Button */}
        <button
          type='submit'
          className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
