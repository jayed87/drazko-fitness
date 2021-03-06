import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ClassDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})
    useEffect(() => {
        fetch('/classes.json')
            .then(res => res.json())
            .then(data => {
                const p = data.find(p => p.id == id)
                setDetails(p)
            })

    }, [id])
    return (
        <div className="container py-5">
            <div className="row">
                <h3 className="mb-4 text-center" style={{ color: "#e1193e" }}>CLASS INFORMATION</h3>
                <div className="col-lg-6 col-md-6 col-sm-12 shadow p-3 mb-5 bg-white rounded">
                    <img src={details.img} className="img-thumbnail" alt="pictue" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h4>{details.name}</h4>
                        <p>{details.duration}</p>
                        <p>{details.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;