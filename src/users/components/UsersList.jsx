import UserItem from "./UserItem"

function UsersList(props) {

    if (props.items.length == 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div> 
        );
    };
    
    return (
        <ul className="list-none my-0 mx-auto p-0 w-[90%] max-w-[50rem] flex content-center flex-wrap">
            {props.items.map(user => 
                <UserItem 
                    key={user.id}
                    id={user.id} 
                    image={user.image} 
                    name={user.name} 
                    placeCount={user.places}
                />
            )}
        </ul>
    )
}

export default UsersList;