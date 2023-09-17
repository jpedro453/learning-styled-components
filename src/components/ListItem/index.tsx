import React from "react";
import IList from "../../interfaces/IList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckToSlot,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

import { remove, complete, edit } from "../../store/slices/list.slice";
import { Container } from "./style";

interface ListItemProps {
    item: IList;
}
const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const handleRemove = () => {
        // dispatch(remove());
        dispatch(remove(item));
    };
    const handleAction = () => {
        // dispatch(remove());
        if (item.completed == false) {
            dispatch(complete(item));
        } else {
            dispatch(edit(item));
        }
    };
    return (
        <>
            <Container className={item.completed == true ? "completed" : ""}>
                <div className="title">{item.title}</div>
                <div className="actions">
                    <button
                        className={
                            item.completed == false ? "complete" : "edit"
                        }
                        onClick={handleAction}
                    >
                        {item.completed == false ? (
                            <FontAwesomeIcon icon={faCheckToSlot} />
                        ) : (
                            <FontAwesomeIcon icon={faPen} />
                        )}
                    </button>
                    <button className="remove" onClick={handleRemove}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </Container>
        </>
    );
};

export default ListItem;
