import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

export const NewsLetter = () => {

  const handleSubscribe = async(e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/subscribe`, {email})
      if(data.message === "Already subscribed!!!"){
        return toast.success(`Already subscribed!!!`)
      }
      if(data.insertedId){
        toast.success(`Subscribed successfylly!!`)
        e.target.reset();
      }
    }catch(err){
      console.log("Subscreibe ERROR-->", err)
    }
  }
  return (
    <section className="bg-blue-100 mb-10 py-10">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800">Stay Updated with Book Hub!</h2>
    <p className="text-gray-600 mt-2">
      Subscribe to our newsletter and never miss an update on new arrivals, featured books, and exclusive offers!
    </p>
    <form onSubmit={handleSubscribe} className="mt-5 flex justify-center">
      <input 
        type="email" 
        name='email'
        placeholder="Enter your email..." 
        className="w-2/3 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
      />
      <button type='submit' className="bg-[#1E293B] text-white px-5 py-3 rounded-r-lg hover:bg-[#1E293B]">
        Subscribe
      </button>
    </form >
  </div>
</section>
  )
}



