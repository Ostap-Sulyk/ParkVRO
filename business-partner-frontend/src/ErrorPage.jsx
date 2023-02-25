import {useRouteError, Link} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex h-screen text-center text-2xl">
            <div className="m-auto">
                <h1 className="font-bold text-4xl">Oops! 😵</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/home">
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
                    >Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
}