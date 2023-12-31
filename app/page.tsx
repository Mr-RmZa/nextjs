import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const fetchData = await fetch(
    "https://moviesapi.ir/api/v1/movies?page={page}",
    {
      cache: "no-store",
    }
  );
  const data = await fetchData.json();
  return (
    <article className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.data.map((mov: Record<string, any>, i: Record<string, any>) => (
            <div className="col">
              <div className="card h-100">
                <Link href={`/movies/${mov.id}`}>
                  <Image
                    width={414}
                    height={414}
                    className="card-img-top img-card-content"
                    src={mov.poster}
                    alt={mov.title}
                    priority={true}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      href={`/movies/${mov.id}`}
                      className="text-decoration-none"
                    >
                      {mov.title}
                    </Link>
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col">
                      <small className="text-body-secondary">{mov.year}</small>
                    </div>
                    <div className="col">
                      <small className="text-body-secondary float-end">
                        {mov.country}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
