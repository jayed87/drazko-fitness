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
        <div className="container shadow p-5 mb-5 bg-white rounded" id="classes">
            <div className="text-center trainer-header mb-4">
                <small>CLASSES</small>
                <h4>FITNESS <span>CLASSES</span></h4>
            </div>
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