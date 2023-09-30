import { PersonInfo } from "./components/PersonInfo";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "kowalski@gmail.com",
    tel: "+48565 555 555",
  };

  const janina = {
    name: "Janina",
    lastName: "Kowalska",
    mail: "kowalska@gmail.com",
    tel: "+48565 555 785",
  };

  const karol = {
    name: "Karol",
    lastName: "Kowalski",
    mail: "kowalskkarol@gmail.com",
  };

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={karol} />
      <img src="/dog.jpg" alt="" />
    </>
  );
}

export default App;
