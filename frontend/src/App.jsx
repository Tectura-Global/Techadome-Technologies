import { router } from "./routes"
import { useLenis } from "./hooks/useLenis"
import { RouterProvider } from "react-router-dom"

function App() {

	useLenis()
	
	return (
		<RouterProvider router={router}/>
	)
}

export default App