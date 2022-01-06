import React from 'react';

const MoreSpecial = ({special}) => {
    return (
        <div className="col-md-4 bg-danger p-5">
        <div className="card">
        <img src={special.image} alt="" />
            <div className="card-body">
                <h5 className="fs-2 fw-bold text-center">{special.name}</h5>
                <h5 className="fs-4 text-center"> Price: ${special.price}</h5>
                <p className="text-muted">BUY TO CONTACT : 01771276400</p>
            </div>
        </div>

    </div>
    );
};

export default MoreSpecial;