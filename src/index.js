import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dishList = [
  {
    name: "Köttbullar med potatis och lingonsås",
    ingredients: "Fläsk eller nötkött, lök, ägg, mjölk och ströbröd",
    price: "109 kr",
    photoName: "img/Meatballs.jpg",
    soldOut: false,
  },
  {
    name: "Räkmacka",
    ingredients:
      "Sallad, majonnäs, ägg, dill, kaviar och en generös mängd räkor",
    price: "139 kr",
    photoName: "img/Shrimp Sandwich.jpg",
    soldOut: false,
  },
  {
    name: " Ärtsoppa & Pannkakor",
    ingredients:
      "Torkade gula ärtor och fläskbuljong, kryddad med timjan och toppad med salta fläskbitar och senap",
    price: "109 kr",
    photoName: "img/Pea Soup & Pancakes.jpg",
    soldOut: false,
  },
  {
    name: "Smörgåstårta",
    ingredients:
      "Majonnäs, ägg, paté eller krämiga blandningar, och sedan dekorerad med kött och grönsaker",
    price: "219 kr",
    photoName: "img/Swedish Sandwich Cake.jpg",
    soldOut: false,
  },
  {
    name: "Pytt i Panna ",
    ingredients: "Potatis, lök och fläsk",
    price: "109 kr",
    photoName: "img/Pyttipanna Swedish Hash.jpg",
    soldOut: false,
  },
  {
    name: "Kalops",
    ingredients: "Nötkött med potatis, lök, kryddpeppar och lagerblad",
    price: "109 kr",
    photoName: "img/Kalops.jpg",
    soldOut: true,
  },
  {
    name: "Toast Skagen",
    ingredients: "Räkor, majonnäs och gräddfil",
    price: "119 kr",
    photoName: "img/Toast Skagen.jpg",
    soldOut: false,
  },
  {
    name: "Inlagd sill",
    ingredients:
      "Vatten, stark vinäger, salt, kryddor med kokt potatis och ringlad med gräddfil och hackad gräslök",
    price: "109 kr",
    photoName: "img/Pickled herring.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Order />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Svensk traditionell smak Matsal</h1>
    </header>
  );
}

function Menu() {
  const dishes = dishList;
  const numDishes = dishes.length;

  return (
    <main className="menu">
      <h2>Meny</h2>

      {numDishes > 0 ? (
        <>
          <p>Den klassiska svenska maten.</p>

          <ul className="dishes">
            {dishes.map((dish) => (
              <Dish dishObj={dish} key={dish.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Vi håller fortfarande på med vår meny. Välkommen tillbaka senare.</p>
      )}
    </main>
  );
}

function Dish({ dishObj }) {
  return (
    <li className={`dish ${dishObj.soldOut ? "sold-out" : ""}`}>
      <img src={dishObj.photoName} alt={dishObj.name} />
      <div>
        <h3>{dishObj.name}</h3>
        <p>{dishObj.ingredients}</p>
        <span>{dishObj.soldOut ? "SOLD OUT" : dishObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const open = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {open ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Välkomna mellan {openHour}:00 and {closeHour}:30, Tis - Lör.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Vi har öppet från {openHour}:00 till {closeHour}:30, Tis - Lör. Kom och
        besök oss eller beställ online.
      </p>
      <button className="btn">Beställ</button>
      <p>&#128222; 08-587 220 80</p>
      <p>Brunkebergstorg 4, 6, 138 52 Stockholm</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
