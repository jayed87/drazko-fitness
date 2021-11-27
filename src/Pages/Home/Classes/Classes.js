import React, { useEffect, useState } from 'react';
import Class from '../Class/Class';
const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="container" id="classes">
            <p>Classes</p>
            <h4>FITNESS CLASSES</h4>
            <div className="row">
                {
                    classes.map(clas => <Class
                        key={clas.id}
                        clas={clas}
                    ></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;