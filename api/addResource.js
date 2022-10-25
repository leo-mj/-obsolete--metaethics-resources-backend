import connectToDB from "./utils/connectToDB";

export default async function addResource(req, res) {
    const {title, url, description} = req.body;
    const supabase = connectToDB();
    const {data, error} = await supabase
        .from('resources')
        .insert({title: title, url: url, description: description})
        .select();
    if (error) {
        console.error(error);
        return res.status(400).send(error);
    }
    return res.status(200).send(data);
}