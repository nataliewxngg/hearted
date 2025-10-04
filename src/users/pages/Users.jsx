import UsersList from "../components/UsersList"

function Users() {
    const USERS = [
        {
            id: "u1",
            image: "https://i.pinimg.com/736x/b8/80/73/b88073a07bf14ea3c5e423ecdb2c3d29.jpg",
            name: "natalie",
            places: 3
        }
    ];

    return <UsersList items={USERS} /> // MUST HAVE ITEMS PROP
}   

export default Users;