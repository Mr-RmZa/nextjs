"use client";
import axios from "axios";
import { Key, useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((d: Record<string, any>) => setusers(d.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <article className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">{children}</div>
          <div className="col-md-4">
            <div className="card">
              <ul className="list-group list-group-flush">
                {users.map(
                  (u: Record<string, any>, i: Key | null | undefined) => (
                    <li className="list-group-item" key={i}>
                      {u.name}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
