import Link from "./Link";
import "./SideBar.css";

// Define the type for each link object
interface LinkItem {
  label: string;
  path: string;
}

function SideBar() {
  const links: LinkItem[] = [
    { label: "Home", path: "/" },
    { label: "Button", path: "/button" },
    { label: "Dropdown", path: "/dropdown" },
  ];

  const renderedLinks = links.map((link: LinkItem) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="sidebar">{renderedLinks}</div>;
}

export default SideBar;
