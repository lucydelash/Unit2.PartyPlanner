// A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.
// attach COHORT identifier & API_URL
// store event information
// fetch event info using API
// parse using Json
// render stored event information

/* event names, dates/times, locations, & description
{
    id: 1,
    name: "Event Name",
    description: "This is a description of the event.",
    date: "2021-09-30T00:00:00.000Z", // Date ISO string
    location: "123 Street"
  }
  */


const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
// used same URL from guided practice - changed artists to events (is that ok?)

const state = {
  events: [],
};

const eventList = document.querySelector("#events");

const addEventForm = document.querySelector("#addEvent");
addEventForm.addEventListener("submit", addEvent);

async function render() {
  await getEvents();
  renderEvents();
}
render();

async function getEvents() {
  try {

    const response = await fetch(API_URL);
    const json = await response.json();
    state.events = json.data;

    state.events.push({
      id: 1,
      name: "Blueberry Picking Party",
      description: "We're gonna pick blueberries.",
      date: "2024-03-23T12:30:00.000Z",
      location: "123 Street Ave"
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function renderEvents() {
  eventList.innerHTML = ""; // Clear previous events (suggested addition found online - thoughts?)
  state.events.forEach(event => {
    const eventItem = document.createElement("li");
    eventItem.textContent = `${event.name} ${event.description} ${event.date} ${event.location}`;
    eventList.appendChild(eventItem);
  });
}

/* found the below code online:
my forms now submit & populate on the webpage.
all this added text appears as well - Where is that coming from?
*/
function addEvent(event) {
  event.preventDefault();
  const formData = new FormData(addEventForm);
  const newEvent = {
    name: formData.get("name"),
    description: formData.get("description"),
    date: formData.get("date"),
    time: formData.get("time"),
    location: formData.get("location")
  };
  state.events.push(newEvent);
  renderEvents();
  addEventForm.reset();
}