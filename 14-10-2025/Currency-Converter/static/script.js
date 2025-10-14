document.getElementById("convertBtn").addEventListener("click", async () => {
  let amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount greater than 0");
    return;
  }

  try {
    const res = await fetch("/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, from, to })
    });

    const data = await res.json();
    console.log(data); // Debug: check backend response

    if (res.ok && data.converted !== undefined) {
      document.getElementById("result").innerText = 
        `${amount} ${from} = ${data.converted} ${to}`;
    } else {
      // If error is an object, stringify it
      let errMsg = data.error;
      if (typeof errMsg === 'object') {
        errMsg = JSON.stringify(errMsg);
      }
      document.getElementById("result").innerText = `Error: ${errMsg || 'Conversion failed'}`;
    }
  } catch (err) {
    document.getElementById("result").innerText = `Error: ${err.message}`;
  }
});
