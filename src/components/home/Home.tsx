import React from "react";
import LearnSection from "./LearnSection";
import Header from "./Header";
import RatePopup from "../shared/modals/Rate/RatePopup";
import {ToastContainer} from "react-toastify";

class Home extends React.Component<any, any> {
    render() {
        const goToActivity = (learnSelection: number) => {
            if(learnSelection === 0) {
                this.props.history.push('/activity/circuit-building')
            } else if(learnSelection === 1) {
                this.props.history.push('/activity/metal-engraving')
            } else if(learnSelection === 2) {
                this.props.history.push('/activity/rocket-building')
            } else if(learnSelection === 3) {
                console.log("how")
                this.props.history.push('/activity/stellar-cycle')
            }
        }
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

                {this.props.location.state !== undefined && this.props.location.state.popupOpened &&
                    <RatePopup />
                }

                <Header />

                <LearnSection goToActivity={goToActivity} />


            </>
        )
    }
}
export default Home;