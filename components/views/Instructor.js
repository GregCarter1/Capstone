import html from "html-literal";
import tiedBelt from "../../assets/tied black belt.png";
export default state => html`
  <h1>Sensei Work Area</h1>

  <div class="senseiWork">
    <img src="${tiedBelt}" alt="tiedBlackBelt" />
  </div>
  <table id="messages">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Message</th>
    </tr>
    ${state.messages
      .map(instructor => {
        return `<tr><td>${instructor.name}}</td><td>${instructor.email}</td><td>${instructor.phone}</td><td>${instructor.message}</td></tr>`;
      })
      .join("")}
  </table>
`;
