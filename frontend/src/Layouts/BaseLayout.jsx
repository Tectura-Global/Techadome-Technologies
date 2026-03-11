import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";

function BaseLayout() {
	return (
		<>
			<main>
				<Nav />
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default BaseLayout;