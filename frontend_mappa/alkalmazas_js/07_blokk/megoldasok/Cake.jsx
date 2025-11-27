import './Cake.css';

const Cake = ({ elem }) => {
    function megnezes(id) {
        window.location.href = `/egyedicake/${id}`;
    }
    return (
        <div className="torta-kontener">
            <h1>{elem.nev}</h1>
            <p>Ár: {elem.ar} Ft</p>
            <div className="torta-kepek-kontener">
                {elem.kepek.map((item) => {
                    return (
                        <img
                            src={item}
                            key={item}
                        />
                    );
                })}
            </div>
            <p>{elem.leiras}</p>
            <button onClick={() => megnezes(elem._id)}>
                Nézzük meg közelebről
            </button>
        </div>
    );
};

export default Cake;
