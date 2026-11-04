import cors from "cors";
import express from "express";
import { createGuidePlan, sampleOpportunities, type GuideRequest } from "@human-frontier/shared";

const app = express();
const port = Number(process.env.PORT ?? 3000);
app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "human-frontier-api" });
});

app.get("/opportunities", (_request, response) => {
  response.json({ items: sampleOpportunities });
});

app.post("/guide/plan", (request, response) => {
  const body = request.body as Partial<GuideRequest>;
  if (typeof body.interest !== "string" || body.interest.length > 80 ||
      typeof body.availableMinutes !== "number" || !Number.isFinite(body.availableMinutes)) {
    response.status(400).json({ error: "Provide an interest (up to 80 characters) and a finite availableMinutes number." });
    return;
  }
  response.json(createGuidePlan({ interest: body.interest, availableMinutes: body.availableMinutes }));
});

// Demo-only: accepts a minimal event but intentionally does not persist or log it.
app.post("/events", (request, response) => {
  const body = request.body as { type?: unknown };
  if (typeof body.type !== "string" || body.type.length > 40) {
    response.status(400).json({ error: "Provide a short event type." });
    return;
  }
  response.status(202).json({ accepted: true, stored: false });
});

app.listen(port, () => {
  console.log(`Human Frontier API listening on http://localhost:${port}`);
});
