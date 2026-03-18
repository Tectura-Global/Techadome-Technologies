import Nav from "../components/Nav";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Landing from "../pages/Landing";
import { Outlet, Link } from "react-router-dom";

function BaseLayout() {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default BaseLayout;