function Header(props) {
  function updateHome() {
    props.setCurrentPage("home");
  }
  function updateAbout() {
    props.setCurrentPage("about");
  }
  function updateContact() {
    props.setCurrentPage("contact");
  }
  return (
    <header className="header">
      <ul className="flex gap-2 justify-center">
        <li onClick={updateHome}>Home</li>
        <li onClick={updateAbout}>About</li>
        <li onClick={updateContact}>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
