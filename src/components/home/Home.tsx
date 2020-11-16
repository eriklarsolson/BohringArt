import React from "react";
import {ToastContainer} from "react-toastify";
import {RatingSlideOut} from "../shared/animations/RatingSlideOut";
import Header from "./Header";
import LearnSection from "./LearnSection";

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            popupOpened: true,
        };
    }

    render() {
        const cyclePopup = () => {
            this.setState({popupOpened: !this.state.popupOpened})
        }

        const goToActivity = (learnSelection: number) => {
            if(learnSelection === 0) {
                this.props.history.push('/activity/metal-engraving')
            } else if(learnSelection === 1) {
                this.props.history.push('/activity/circuit-building')
            } else if(learnSelection === 2) {
                this.props.history.push('/activity/rocket-building')
            } else if(learnSelection === 3) {
                this.props.history.push('/activity/object-page')
            }
        }
        return (
            <>
                <div style={{position: "relative", height: "100%", width: "100%", backgroundColor: "#F8EDDD"}}>
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

                    {this.props.location.state !== undefined && this.props.location.state.popupOpened && this.state.popupOpened &&
                    <div style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: 4, overflow: "hidden"}}>
                        <RatingSlideOut setParentState={() => cyclePopup()} />
                    </div>
                    }

                    <Header />

                    <LearnSection goToActivity={goToActivity} />
                </div>
            </>
        )
    }
}
export default Home;