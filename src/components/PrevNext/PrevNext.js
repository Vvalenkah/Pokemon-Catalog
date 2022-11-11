export const PrevNext = () => {
    return (
        <>
            <div className="wrapper">
                <div className="button-container">
                    <button className="button-prev" onClick={e => {
                        return e -= 20
                    }}>
                        Prev
                    </button>
                    <button className="button-next" onClick={e => {
                        return e += 20
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}