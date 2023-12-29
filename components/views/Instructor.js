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

  <h3>
    Upcoming Events and stats: UFC ${state.instructors.eventId},
    ${state.instructors.name} on ${state.instructors.day}.
  </h3>
`;
// process.env.OPEN_MMA_MAP_API_KEY
