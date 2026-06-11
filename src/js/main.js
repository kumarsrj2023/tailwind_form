async function askNpmai(prompt, model = "llama3.2") {
    const res = await fetch("https://npmaiecosystem-load_balancer.hf.space/load_balancer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, model, temperature: 0.5, change: true })
    });
    const data = await res.json(); return data.response;
}
const answer = await askNpmai("Explain LARA in one sentence");
console.log(answer);

