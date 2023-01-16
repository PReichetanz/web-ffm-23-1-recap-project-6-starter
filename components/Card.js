import Image from "next/image.js";

export default function Card({ name, image, location }) {
  return (
    <article>
      <figure>
        <Image src={image} width={250} height={150} alt="" />
        <figcaption>{name}</figcaption>
      </figure>
      <p>Location: {location}</p>
    </article>
  );
}
