export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Nick's Man & Van Service</h1>
      <p>Serving Nottingham & The Midlands 🚚 - Fast, Friendly & Reliable</p>
      <a
        href="tel:07940798813"
        style={{
          backgroundColor: "#00e0b8",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          display: "inline-block",
          margin: "1rem 0",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Call Now: 07940 798 813
      </a>

      {/* Offer Banner */}
      <div
        style={{
          backgroundColor: "#ffcccc",
          padding: "0.5rem",
          borderRadius: "6px",
          fontWeight: "bold",
          marginTop: "1rem",
        }}
      >
        🚨 Intro offer: First 10 bookings get £5 off!
      </div>

      {/* Why Choose Me */}
      <section style={{ marginTop: "3rem" }}>
        <h2>💡 Why Choose Me?</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>✔️ Reliable, always on time</li>
          <li>✔️ Friendly, can-do attitude</li>
          <li>✔️ Clean and spacious van</li>
          <li>✔️ Affordable at just £20/hour</li>
          <li>✔️ Available 7 days a week</li>
        </ul>
      </section>

      {/* What I Offer */}
      <section style={{ marginTop: "3rem" }}>
        <h2>📦 What I Offer</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🚚 House Moves</li>
          <li>🏠 Furniture Pickup & Delivery</li>
          <li>🛍️ eBay/Facebook Marketplace Collections</li>
          <li>♻️ Tip Runs & Clearances</li>
          <li>🎓 Student Moves</li>
          <li>🗺️ Local & Long Distance</li>
        </ul>
      </section>

      {/* My Van & Past Jobs */}
      <section style={{ marginTop: "3rem" }}>
        <h2>🚐 My Van & Past Jobs</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img
              src="/van.jpeg"
              alt="Van Loaded"
              style={{ maxWidth: "300px", borderRadius: "8px" }}
            />
            <p>Fully Loaded</p>
          </div>
          <div>
            <img
              src="/van-back.png"
              alt="Rear View"
              style={{ maxWidth: "300px", borderRadius: "8px" }}
            />
            <p>Rear View - Spacious & Clean</p>
          </div>
        </div>
      </section>

      {/* Who I Am */}
      <section style={{ marginTop: "3rem" }}>
        <h2>👤 Who I Am</h2>
        <img
          src="/nick.jpeg"
          alt="Nick"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            margin: "1rem auto",
          }}
        />
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          I'm Nick, a hardworking local man with a van based in Nottingham. I
          pride myself on showing up on time, treating your stuff with care, and
          offering fair prices. Whether it's one item or a full house move -
          I’ve got you covered.
        </p>
      </section>

      {/* Availability */}
      <section style={{ marginTop: "3rem" }}>
        <h2>📅 Availability</h2>
        <p>
          📆 I usually have availability within 24–48 hours. Weekend and evening
          slots available - just ask!
        </p>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: "3rem" }}>
        <h2>🙋 Frequently Asked Questions</h2>
        <p>
          <strong>❓ Do you help with lifting?</strong>
          <br />
          Yes, I help load and unload.
        </p>
        <p>
          <strong>❓ Do you travel outside Nottingham?</strong>
          <br />
          Yes, including Derby, Leicester, and long-distance.
        </p>
      </section>

      {/* Reviews */}
      <section style={{ marginTop: "3rem" }}>
        <h2>💬 Reviews</h2>
        <blockquote
          style={{
            borderLeft: "4px solid #00e0b8",
            paddingLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          "Nick helped me move from my uni flat to my new place across town.
          Super helpful and professional!" - Sarah D (Beeston).
        </blockquote>
        <blockquote
          style={{
            borderLeft: "4px solid #00e0b8",
            paddingLeft: "1rem",
            marginBottom: "1rem",
          }}
        >
          "Fast, affordable and friendly. Couldn't ask for better." - James T
          (West Bridgford).
        </blockquote>
        <blockquote
          style={{ borderLeft: "4px solid #00e0b8", paddingLeft: "1rem" }}
        >
          "Nick was fantastic helping us clear out our garage. Would 100%
          recommend." - Priya M (Nottingham City).
        </blockquote>
      </section>

      {/* Free Quotes */}
      <section style={{ marginTop: "3rem" }}>
        <h2>📝 Free Quotes</h2>
        <p>
          I offer free quotes on all jobs - no obligation. My standard rate is
          £20/hour, with no hidden fees.
        </p>
      </section>

      {/* Get in Touch */}
      <section
        style={{
          marginTop: "3rem",
          backgroundColor: "#f0f8ff",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        <h2>📞 Get in Touch</h2>
        <p>
          <strong>Call or Text:</strong> 07940 798 813
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=447940798813"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhatsApp
          </a>
          <a
            href="mailto:nicholasstadler1@gmail.com"
            style={{
              backgroundColor: "#34a1eb",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Email Me
          </a>
          <a
            href="tel:07940798813"
            style={{
              backgroundColor: "#00e676",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Call Now
          </a>
        </div>
        <p style={{ marginTop: "1rem" }}>
          Serving: Nottingham, Derby, Leicester, and surrounding areas
        </p>
      </section>
    </div>
  );
}
