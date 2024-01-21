import html from "html-literal";
import blackBeltBoard from "../../assets/bbc wall.webp";

export default state => html`
  <h1>Ninja Log and Tracker</h1>
  <img src="${blackBeltBoard}" alt="BlackBelt" />


  <div class="trainingLog">
  <form id="trainingLog" method="POST" action="">
    <h2>Training Log Submission</h2>
    <label for="training">Training:</label>
    <input
      type="date"
      id="start"
      name="training"
      value="2024-01-13"
      min="2024-01-13"
      max="2024-01-13"
    />

    <label for="kata">Kata level</label>
    <select name="kata" id="kata">
      <option value="">--Select Your Kata-- </option>
      <option value="white">White</option>
      <option value="yellow">Yellow</option>
      <option value="orange">Orange</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="purple">Purple</option>
      <option value="red">Red</option>
      <option value="brown">Brown</option>
      <option value="black">Black</option>
    </select>
    <label for="katapractice">Minutes Practiced:</label>
    <input type="number" id="katapractice" name="katapractice" /><br>

    <label for="distance">Running: Distance:</label>
    <input type="number" id="distance" name="distance" min="1" max="20" />
    <label for="pace">Pace (minutes per mile):</label>
    <input type="number" id="pace" name="pace" value="running" />
    <label for="time">Total Time (in minutes):</label>
    <input type="number" id="time" name="time" /><br>

    <label for="pushups">Push-ups:</label>
    <input type="number" id="pushups" name="pushups" /><br>

    <label for="crunches">Crunches:</label>
    <input type="number" id="crunches" name="crunches" /><br>

    <label for="burpies">Burpies:</label>
    <input type="number" id="burpies" name="burpies" /><br>

    <label for="wallsit">Wall-Sit:</label>
    <input type="number" id="wallsit" name="wallsit" /><br>

  <input type="submit" value="Save" name="submit"/>
  </form>
  </div>
  <div class="student-sensei">
    <h2>Send Senei a message</h2>
    <form id="messagetosensei" method="POST" action="">
    <label for="submitDate">Date Submitted:</label>
    <input
      type="date"
      id="start"
      name="trip-start"
      min="2024-01-13"
      max="2055-01-13"
    /><br/>
    <label for="name">Student Name</label>
    <input
        type="text"
        id="name"
        name="name"
        placeholder="'John Doe'" /><br/>
    <label for="message">Message:</label><br/>
      <textarea
        rows="3"
        cols="50"
        name="message"
        id="message"
        required=""
        >
      </textarea>
  <input type="submit" value="Submit" />
  </form>
  </div>
  <div class="trainingComplete">
  <table id="trainingCompleteLog">
    <h2>Completed Training<h2>
    <tr>
      <th>Date</th>
      <th>Kata level</th>
      <th>Running Distance:</th>
      <th>Push-ups:</th>
      <th>Crunches:<th>
      <th>Burpies:<th>
      <th>Wall-Sit:<th>
    </tr>
    ${state.trainingLog
      .map(trainingCompleteLog => {
        return `<tr><td>${trainingCompleteLog.training}</td><td>${trainingCompleteLog.kata}</td><td>${trainingCompleteLog.katapractice}</td>
        ${trainingCompleteLog.distance}</td><td>${trainingCompleteLog.pace}</td><td>${trainingCompleteLog.time}</td><td>${trainingCompleteLog.pushups}</td><td>
        ${trainingCompleteLog.crunches}</td><td>${trainingCompleteLog.burpies}</td><td>${trainingCompleteLog.wallsit}</td><tr>`;
      })
      .join("")}
    </table>
  </div>
`;
