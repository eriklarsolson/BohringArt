import React from "react";
import LearnSection from "./LearnSection";
import Header from "./Header";
import RatePopup from "../shared/modals/Rate/RatePopup";
import {ToastContainer} from "react-toastify";

class Home extends React.Component<any, any> {
    render() {
        return (
            <>
                <Header />

                <LearnSection />


            </>
        )
    }
}
export default Home;