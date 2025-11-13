import HamburgerMenu from "../ui/hamburgerMenu";
import logoImage from "../assets/logoImage.webp";
import "../styles/components/TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <img src={logoImage} alt="Studio Rubato Logo" />
      <h1>Studio Rubato</h1>
      <HamburgerMenu />
    </div>
  );
};

export default TopHeader;
