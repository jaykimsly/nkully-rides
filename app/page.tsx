"use client";

import { useState } from "react";

export default function Home() {
  const routes = [
    { id: 1, route: "Barberton → Mbombela", price: 700 },
    { id: 2, route: "Barberton → White River", price: 850 },
    { id: 3, route: "Barberton → KaNyamazane", price: 850 },
    { id: 4, route: "Barberton → Matsulu", price: 800 },
  ];

  const [route, setRoute] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [payment, setPayment] = useState("Cash");

  const selectedRoute = routes.find(
    (r) => r.route === route
  );

  const handleRequest = () => {
    if (
      !route ||
      !name ||
      !phone ||
      !pickup ||
      !destination
    ) {
      alert("Please complete all fields.");
      return;
    }

    const message = `🚖 NEW NKULLY RIDE REQUEST

Name: ${name}
Phone: ${phone}

Route: ${route}
Price: R${selectedRoute?.price}

Pickup: ${pickup}
Destination: ${destination}

Payment: ${payment}
`;

    window.open(
      `https://wa.me/27664970017?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-center">
          Nkully Rides
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Safe & Reliable Transport
        </p>

        <div className="space-y-4">

          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className="w-full border p-3 rounded"
          >
            <option value="">
              Select Route
            </option>

            {routes.map((r) => (
              <option
                key={r.id}
                value={r.route}
              >
                {r.route} - R{r.price}
              </option>
            ))}
          </select>

          {selectedRoute && (
            <div className="bg-green-100 p-3 rounded">
              Price: R{selectedRoute.price}
            </div>
          )}

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) =>
              setPickup(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
            className="w-full border p-3 rounded"
          />

          <div>
            <label className="font-medium">
              Payment Method
            </label>

            <select
              value={payment}
              onChange={(e) =>
                setPayment(e.target.value)
              }
              className="w-full border p-3 rounded mt-2"
            >
              <option value="Cash">
                Cash
              </option>
              <option value="PayShap">
                PayShap
              </option>
            </select>
          </div>

          {payment === "PayShap" && (
            <div className="bg-yellow-100 p-4 rounded">
              <h3 className="font-bold">
                PayShap Details
              </h3>

              <p>
                Number: 066 497 0017
              </p>

              <p>
                Reference: Your Phone Number
              </p>
            </div>
          )}

          <button
            onClick={handleRequest}
            className="w-full bg-black text-white p-3 rounded"
          >
            Request Ride
          </button>

        </div>
      </div>
    </main>
  );
}


