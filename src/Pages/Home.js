import SideBar from "../components/SideBar/SideBar";
import Notes from "../components/Notes/Notes";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
    return (
        <>
            <SideBar />
            <SearchBar />
            <Notes />
        </>
    );
}
