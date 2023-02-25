const Help = () => {

    return (
        <div style={{ 
          position: "relative",
          height: "150vh",
        }}>
          <img src="src\pictures\help.jpg" alt="Background" style={{ 
            position: "absolute",
            top: 100,
            left: 0,
            width: "100%",
            height: "40%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.8,
          }} />
          <div style={{ 
            position: "absolute",
            top: "30%",
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
              <h1>Welcome to ParkVRO Support! <br />
              How can we help?</h1>
              </p>
              <br />

              <p style={{ 
              fontSize: "20px",
              marginBottom: "20px",
              color: "#000000",
            }}>
              Business Account questions?<br /> please call: +10101010101 <br /><br />
              User Account questions?<br /> please call: +10101010101 <br /><br />
              Payments and other questions?<br /> please call: +10101001107 <br />
              </p>

            
            
          </div>
        </div>
      );
      };
    
export default Help;