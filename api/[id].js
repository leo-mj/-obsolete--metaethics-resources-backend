import connectToDB from "./utils/connectToDB";

export default async function getSingleResource(req, res) {
    const {id} = req.query;
    const supabase = connectToDB();
    const {data, error} = await supabase
        .from('resources')
        .select()
        .eq('id', id);
    if (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send(data);
}