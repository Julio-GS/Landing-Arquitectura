import videoSrc from "../public/Interior_house.mp4";

export default function FinalVideo() {
  return (
    <video autoPlay loop muted height="400px">
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}
