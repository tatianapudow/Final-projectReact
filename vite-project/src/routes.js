import { Children, Component } from "react";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { createBrowserRouter } from "react-router";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";

export const router = createBrowserRouter([
    {
        Component:MainLayout,
        children:[
            {
                index:true,
                Component: HomePage
            },
            {
                path:'products',
                Component:ProductsPage
                
            },
            {
                path:'products/:id',
                Component:ProductPage     
            },
            {
                path:'cart',
                Component:CartPage
            }

        ]

    }
    

])