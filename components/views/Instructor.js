import html from "html-literal";
import tiedBelt from "../../assets/tied black belt.png";
import contact from "../../server/models/message.js";

export default state => html`
  <h1>Sensei Work Area</h1>

  <div class="senseiWork">
    <img src="${tiedBelt}" alt="tiedBlackBelt" />
  </div>
  <div class="sensei-student">
    <h2>Message to Students</h2>
    <form id="messagetoStudents" method="POST" action="">
    <label for="name">Sensei</label>
    <select name="sensei" id="sensei">
      <option value="">---- </option>
      <option value="manny">Manny</option>
      <option value="ethan">Ethan</option>
      <option value="ryan">Ryan</option>
    </select><br

    <label for="message">Message:</label><br />
      <textarea
        rows="10"
        cols="50"
        name="message"
        id="message"
        required=""
        >
      </textarea>
  <input type="submit" value="Submit" />
  </form>
  </div>
  <div class="messageFromStudent">
    <table id="incomingMail">
      <h2>From Students<h2>
    <tr>
      <th>Date Submitted</th>
      <th>Student Name</th>
      <th>Message</th>
    </tr>
  </div

  <table id="messages">
    <h2>Messages<h2>
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
