import supabase from "../../../utils/supabase";

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const { data, error } = await supabase.from("knowledge").select("*");
      if (error) throw error;
      res.status(200).json({ data });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
