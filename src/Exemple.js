import React, { useState } from 'react';

const Exemple = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Vous avez cliqué {count} fois </p>
            <button onClick={() => setCount(count + 1)}>Cliquer ici</button>

        </div>
    );
};

export default Exemple;