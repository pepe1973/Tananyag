import Cake from '../../models/Cake.mjs';

export const getAllCakesBackend = async (req, res) => {
    try {
        const cakes = await Cake.find({});
        res.statusCode = 200;
        return res.render('cakes/cakes.ejs', { cakes });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const getOneCakeBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const cake = await Cake.findById({ _id: id });
        res.statusCode = 200;
        return res.render('cakes/cake.ejs', { cake });
    } catch (error) {
        res.statusCode = 404;
        return res.render('404.ejs');
    }
};

export const deleteOneCakeBackend = async (req, res) => {
    try {
        const { id } = req.params;
        const cake = await Cake.findByIdAndDelete({ _id: id });
        res.statusCode = 200;
        return res.json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.statusCode = 500;
        return res.json({ msg: 'Valami hiba történt!' + error.message });
    }
};
