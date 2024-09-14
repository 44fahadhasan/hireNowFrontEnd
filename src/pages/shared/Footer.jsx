import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SiteLogo from "../../components/SiteLogo";

const navs = [
  [
    { title: "Services" },
    [
      { path: "/", label: "Branding" },
      { path: "/", label: "Design" },
      { path: "/", label: "Marketing" },
      { path: "/", label: "Advertisement" },
    ],
  ],
  [
    { title: "Company" },
    [
      { path: "/", label: "About us" },
      { path: "/", label: "Contact" },
      { path: "/", label: "Jobs" },
      { path: "/", label: "Press kit" },
    ],
  ],
  [
    { title: "Legal" },
    [
      { path: "/", label: "Terms of use" },
      { path: "/", label: "Privacy policy" },
      { path: "/", label: "Cookie policy" },
    ],
  ],
];

const Footer = () => {
  return (
    <div className="bg-base-200">
      <Container>
        <footer className="footer px-0 text-base text-base-content p-10">
          <aside>
            {/* logo */}
            <SiteLogo />

            <p>
              We are an HR Tech company specialized in global
              <br />
              talent recruitment and hiring.
            </p>
          </aside>

          {navs?.map((nav, idx) => (
            <nav key={idx}>
              <h6 className="footer-title">{nav[0].title}</h6>

              {nav[1]?.map(({ path, label }) => (
                <Link key={label} to={path} className="link link-hover">
                  {label}
                </Link>
              ))}
            </nav>
          ))}
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
