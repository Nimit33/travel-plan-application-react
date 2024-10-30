import { useState } from "react";


function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}....`;
    //remove true hai toh puri info dikhao wrna dusra case
    function readmoreHandler() {
        // readmore variable ko switch krega true tha toh false, false tha toh true
        setReadmore(!readmore);
    }


    return (

        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    {/* info mein se nikal liya */}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read \More`}
                        {/* readmore wala function true hai toh show less wrna read more */}


                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>

    );
}

export default Card;