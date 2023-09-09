interface UserNotificationDashboardProps {
    userName: string, 
    assignments: any[],
}

export default function UserNotificationDashboard ({ userName, assignments }: UserNotificationDashboardProps) {
    return (
      <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h2 className="text-xl font-semibold">Hello, {userName}!</h2>
        {assignments.length == 0 ? 
          <h3 className="text-lg font-medium mt-2">Woohoo! You can relax. No assignments due soon!</h3> :
        (
          <>
            <h3 className="text-lg font-medium mt-2">Assignments Due Soon:</h3>
            <ul className="list-disc pl-6 mt-2">
              
              {assignments.map((assignment, index) => (
                <li key={index} className="text-gray-600">
                  {assignment.title} - Due on {assignment.dueDate}
                </li>
              ))}
            </ul>
          </>
        )
        }
      </div>
    );
  };