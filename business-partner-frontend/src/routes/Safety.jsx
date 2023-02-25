const Safety = () => {
  return (
    <div style={{
      position: "relative",
      height: "100vh",
    }}>
      <img src="src\pictures\safety.jpg" alt="Background" style={{
        position: "absolute",
        top: 100,
        left: 0,
        width: "100%",
        height: "75%",
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.8,
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "20px",
        borderRadius: "0px",
        width: "1000px",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "24px",
          marginBottom: "20px",
          color: "#000000",
        }}>
          <bold><h1>Our commitment to safety</h1></bold>
          <br />

          We want you to move freely, make the most of your time, and be connected to the people and places that matter most to you.
          That’s why we’re committed to safety—from the creation of new standards to the development of technology with the aim of reducing incidents.

        </p>
      </div>
    </div>
  );
};



export default Safety