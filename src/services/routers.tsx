import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageTwo from "../pages/PageTwo";

const routers = createBrowserRouter([
    {
        path: "/",
        element: (
                <App></App>
        )
    },
    {
        path: "/page_two",
        element: (<PageTwo></PageTwo>)
    }
   


])
export default routers;