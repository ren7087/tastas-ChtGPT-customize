import { NextRequest } from "next/server";
import { OpenAIStream } from "../../../utils/OpenAIStream";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { prompt, wordCount } = (await req.json()) as {
    prompt?: string;
    wordCount?: number;
  };

  const whoAreYou = "You are an excellent Writer.";
  const whatYouWantDo =
    "あなたはフリマアプリで出品するにあたって、よく売れる文章を考えています";

  const aboutExampleSentense = "please explain just like this example";

  const example = `大注目のプレイステーション5!一つでも欲しいと思わせる最新ハイスペックゲーム機です。驚異的なグラフィック性能と高速処理が特徴で、ゲーム体験がさらに進化すること間違いなしです。ひとつ持っているだけで、友達や家族ともっと盛り上がること間違いなしです！
	Sonyが自信を持ってお届けするPlayStation5のストーリーをお届けします。開発チームと共に長年に渡って研究を重ね、グラフィックや音響、操作性等、全ての面で改善を加えました。その結果、今までにない最新テクノロジーが、PlayStation5に詰まっています。誰しもが夢見る超高性能ゲーム機、それがプレイステーション5です！
	あなたもPlayStation5を手にして、理想の世界に飛び込みませんか？映像体験がさらに広がる未来を、今ここで手に入れてください。
	※年齢制限がございますので、ご購入前にご確認ください。`;

  const note = `NOTES:
  * Please make the text as appealing as possible for selling on a free market app.
  * as detailed as possible
  * Please do not include anything other than JSON in your answer.
	* Please Create a passage within ${wordCount} characters.
  * Response must be Japanese`;

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content:
          whoAreYou + whatYouWantDo + aboutExampleSentense + example + note,
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
