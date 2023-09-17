import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { useAppSelector } from "../../hooks/useRedux";
import IList from "../../interfaces/IList"; // Importe a interface IList

interface FilterProps {
    getData: (props: IList[]) => void; // Especifique o tipo de getData
}
function Filter(props: FilterProps) {
    const { lists } = useAppSelector((state) => state.lists);
    const [sorting, setSorting] = useState<string>("all");

    // Atualize a lista filtrada sempre que o estado de sorting mudar
    useEffect(() => {
        let filteredLists = [...lists];

        if (sorting === "completed") {
            filteredLists = filteredLists.filter(
                (list) => list.completed === true
            );
        } else if (sorting === "uncompleted") {
            filteredLists = filteredLists.filter(
                (list) => list.completed === false
            );
        }

        // Chama a função de callback para enviar dados para o pai
        props.getData(filteredLists);
    }, [sorting, lists]);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSorting(e.target.value);
    };

    return (
        <Container value={sorting} name="filter" onChange={handleSelect}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </Container>
    );
}

export default Filter;
