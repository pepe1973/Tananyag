import './Cake.css';

const Cake = ({ elem }) => {
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
        </div>
    );
};

export default Cake;
