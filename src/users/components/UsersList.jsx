import UserItem from "./UserItem"
import Card from "../../shared/components/UIElements/Card"

function UsersList(props) {

    if (props.items.length == 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div> 
        );
    };
    
    return (
        <ul className="list-none my-0 mx-auto p-0 w-[90%] max-w-[50rem] flex justify-center flex-wrap">
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