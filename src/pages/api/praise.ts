import { NextRequest } from "next/server";
import { OpenAIStream } from "../../../utils/OpenAIStream";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  const whoAreYou = "You are an excellent Writer.";
  const outPutStyle =
    "The output should be a markdown code snippet formatted in the following schema in Japanese";

  const outPutFormat = `
	  {
		  "本文": string,
		  "おすすめポイント": string
	  }
	  `;

  const note = `NOTES:
  * Please Create a passage within 200 characters.
  * Please make the text as appealing as possible for selling on a flea market app.
  * as detailed as possible
  * Please do not include anything other than JSON in your answer.
  * Response must be Japanese`;

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: whoAreYou + outPutStyle + outPutFormat + note,
      },
      { role: "user", content: prompt },
    ],
    temperature: 0.9,
    max_tokens: 300,
    stream: true,
  };
  const stream = await OpenAIStream(payload);

  return new Response(stream);
}
