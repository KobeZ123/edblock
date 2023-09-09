"use client"

import React, { useEffect, useState } from "react";

interface ClassroomInfoProps {
    styles: string
    name: string;
    professorName: string;
    description: string;
    classroomCode: string;
}

const ClassroomInfo = ({ styles, name, professorName, description, classroomCode }: ClassroomInfoProps) => {

  const [isClassroomCodeVisible, setIsClassroomCodeVisible] = useState(false);

  useEffect(() => {
    console.log("hey");
  }, [isClassroomCodeVisible])

  const toggleDisplayClassroomCode = () => {
    console.log("clicked");
    setIsClassroomCodeVisible(!isClassroomCodeVisible);
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${styles}`}>
        <div className="flex justify-between items-center">
            <div>
                <h1>{name}</h1>
                <h3 className="text-gray-600">{professorName}</h3>
                <p className="text-gray-600">{description}</p>
            </div>

            <div onClick={toggleDisplayClassroomCode} className="ml-auto hover:bg-gray-300 hover:cursor-pointer rounded-full">
                <img src="/icons/information.png" alt="Classroom information" 
                    style={{ maxWidth: '32px', maxHeight: '32px' }}/>
            </div>
        </div>
        {isClassroomCodeVisible && (
            <div className="mt-4">
            <p>Classroom Code: {classroomCode}</p>
            </div>
        )}
    </div>
  );
};

export default ClassroomInfo;