import Link from "next/link";

interface ClassroomCardProps {
    name: string, 
    professorName: string, 
    imageSrc: string,
}

export default function ClassroomCard ({ name, professorName, imageSrc }: ClassroomCardProps) {
    return (
      <Link href="/classroom"
        className="bg-white shadow-lg rounded-lg overflow-hidden m-4 w-72 hover:scale-105 hover:shadow-xl duration-150">
        {/* {imageSrc && (
          <img src={imageSrc} alt={name} className="w-full h-40 object-cover" />
        )} */}
        <div className="p-4 bg-accent">
          <h3>{name}</h3>
          <p className="text-gray-600 mt-2">{professorName}</p>
        </div>
      </Link>
    );
  };
