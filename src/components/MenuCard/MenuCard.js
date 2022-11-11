import './style.scss';

export const MenuCard = ({ name, img }) => {
    return (
        <>
            <div className="card">
                <img src={img} alt="name"/>
                <p>{name}</p>
            </div>
        </>
    )
}