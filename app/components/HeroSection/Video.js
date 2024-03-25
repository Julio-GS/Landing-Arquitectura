import videoSrc from "./hero.mp4";

export default function Video() {
  return (
    <video autoPlay loop muted height="400px">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
