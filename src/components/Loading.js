import "../styles/loading.css"
// import Starmie from "../../src/assets/images/starmie.png"
import Starmie from "../../src/assets/images/starmiePixel.png"

const Loading = () => {
    return (
        <div className="loading-page">
            <img src={Starmie} alt="Loading..."></img>
        </div>
    );
}

export default Loading;