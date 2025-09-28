export default async function handler(req, res) {
  try {
    const url = `https://plantsvsbrainrot.com/api/seed-shop.php?ts=${Date.now()}`;
    const response = await fetch(url); // built-in fetch in Node 18+
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err); // check logs in Vercel
    res.status(500).json({ error: "Failed to fetch seed shop data" });
  }
}
