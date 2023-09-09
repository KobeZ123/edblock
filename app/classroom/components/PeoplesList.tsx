const PersonCard = ({name} : { name: string }) => {
    return (
        <div className="rounded-lg shadow-md bg-white px-8 py-4">
            <p>{name}</p>
        </div>
    )
}

export default function PeoplesList () {
    const admin = [
        {
            name: "PROFESSOR A"
        }
    ]

    const students = [
        {
            name: "STUDENT A"
        },
        {
            name: "STUDENT B"
        },
        {
            name: "STUDENT C"
        },
        {
            name: "STUDENT D"
        },
        {
            name: "STUDENT E"
        },
        {
            name: "STUDENT F"
        },
        {
            name: "STUDENT G"
        }
    ]

    return (
        <div className="bg-accent shadow-md rounded-lg p-4">
            <h2>Admin</h2>
                <div className="flex flex-col gap-4 my-2">
                    {admin.map((person: any, index: number) => (
                            <PersonCard name={person.name} key={index} />
                        ))}
                </div>
                

            <h2>Students</h2>
                <div className="flex flex-col gap-4 my-2">
                    {students.map((person: any, index: number) => (
                        <PersonCard name={person.name} key={index} />
                    ))}
                </div>
                
    </div>
    )
}