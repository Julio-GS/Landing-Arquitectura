import Video from "./Video";
export default function HeroSection() {
  return (
    <div style={{ position: "relative" }}>
      <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontSize: "3rem",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Creemos soluciones juntos.
      </h1>
      <Video />
    </div>
  );
}
