const Help = () => {

  return (
    <div style={{
      position: "relative",
      height: "100vh",
    }}>
      <img src="src\pictures\help.jpg" alt="Background" style={{
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
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "20px",
        borderRadius: "0px",
        width: "1000px",
        textAlign: "center",
      }}>
        <h1 className="text-white text-4xl">Welcome to ParkVRO Support!<br />How can we help?</h1>

        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "inline-block",
            width: "300px",
            height: "150px",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px",
            fontSize: "18px",
            color: "white",
          }}>
            <h1>Business Account questions?</h1>
            <p style={{ marginBottom: "10px" }}>please call: +10101010101</p>
          </div>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "inline-block",
            width: "300px",
            height: "150px",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px",
            fontSize: "18px",
            color: "white",
            justifyContent: "center"
          }}>
            <h1>User Account questions?</h1>
            <p style={{ marginBottom: "10px" }}>please call: +10101010101</p>
          </div>
          <div style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "inline-block",
            width: "300px",
            height: "150px",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px",
            fontSize: "18px",
            color: "white"
          }}>
            <h1>Payments and other questions?</h1>
            <p style={{ marginBottom: "10px" }}>please call: +10101001107</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
