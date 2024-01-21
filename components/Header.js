import html from "html-literal";
// import EFKLogo from "../assets/EFKLogo.jpg";

export default state => html`
  <div id="headContainer">
    <header>
      <!-- <img src="EFKLogo" alt="EFKLogo" width="300" height="300" /> -->
      <h1>${state.header}</h1>
    </header>
  </div>
`;
