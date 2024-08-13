import Link from "next/link";

const Footer = () => {
  const navItems = [
    { display: "the camp.", slug: "/" },
    { display: "the experience.", slug: "/experience" },
    { display: "the blog.", slug: "/blog" },
    { display: "the events.", slug: "/events" },
  ];

  const policies = [
    { display: "Imprint", slug: "/imprints" },
    { display: "Terms & Conditions", slug: "/t&c" },
    { display: "Data Protection", slug: "/data-protection" },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img className="footer__logo" src="/assets/logo.svg" alt="logo" />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>
                <h5>{item.display}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => {
            // console.log(policy.display);
            <li key={policy.slug}>
              <Link href={policy.slug}>
                {/* <p className="copy">{policy.display}</p> */}
                console.log(policy.display);
              </Link>
            </li>;
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
