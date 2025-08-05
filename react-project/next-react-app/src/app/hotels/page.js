import Image from "next/image";
async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

function HotelBlock({ name, capacity }) {
  return (
    <div className="border p-4 m-2">
      {/* <Image src="https://github.com/frankstef.png" width={300} height={300} /> */}
      <h2>{name}</h2>
      <p>Capacity: {capacity}</p>
    </div>
  );
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div className="flex flex-row justify-center align-center">
          {data.map((hotel) => {
            return (
              <HotelBlock
                key={hotel.id}
                name={hotel.name}
                capacity={hotel.capacity}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
