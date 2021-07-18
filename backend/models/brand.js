const db = require('../util/database')

module.exports = class Brand{

    constructor(id,  name, description){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    static fetchAll(){

        return db.execute('SELECT * FROM brands');

    }

    static post(name, description){

        return db.execute('INSERT INTO brands (name, description) VALUES (?, ?)', [name, description]);
    }

    static update(id, name, description){

        return db.execute('UPDATE brands SET name = ?,  description = ? WHERE id = ?', [name, description, id]);
    }

    static delete(id){

        return db.execute('DELETE FROM brands WHERE id = ?', [id]);
    }
};