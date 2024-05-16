import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>    
    <div>
      <div style = {{
        display :"flex",
        marginBottom:30
      }}>
      <img style = {{
        borderRadius:"50%"
      }}
      src ="https://yt3.googleusercontent.com/OoVuuL6C86aY1WQVxMouogyZcvhsMty_0C9k1KTQi303O-SlyivduPeozs9SvApxj6nwjq9EpA=s176-c-k-c0x00ffffff-no-rj"
           alt = "Ashok it" />
      <div>
        <h1>Ashok IT</h1>
        <ul>
            <li>@ashokit</li>
            <li>79.9k subscribers</li>
            <li>1.1k videos</li>   
        </ul>
      </div>      
    </div>
    <div>
            <button
              style={{
                padding: "8px 20px",
                border: "none",
                borderRadius: "15px",
                backgroundColor: "black",
                color: "White",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Subscribe
            </button>
            <button
              style={{
                padding: "8px 20px",
                border: "1px solid grey",
                borderRadius: "20px",
                fontWeight: "600",
                backgroundColor: "white",
              }}
            >
              Join
            </button>
          </div> 
      </div>
      <hr />
      <section
        style={{
          marginTop: "50px",
        }}
      >
        <h3>For You</h3>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        > 
        <article>
            <img
              style={{
                borderRadius: "15px",
              }}
              src="https://i.ytimg.com/vi/h64A9JT3-9o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDldMrtJ9lbYBgG6VlkJC5wRXS1Qg"
              alt="Linux Introduction"
            />
            <h5>Linux Introduction | Linux Virtual Machine Setup</h5>
            <span>1K views .</span> <span> 18 hours ago </span>
          </article>

          <article>
            <img
              style={{
                borderRadius: "15px",
              }}
              src="https://i.ytimg.com/vi/AHTsJ2UtLlo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMQwrn_u8AOAag-bTLXzaoFrQp3A"
              alt="Java Design Patterns Course Launch"
            />
            <h5>Java Design Patterns Course Launch</h5>
            <span>1.1K views .</span> <span> 1week ago </span>
          </article>

          <article>
            <img
              style={{
                borderRadius: "15px",
              }}
              src="https://i.ytimg.com/vi/icsxikOzfVI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm7h6KHrTloxDzWsToCIXglm_o0w"
              alt="DevOps with AWS Cloud"
            />
            <h5>DevOps with AWS Cloud</h5>
            <span>1.7K views .</span> <span> 3 weeks ago </span>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
