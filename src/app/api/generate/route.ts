import OpenAI from "openai";

interface GenerateRequest {
  jd: string;
  details: string;
}

interface GenerateResponse {
  email: string;
}

interface ErrorResponse {
  error: string;
}

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const body: GenerateRequest = await req.json();
const { jd, details } = body;

    if (!jd || !details) {
      return Response.json(
        { error: "Missing input" },
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are an expert career assistant.
Write professional, concise, and impressive cold emails to recruiters.
Keep tone confident and tailored to the job description.
          `,
        },
        {
          role: "user",
          content: `
Job Description:
${jd}

Candidate Details:
${details}

Write a short email to recruiter (150-200 words max).
          `,
        },
      ],
    });

    return Response.json({
      email: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to generate email" },
      { status: 500 }
    );
  }
}