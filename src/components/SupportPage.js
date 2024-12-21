import React from "react";

const SupportPage = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center", background: "#fff" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Get in touch with us.</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "40px" }}>We're here to assist you.</p>
      <form style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="business-name" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Business Name*
          </label>
          <input
            type="text"
            id="business-name"
            placeholder="Search for your business listing"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="phone" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
              Phone Number*
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+91 | 9851"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g xyz@gmail.com"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Message*
          </label>
          <textarea
            id="message"
            placeholder="Write here your message..."
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "15px",
            backgroundColor: "#f56a6a",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Leave us a Message →
        </button>
      </form>
    </div>
  );
};

export default SupportPage;
