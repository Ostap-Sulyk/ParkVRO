const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-gray-800 p-4 text-center text-white">
            <p className="text-sm">&copy; {new Date().getFullYear()} ParkVRO</p>
        </footer>
    );
};

export default Footer;
