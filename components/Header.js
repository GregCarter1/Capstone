import html from "html-literal";
import efkLogo from "../assets/EFK logo.jpg";

export default state => html`
  <div id="headContainer">
    <header>
      <img src="efkLogo" alt="EFK Logo" width="150" height="150">
      <h1>${state.header}</h1>
    </header>
  </div>
`;
