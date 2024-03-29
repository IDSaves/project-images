import React from "react";
import { Link } from "react-router-dom";

const Image = ({ img }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4 pl-3 pr-3 mb-3">
            <Link to={`/image/${img._id}`}>
                <div className="extra p-0">
                    <div className="container-fluid imageBlock d-flex align-items-center p-0">
                        <img className="curImage" src={`/images/${img.path}`} />
                        <div className="likes-counter d-flex align-items-center p-1">
                            <img src="https://twemoji.maxcdn.com/svg/2764.svg"/>
                            <span className="text-center mb-0"><b>{img.likes}</b></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Image;