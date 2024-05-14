import "../Loading/loading.css"
import Starmie from "../../assets/images/starmiePixel.png";


const Loading = () => {
    return (
        <div className="loading-page">
            <img src={Starmie} alt="Loading..."></img>
        </div>
    );
}

export default Loading;