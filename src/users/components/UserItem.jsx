import "./UserItem.css"
import Avatar from "../../shared/components/UIElements/Avatar"
import Card from "../../shared/components/UIElements/Card"

import { Link } from "react-router-dom"

function UserItem(props) {
    return (
        <li className="user-item m-4 w-[calc(45%-2rem)] min-w-[17.5rem]">

            <Card>
                <Link to={`/${props.id}/places`}>
                    <div className="w-16 h-16 mr-4">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div>
                        <h2 className="text-2xl m-0 mb-2 font-normal text-[#ffd900]">{props.name}</h2>
                        <h3 className="m-0">{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
            </Card>

        </li>
    );
}

export default UserItem;