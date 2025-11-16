import Cake from '../../models/Cake.mjs';

export const getAllCakesFrontend = async (req, res) => {
    try {
        const cakes = await Cake.find({});
        res.statusCode = 200;
        return res.json({ cakes });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba: ' + error.message });
    }
};
