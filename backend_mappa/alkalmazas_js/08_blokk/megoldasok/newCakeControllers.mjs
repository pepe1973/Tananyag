import Cake from '../../models/Cake.mjs';

export const getNewCake = (req, res) => {
    try {
        res.statusCode = 200;
        return res.render('cakes/new-cake.ejs');
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const postNewCake = async (req, res) => {
    try {
        const { nev, ar, leiras, kepek } = req.body;

        const newCake = new Cake({ nev, ar, leiras, kepek });
        await newCake.save();

        res.statusCode = 201;
        return res.json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba!' + error.message });
    }
};
