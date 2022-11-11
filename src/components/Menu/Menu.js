import { useEffect, useState } from "react";
import BackendApiMainService from "../../api/BackendApiMainService";
import { MenuCard } from "../MenuCard/MenuCard";

import './style.scss';

export const Menu = () => {
    const [poks, setPoks] = useState([])
    const [pageNum, setPageNum] = useState(0)
    // const forTemp = (data) => {
    //     return data.map(elem => `<h2>${elem.id}</h2>`)
    // }
    useEffect(() => {
        BackendApiMainService.getMainData(pageNum).then(data => {
            setPoks(data.data.results)
            console.log(data.data.results)
        })
    }, [])
    return (
        <>
            <div className="wrapper">
                <div className="card-container">
                    {poks.map((e, g = 50) => {
                        return (
                            <MenuCard
                                name={e.name[0].toUpperCase() + e.name.slice(1)}
                                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${g + 1}.png`}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}