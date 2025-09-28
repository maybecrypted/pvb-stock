import fetch from "node-fetch";

export default async function handler(req, res) {
    try {
        const response = await fetch("https://plantsvsbrainrot.com/api/seed-shop.php");
        if (!response.ok) throw new Error("Failed to fetch external API");
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch seed shop data" });
    }
}
