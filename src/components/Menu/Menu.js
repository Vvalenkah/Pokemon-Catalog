import { useEffect, useState } from "react";
import BackendApiMainService from "../../api/BackendApiMainService";
import { MenuCard } from "../MenuCard/MenuCard";

import './style.scss';

export const Menu = () => {
    const [dimension, setDimension] = useState('official-artwork')
    const [poks, setPoks] = useState([]);
    const [page, setPage] = useState(0);


    // Вырезаем из адреса индекс покемошки

    function sliceString(string) {
        return string.slice(34).slice(0, -1)
    }

    function getPokeName(string) {
        return string[0].toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        BackendApiMainService.getMainData(page).then(data => {
            setPoks(data.data.results)
            console.log(data.data.results)
        })
    }, [page])

    return (
        <>
            <div className="wrapper">
                <div className="select-container">
                    <p>Choose image type!</p>
                    <select name="dimension" onChange={e => setDimension(e.target.value)}>
                        <option value="official-artwork" onClick={() => console.log('1')}>2D</option>
                        <option value="home" onClick={() => console.log('2')}>3D</option>
                    </select>
                </div>
                <div className="button-container">
                    <button onClick={() => {
                        if (page <= 0) {
                            setPage(0)
                        } else {
                            setPage(page - 21)
                        }
                    }}>Prev page</button>
                    <button onClick={() => setPage(page + 21)}>Next page</button>
                </div>
                <div className="card-container">
                    {poks.map((e, page) => {
                        return (
                            <MenuCard
                                name={getPokeName(e.name)}
                                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/${dimension}/${sliceString(e.url)}.png`}
                            />

                        )
                    })}
                </div>
                <div className="button-container">
                    <button onClick={() => {
                        if (page <= 0) {
                            setPage(0)
                        } else {
                            setPage(page - 21)
                        }
                    }}>Prev page</button>
                    <button onClick={() => setPage(page + 21)}>Next page</button>
                </div>
            </div>
        </>
    )
}