import { Link } from "react-router-dom";

const News =  () => {
    return (
        <div>
            <div className=" text-center py-2">
                <p className="text-md font-light">
                    Move, Shop, Customise &amp; Celebrate With Us
                </p>
                <p className="text-xs">
                    No matter what you feel like doing today, It's better as a Member.
                </p>
                <Link className="font-light underline text-xs pt-5" to="/sign-up/request-verification-code">
                    Join Us
                </Link>
            </div>
        </div>
    )
}

export default News;