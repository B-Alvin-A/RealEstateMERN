import { useRoutes } from "react-router-dom"
import { 
    AboutUs, AgentList,AgentProfile,BlogDetails,BlogPage,ContactPage,
    ErrorPage,FAQ,Home,LandingPage,License,Listing,ListingMapView,
    NotFound,PrivacyPolicy,PropertyDetails 
} from "./pages"

const Routes = () => {
    let element = useRoutes([
        { path: "mydashboard" ,element: <Home /> },
        { path: "/" ,element: <LandingPage /> },
        { path: "aboutus" ,element: <AboutUs /> },
        { path: "listing" ,element: <Listing /> },
        { path: "listingmapview" ,element: <ListingMapView /> },
        { path: "propertydetails" ,element: <PropertyDetails /> },
        { path: "agentList" ,element: <AgentList /> },
        { path: "agentprofile" ,element: <AgentProfile /> },
        { path: "contactpage" ,element: <ContactPage /> },
        { path: "blogpage" ,element: <BlogPage /> },
        { path: "blogdetails" ,element: <BlogDetails /> },
        { path: "error" ,element: <ErrorPage /> },
        { path: "faq" ,element: <FAQ /> },
        { path: "privacypolicy" ,element: <PrivacyPolicy /> },
        { path: "license" ,element: <License /> },
        { path: "*" ,element: <NotFound /> }
        
    ])

    return element
}

export default Routes