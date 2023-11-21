import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const dishList = [
  {
    name: "Köttbullar med potatis och lingonsås",
    ingredients: "Nötkött, lök, ägg, mjölk och ströbröd",
    price: "109 kr",
    soldOut: false,
  },
  {
    name: "Räkmacka",
    ingredients: "Sallad, majonnäs, ägg, dill, kaviar och räkor",
    price: "139 kr",
    soldOut: false,
  },
  {
    name: " Ärtsoppa & Pannkakor",
    ingredients: "Torkade ärtor, fläskbuljong, kryddad,fläskbitar och senap",
    price: "109 kr",
    soldOut: false,
  },
  {
    name: "Smörgåstårta",
    ingredients: "Majonnäs, ägg, paté, kött och grönsaker",
    price: "219 kr",
    soldOut: false,
  },
  {
    name: "Pytt i Panna ",
    ingredients: "Potatis, lök och fläsk",
    price: "109 kr",
    soldOut: false,
  },
  {
    name: "Kalops",
    ingredients: "Nötkött, potatis, lök, kryddpeppar och lagerblad",
    price: "109 kr",
    soldOut: true,
  },
  {
    name: "Toast Skagen",
    ingredients: "Räkor, majonnäs och gräddfil",
    price: "119 kr",
    soldOut: false,
  },
  {
    name: "Inlagd sill",
    ingredients: "Vatten, stark vinäger, salt, kryddor, potatis och gräslök",
    price: "109 kr",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
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
          <p>Den klassiska svenska maten</p>
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
      <div>
        <h3>{dishObj.name}</h3>
        <p>{dishObj.ingredients}</p>
        <span>{dishObj.soldOut ? "SOLD OUT" : dishObj.price}</span>
      </div>
    </li>
  );
}

function Order() {
  return (
    <div className="order">
      <p>
        Vi har öppet från 11:00 till 22:30, Tis - Lör. Kom och besök oss eller
        beställ online.
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
