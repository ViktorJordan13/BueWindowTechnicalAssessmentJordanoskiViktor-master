const db = require('../util/database')

module.exports = class BrandRating{

    constructor(name, country, rating ){
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

    static update(name, country, rating){

        return db.execute('UPDATE brandsratings SET name = ?, country = ?, rating = ? WHERE name = ? AND country = ?', [name, country, rating, name, country]);
    }

    static delete(name, country){

        return db.execute('DELETE FROM brandsratings WHERE name = ? AND country = ?', [name, country]);
    }

    static sort(country){

        return db.execute('SELECT * FROM brandsratings WhHERE country = ? ORDER BY rating DESC', [country]);
        
    }


};