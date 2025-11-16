import { useEffect, useState } from 'react';
import './Cakes.css';
import Cake from '../../components/Cake/Cake';

const Cakes = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        async function cakesLeker() {
            const response = await fetch(
                'http://localhost:3500/api/cakes-frontend'
            );

            const tortak = await response.json();
            if (response.ok) {
                setCakes(tortak.cakes);
            } else {
                window.alert(tortak.msg);
            }
        }

        cakesLeker();
    }, []);

    return (
        <div className="tortak-kontener">
            <h1>Torták</h1>
            {cakes.map((elem) => {
                return (
                    <Cake
                        elem={elem}
                        key={elem._id}
                    />
                );
            })}
        </div>
    );
};

export default Cakes;
