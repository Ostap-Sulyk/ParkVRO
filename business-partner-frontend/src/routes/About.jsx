const About = () => {

  return (
    <div style={{
      position: "relative",
      height: "100vh",
    }}>
      <img src="src\pictures\about2.jpg" alt="Background" style={{
        position: "absolute",
        top: 100,
        left: 0,
        width: "100%",
        height: "80%",
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
          <h1>About Us Page</h1>
          <br />
          We reimagine the way the world moves for the better<br />
          Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning.
          It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get.
          For all the ways you want to earn. Across the entire world. In real-time. At the incredible speed of now.
        </p>
      </div>
    </div>
  );
};


export default About;