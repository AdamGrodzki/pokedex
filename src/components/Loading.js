// import { SiPokemon } from "react-icons/si";
import "../styles/loading.css"
// import Starmie from "../../src/assets/images/starmie.png"
import Starmie from "../../src/assets/images/Daco_5326559.png"

const Loading = () => {
    return (
        <div className="loading-page">
            {/* <SiPokemon size={400} /> */}
            <img src={Starmie} alt="Loading..."></img>
            {/* <img src={Starmie} alt="Loading..."></img> */}
            {/* <img src="https://24.media.tumblr.com/9dcd6bdef0ae04d9ad5fc615d921cf9e/tumblr_msu3y1JBkb1scncwdo1_500.gif" width={400} height={400} alt="Loading..."></img> */}
        </div>
    );
}

export default Loading;