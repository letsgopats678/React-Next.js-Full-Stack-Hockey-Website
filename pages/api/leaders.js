

export default async function handler(req, res) {
    try {
      const response = await fetch("https://api-web.nhle.com/v1/skater-stats-leaders/20252026/2?categories=goals&limit=20");
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch standings" });
    }
  }