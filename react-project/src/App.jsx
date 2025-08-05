import "./App.css";

let language = "JavaScript";

// un-destructed
// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Office</h1>
//       <p>Established since {props.year}</p>
//     </header>
//   )
// }

//destructed
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Office</h1>
      <p>Established since {year}</p>
    </header>
  );
}

const items = [
  "Mobile Application Development",
  "Web Application Development",
  "Software Development",
];

const serviceObjects = items.map((service, i) => ({
  id: i,
  name: service,
}));

function Main({ services }) {
  return (
    <>
      <h2>Welcome to this office.</h2>
      <img
        src="https://github.com/frankstef.png"
        height={200}
        alt="A photo of Frank Stephen Maddela"
      />
      <ul>
        {/* a key is important to make sure that we stay in sync, because there might be items that are inserted on the middle of the list which could change the order of the list 
      BUT CAN STILL CAUSE PROBLEMS. Create a list of objects instead!*/}
        {services.map((service) => {
          return (
            <li key={service.id} style={{ listStyleType: "none" }}>
              {service.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <Header name="Stef" year={new Date().getFullYear()} />
      <Main services={serviceObjects} />
    </>
  );
}

export default App;
