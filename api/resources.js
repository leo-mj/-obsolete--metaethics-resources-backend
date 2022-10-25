import connectToDB from "./utils/connectToDB";

export default async function getAllResources(req, res) {
  const supabase = connectToDB();
  const { data, error } = await supabase
    .from('resources')
    .select();
  if (error) {
    res.status(400).send(error);
  }
  return res.status(200).send(data);
}
