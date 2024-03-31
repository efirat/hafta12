import UserList from "./UserList";

// UseMemo Örnek kullanım
const users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Ayşe", age: 30 },
  { id: 3, name: "Ahmet", age: 35 },
  { id: 4, name: "Elif", age: 29 },
  { id: 5, name: "Ezgi", age: 45 },
];

function UMemo() {
  return <UserList users={users} />;
}

export default UMemo;
