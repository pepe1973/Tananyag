import { useParams } from 'react-router-dom';
import './EgyediCake.css';
import { useEffect, useState } from 'react';

const EgyediCake = () => {
    const { id } = useParams();
    const [egyediCake, setEgyediCake] = useState({});
    const [kepek, setKepek] = useState([]);

    useEffect(() => {
        async function cakesLeker() {
            const response = await fetch(
                'http://localhost:3500/api/cakes-frontend'
            );

            const tortak = await response.json();

            const suti = tortak.cakes.filter((elem) => elem._id === id);
            console.log(suti);

            if (response.ok) {
                setEgyediCake(suti[0]);
                setKepek(suti[0].kepek);
            } else {
                window.alert(tortak.msg);
            }
        }

        cakesLeker();
    }, []);

    return (
        <div className="egyedi-kontener">
            <h1>Torta neve: {egyediCake.nev} Ft</h1>
            <h3>Ár: {egyediCake.ar}</h3>
            <h3>Leírás: {egyediCake.leiras}</h3>
            <div className="egyedi-kepek">
                {kepek.map((elem) => {
                    return (
                        <div
                            className="egyedi-kep"
                            key={elem}
                        >
                            <img src={elem} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EgyediCake;
