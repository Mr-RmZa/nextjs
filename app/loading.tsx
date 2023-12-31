import Image from "next/image";

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Image
        className="img-fluid"
        width={150}
        height={150}
        alt="loading"
        src={"/loading.svg"}
        priority={true}
      />
    </div>
  );
}

export default Loading;
