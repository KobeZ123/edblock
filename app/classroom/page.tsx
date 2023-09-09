"use client"

// pages/classroom.js
import React, { useState } from 'react';
import ClassroomInfo from './components/ClassroomInfo';
import PostsList from './components/PostsList';
import Link from 'next/link';
import PeoplesList from './components/PeoplesList';
import ClassroomPostForm from './components/ClassroomPostForm';

const Classroom = () => {
  // Sample classroom data
  const classroomInfo = {
    name: 'Mathematics Class',
    professorName: 'The Cool Professor',
    description: 'Learn mathematics with interactive lessons.',
    classroomCode: 'ABCXYZ',
  };

  // Sample assignments data
  const posts = [
    {
      title: 'Math Homework 1',
      description: 'Complete exercises 1-5 on page 25. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE. THERE IS A LOT OF WORK TO BE DONE',
      dueDate: 'September 15, 2023',
      attachment: null,
    },
    {
      title: 'Math Homework 2',
      description: 'Complete exercises 6-10 on page 25.',
      dueDate: 'September 18, 2023',
      attachment: {
        type: "ASSIGNMENT",
        fileName: "THE_PRESENTATION_NOTES.pptx",
      }
    },
    // Add more assignments as needed
  ];

  const [showTimeline, setShowTimeline] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
        <div className="max-w-4xl w-[80%]">

            {/* back to dashboard */ }
            <Link href="/dashboard" className="flex flex-row mb-8 items-center w-auto group hover:cursor-pointer">
                <img src="/icons/left-arrow.png" alt="Back Icon" 
                    style={{ maxWidth: '20px', maxHeight: '20px' }}/>
                <p className="mx-4 group-hover:bg-gray-400">Back to Dashboard</p>
            </Link>
            
            <ClassroomInfo {...classroomInfo} styles="mb-4" />

            <ClassroomPostForm />

            <div className='flex flex-row justify-between mx-8'>
              <h2 className={"text-2xl font-semibold px-8 py-2 rounded-t-lg hover:cursor-pointer" + (showTimeline ? " bg-accent" : "")} 
                onClick={() => {setShowTimeline(true)}}>Timeline</h2>
              <h2 className={"text-2xl font-semibold px-8 py-2 rounded-t-lg hover:cursor-pointer" + (!showTimeline ? " bg-accent" : "")} 
                onClick={() => {setShowTimeline(false)}}>People</h2>
            </div>
            {showTimeline ? <PostsList posts={posts} /> : <PeoplesList />}
            
        </div>
      
    </div>
  );
};

export default Classroom;