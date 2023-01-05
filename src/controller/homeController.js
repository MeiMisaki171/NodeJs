import connection from '../configs/connectDB'

let getHomepage = (req, res) => {

    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log('check mySQL');
            console.log(results); // results contains rows returned by server
            data = results.map((row) => { return row })
            return res.render('index.ejs', { dataUser: JSON.stringify(data) });
        })

}

module.exports = {
    getHomepage
}