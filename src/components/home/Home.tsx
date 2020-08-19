import React from "react";
import LearnSection from "./LearnSection";
import Header from "./Header";
import RatePopup from "../shared/modals/Rate/RatePopup";
import {ToastContainer} from "react-toastify";

class Home extends React.Component<any, any> {
    render() {
        return (
            <>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />

                {this.props.location.state !== undefined && this.props.location.state.popupOpened && <RatePopup />}
                <Header />

                <LearnSection />
            </>
        )
    }
}
export default Home;