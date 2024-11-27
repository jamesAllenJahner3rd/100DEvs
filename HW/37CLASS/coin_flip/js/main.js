console.log("js started");
document.getElementById('flipButton').addEventListener("click", flipCoin);

async function flipCoin() {
    console.log("clicked");
   try {
        const res = await fetch("/flip");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

    const data = await res.json();
        document.getElementById("upSide").textContent = data.side;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("upSide").textContent = 'Error occurred!';
    }
}