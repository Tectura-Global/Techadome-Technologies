import { router } from "./routes"
import { useEffect } from "react"
import { fetchCsrfToken } from "./api/api"
import { useLenis } from "./hooks/useLenis"
import { RouterProvider } from "react-router-dom"

function App() {

	useEffect(() => {
    	fetchCsrfToken();
	}, []);
	
	useLenis()
	
	return (
		<RouterProvider router={router}/>
	)
}

export default App