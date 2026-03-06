import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import BaseLayout from './Layouts/BaseLayout';
import { Route, Navigate, createBrowserRouter, createRoutesFromElements, Routes } from "react-router-dom"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
		<Route path="/" element={<BaseLayout />}>
			<Route index element={<Landing />} />
			<Route path="*" element={<NotFound />} />
		</Route>
    </>
  )
);