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
                console.log('this is details', p)
                setDetails(p)
            })

    }, [id])
    // classDetails.map(details => console.log(details))
    // console.log(classDetails)
    return (
        <div className="container">
            <div className="row">
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