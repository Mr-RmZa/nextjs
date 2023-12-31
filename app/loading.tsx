import Image from "next/image";

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Image
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
