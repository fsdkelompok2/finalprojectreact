import Logo from "./components/Logo";

const Header = ({children}) => {
    return (
        <header className="flex flex-col gap-4 mb-10">
            <Logo />
            { children }
        </header>
    );
};

export default Header;