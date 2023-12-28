import html from "html-literal";
import blackBeltBoard from "../../assets/bbc wall.webp";
export default () => html`
  <h1>Ninja Log and Tracker</h1>
  <img src="${blackBeltBoard}" alt="BlackBelt" />
  <div class="student-info">
    <div class="studentinfo1">
      <h2>Student Information:</h2>
      <label for="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="'John Doe'"
      />
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" />
      <label for="belt">Belt Level:</label>
    </div>
  </div>
`;
