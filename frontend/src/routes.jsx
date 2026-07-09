import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Contact from './components/Contact';
import BaseLayout from './Layouts/BaseLayout';
import { Route, Navigate, createBrowserRouter, createRoutesFromElements, Routes } from "react-router-dom"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
		<Route path="/" element={<BaseLayout />}>
			<Route index element={<Landing />} />
			<Route path='contact' element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Route>
    </>
  )
);