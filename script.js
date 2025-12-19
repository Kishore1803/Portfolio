document
  .getElementById("contactForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // 👇 read server response
      const result = await res.json();

      if (!res.ok) {
        // ❌ show SERVER error message
        alert(result.message || "Server error");
        return;
      }

      // ✅ show SERVER success message
      alert(result.message);
      e.target.reset();

    } catch (error) {
      alert("Server not running or network error");
    }
  });
