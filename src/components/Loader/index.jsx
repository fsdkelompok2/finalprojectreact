import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
 return (
    <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
 )
}

export default Loader;