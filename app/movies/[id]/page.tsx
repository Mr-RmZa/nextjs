import Image from "next/image";

async function Single({ params }: Record<string, any>) {
  const fetchData = await fetch(
    `https://moviesapi.ir/api/v1/movies/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await fetchData.json();
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
                    <small className="text-body-secondary">{data.year}</small>
                  </div>
                  <div className="col">
                    <small className="text-body-secondary float-end">
                      {data.country}
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Single;
