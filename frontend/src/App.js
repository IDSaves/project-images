import React, { useEffect } from "react";
import ImageUpload from "./components/imageUpload";
import MainPart from "./components/mainPart";
import IClassesBar from "./components/iClassesBar";
import Navigation from "./components/navigation";

const app = () => {
    return (
        <div className="row m-0">
            <div className="col-lg-10 offset-lg-1 p-0 pl-2 pr-2">
                <div className="row m-4">
                    <div className="col-lg-8">
                        <Navigation />
                        <MainPart />
                    </div>
                    <div className="col-lg-4">
                        <ImageUpload />
                        <IClassesBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default app;
