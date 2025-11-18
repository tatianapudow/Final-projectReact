import ReactDOM from "react-dom/client";
import './index.css'
import { router } from "./routes";
import { RouterProvider } from "react-router";
import { stores } from "./stores/stores";
import { Provider } from "react-redux";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

    <Provider store={stores}>
        <RouterProvider router={router}/>
    </Provider>
  
);


