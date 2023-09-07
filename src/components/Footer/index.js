import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://github.com/Roberthall653">
                <img src={require("../assets/mark-github-512.png")} alt="" />     
            </a>
            <a href="https://www.linkedin.com/in/robert-hall-b4126581/">
                <img src={require("../assets/linkedin icon.png")} alt="" />     
            </a>
        </footer>
    )
}
export default Footer;