import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Student") {
    document.querySelector("form").addEventListener("save", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        training: inputList.training.value,
        kata: inputList.kat.value,
        katapractice: inputList.katapractice.value,
        distance: inputList.distance.value,
        pace: inputList.pace.value,
        time: inputList.time.value,
        pushups: inputList.pushups.value,
        crunches: inputList.crunches.value,
        burpies: inputList.burpies.value,
        wallsit: inputList.wallsit.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.TRAININ_LOG__URL}/student`, requestData)
        .then(response => {
          store.Student.trainingLog.push(response.data);
          router.navigate("/Student");
        })
        .catch(error => {
          console.log("error", error);
        });
    });
  }

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        fullName: inputList.name.value,
        email: inputList.email.value,
        phone: inputList.phone.value,
        message: inputList.message.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.CONTACT_API_URL}/contact`, requestData)
        .then(response => {
          store.Instructor.messages.push(response.data);
          router.navigate("/Contact");
        })
        .catch(error => {
          console.log("error", error);
        });
    });
  }
}
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Instructor":
        axios
          .get(
            `https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=${process.env.OPEN_MMA_MAP_API_KEY}`
          )
          .then(response => {
            store.Instructor.instructors = {
              eventId: response.data.num,
              name: response.data.name,
              day: response.data.day
            };

            done();
          })
          .catch(err => {
            console.alert("error", err);
            done();
          });
        break;

      case "student":
        axios
          .get(`${process.env.TRAINING_LOG_URL}/trainingrouter`)
          .then(response => {
            console.log("response", response);

            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      }
    }
  })
  .resolve();
