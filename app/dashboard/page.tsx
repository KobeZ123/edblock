import ClassroomCard from "./components/ClassroomCard";
import UserNotificationDashboard from "./components/UserNotificationDashboard";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      <div className="max-w-4xl w-[80%]">
        {/* User notification dashboard */ }
        <UserNotificationDashboard userName="Kobe" assignments={[]}/>
        {/* User's classrooms */}
        <h1 className="text-3xl font-semibold mb-4">My Classrooms</h1>
        <div className="flex flex-wrap justify-center">
          <ClassroomCard
            name="Mathematics"
            professorName="Professor Mathematics"
            imageSrc="/math-classroom.jpg"
          />
          <ClassroomCard
            name="Science"
            professorName="Professor Biology"
            imageSrc="/science-classroom.jpg"
          />
          {/* Add more ClassroomCard components for other classes */}
      </div>

      </div>
     
    </div>
  );
}
