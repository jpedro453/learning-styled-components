import React, { useState } from "react";

import { Container } from "./style";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";

import IList from "../../interfaces/IList";

import { add, remove } from "../../store/slices/list.slice";

import ListItem from "../ListItem";

import Filter from "../Filter";

const List: React.FC = () => {
    const { lists } = useAppSelector((state) => state.lists);

    const [title, setTitle] = useState<string | undefined>("");

    const [selectedData, setSelectedData] = useState<IList[]>(lists);

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const dispatch = useAppDispatch();

    const [idCounter, setIdCounter] = useState<number>(lists.length + 1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSave = () => {
        if (!title) {
            setErrorMessage("The field can´t be empty!");
            return;
        }
        setErrorMessage(undefined);

        const newList = {
            id: idCounter,
            title,
            completed: false,
        };

        dispatch(add(newList));

        setIdCounter(idCounter + 1);
    };

    function getData(selectedData: IList[]) {
        setSelectedData(selectedData);
    }

    return (
        <Container>
            <form>
                <input
                    value={title}
                    onChange={handleChange}
                    placeholder="Digite o nome da tarefa"
                    type="text"
                />
                <button className="add" type="button" onClick={handleSave}>
                    Enviar <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
            <Filter getData={getData} />
            {errorMessage && errorMessage}
            {selectedData.length > 0 && (
                <div className="lists-container">
                    {selectedData.map((list) => (
                        <ListItem key={list.id} item={list} />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default List;
