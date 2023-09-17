import React, { useState } from "react";

import { Container } from "./style";
import { useAppSelector } from "../../hooks/useRedux";

function Filter(props: { sendData: (dados: any) => void }) {
    const { lists } = useAppSelector((state) => state.lists);

    const [dados, setDados] = useState(lists);

    const [sorting, setSorting] = useState<string>("all");

    let filteredLists = [...lists];
    // Crie uma cópia da lista para não modificar a original
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSorting = e.target.value;
        setSorting(selectedSorting);

        if (sorting === "completed") {
            filteredLists = filteredLists.filter(
                (list) => list.completed === true
            );
        } else if (sorting === "uncompleted") {
            filteredLists = filteredLists.filter(
                (list) => list.completed === false
            );
        }

        setDados(filteredLists);

        // Chama a função de callback para enviar dados para o pai
        props.sendData(filteredLists);
    };

    return (
        <Container name="filter" onChange={handleSelect}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </Container>
    );
}

export default Filter;
