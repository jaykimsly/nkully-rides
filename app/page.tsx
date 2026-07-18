"use client";

import "./nkully.css";
import { useMemo, useState } from "react";

export default function Home() {
  const routes = [
    { from: "Location", to: "Town", price: 80 },
    { from: "Town", to: "Location", price: 80 },
    { from: "Ext 18", to: "Town", price: 90 },
    { from: "Kakhaleni", to: "Town", price: 120 },
    { from: "Location", to: "Kakhaleni", price: 160 },
    { from: "Emtjindini", to: "Town", price: 200 },
    { from: "Bhohili", to: "Town", price: 200 },
    { from: "Jele Farm", to: "Town", price: 120 },
    { from: "Town", to: "Caldonia", price: 190 },
    { from: "Location", to: "Caldonia", price: 200 },
    { from: "Anges Mine", to: "Town", price: 350 },
    { from: "Shiba Mine", to: "Town", price: 550 },
    { from: "Matsulu", to: "Barberton", price: 900 },
    { from: "Malelane", to: "Barberton", price: 1200 },
    { from: "Mbombela", to: "Barberton", price: 700 },
    { from: "White River", to: "Barberton", price: 850 },
    { from: "Consort Mine", to: "Town", price: 450 },
    { from: "Town", to: "Dikbas", price: 80 },
    { from: "Location", to: "Dikbas", price: 90 },
    { from: "Town", to: "Fairview", price: 200 },
    { from: "Town", to: "Diggers Retreat", price: 300 },
    { from: "Barberton", to: "Badplaas", price: 1100 },
    { from: "Barberton", to: "Nhlazatshe", price: 1500 },
    { from: "Barberton", to: "Oshoek", price: 1900 },
  ];

  const [route, setRoute] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [payment, setPayment] = useState("Cash");

  const selectedRoute = useMemo(
    () =>
      routes.find(
        (r) => `${r.from} → ${r.to}` === route
      ),
    [route]
  );

  const fare = useMemo(() => {
    if (!selectedRoute) return 0;

    const hour = new Date().getHours();
    const night = hour >= 19 || hour < 5;

    return night
      ? selectedRoute.price * 2
      : selectedRoute.price;
  }, [selectedRoute]);

  function requestRide() {
    if (
      !name ||
      !phone ||
      !pickup ||
      !destination ||
      !route
    ) {
      alert("Please complete all fields");
      return;
    }

    const message = `
NKULLY'S SERVICES BOOKING

Name: ${name}
Phone: ${phone}

Route: ${route}

Pickup: ${pickup}
Destination: ${destination}

Payment: ${payment}

Fare: R${fare}
`;

    window.open(
      `https://wa.me/27664970017?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  }

  return (
    <main className="page">

      <section className="hero">
        <h1>👑 NKULLY'S SERVICES</h1>
        <p>Comfort • Safety • Reliability</p>
      </section>

      <div className="container">

        <img
          src="/flyer.jpg"
          alt="Flyer"
          className="flyer"
        />

        <div className="card">

          <h2>Request A Ride</h2>

          <input
            className="input"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) =>
              setPickup(e.target.value)
            }
          />

          <input
            className="input"
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />

          <select
            className="select"
            value={route}
            onChange={(e) =>
              setRoute(e.target.value)
            }
          >
            <option value="">
              Select Route
            </option>

            {routes.map((r, i) => (
              <option
                key={i}
                value={`${r.from} → ${r.to}`}
              >
                {r.from} → {r.to} (R{r.price})
              </option>
            ))}
          </select>

          <select
            className="select"
            value={payment}
            onChange={(e) =>
              setPayment(e.target.value)
            }
          >
            <option>Cash</option>
            <option>PayShap</option>
          </select>

          {selectedRoute && (
            <div className="price-box">
              <strong>Fare:</strong> R{fare}
            </div>
          )}

          {payment === "PayShap" && (
            <div className="payment-box">
              <strong>PayShap Number:</strong>
              <br />
              066 497 0017
              <br />
              Reference: Phone Number
            </div>
          )}

          <button
            className="button"
            onClick={requestRide}
          >
            REQUEST RIDE
          </button>

        </div>

        <div className="contact">
          <h2>Contact Us</h2>
          <p>📞 066 497 0017</p>
          <p>📞 081 377 7149</p>
          <br />
          <p>Local Rides • Long Distance</p>
        </div>

      </div>

    </main>
  );
}
