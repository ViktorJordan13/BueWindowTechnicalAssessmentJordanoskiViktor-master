const db = require('../util/database')

module.exports = class BrandRating{

    constructor(id, name, country, rating ){
        this.id = id;
        this.name = name;
        this.country = country;
        this.rating = rating;
              
    }

    static fetchAll(){

        return db.execute('SELECT * FROM brandsratings');
        
    }

    static post(name, country, rating){

        return db.execute('INSERT INTO brandsratings (name, country, rating) VALUES (?, ?, ?)', [name, country, rating]);
    }

    static update(id, name, country, rating){

        return db.execute('UPDATE brandsratings SET name = ?, country = ?, rating = ? WHERE id = ?', [name, country, rating, id]);
    }

    static delete(id){

        return db.execute('DELETE FROM brandsratings WHERE id = ?', [id]);
    }

    static sort(country){

        return db.execute('SELECT * FROM brandsratings WHERE country = ? ORDER BY rating DESC', [country]);
        
    }


};