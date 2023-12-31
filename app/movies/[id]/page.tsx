import Notfound from "@/app/not-found";
import Image from "next/image";
import { Key } from "react";

async function Single({ params }: Record<string, any>) {
  const fetchData = await fetch(
    `https://moviesapi.ir/api/v1/movies/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await fetchData.json();
  if (!data.id) return <Notfound />;
  return (
    <article className="py-5">
      <div className="container">
        <div className="card mb-3 p-0">
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                width={500}
                height={400}
                src={data.poster}
                alt={data.title}
                priority={true}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <small className="text-body-secondary">
                      Year of construction : {data.year}
                    </small>
                  </div>
                  <div className="col">
                    <small className="text-body-secondary float-end">
                      producing countries : {data.country}
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">Time : {data.runtime}</p>
                <p className="card-text">Director : {data.director}</p>
                <p className="card-text">IMDB score : {data.imdb_rating}</p>
                <p className="card-text">
                  categories :
                  {data.genres.map((ge: string, i: Key | null | undefined) => (
                    <span className="badge text-bg-primary ms-1" key={i}>
                      {ge}
                    </span>
                  ))}
                </p>
                <p className="card-text">plot : {data.plot}</p>
                <p className="card-text">images : </p>
                <div className="row">
                  {data.images.map((img: string, i: Key | null | undefined) => (
                    <div className="col" key={i}>
                      <Image
                        width={500}
                        height={400}
                        src={img}
                        alt="images"
                        priority={true}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Single;
