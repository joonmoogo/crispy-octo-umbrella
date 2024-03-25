import ElevateAppBar from "../components/Appbar"
import Footer from "../components/Footer"
import HomeMenu from "../components/HomeMenu"
import HomeSearch from "../components/HomeSearch"


export default function Homepage() {
    return (
        <>
            <ElevateAppBar />
            <HomeSearch />
            <HomeMenu />
            <Footer />
        </>
    )
}