import EmployeeListItem from "./EmployeeListItem"

function EmployeeList() {
  const users = [
    {
      name:"James King",
      position: "President and CEO"
    },
    {
      name:"Julie Taylore",
      position: "VP of Marketing"
    },
    {
      name:"Eugene Lee",
      position: "CFO"
    },
    {
      name:"John Williams",
      position: "VP of Engineering"
    },
    {
      name:"Ray Moore",
      position: "VP of Sales"
    },
    {
      name:"Paul Jones",
      position: "QA Manager"
    },
  ]

  return (
    <div>
      {users.map((user, index) => (
        <EmployeeListItem
        key={index}
        name={user.name}
        position={user.position}
        />
      ))}
    </div>
  )
}

export default EmployeeList