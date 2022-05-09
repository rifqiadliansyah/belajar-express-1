
let users = [
    { id: 1, nama: "Rifqi Adliansyah", email: "rifqiadliansyahx@gmail.com" },
    { id: 2, nama: "Maria calista", email: "calista@gmail.com" }
]



module.exports = {

    getdata: (req, res) => {

    res.render('pages/users/index',{users:users})

    }              ,

    store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            message: "data berhasil di simpan",
            method: req.method,
            url: req.url
        })
    }                  ,
    update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if (user.id == id) {
                user.id = id
                user.nama = req.body.nama
                user.email = req.body.email

                return user
            }
        })
        res.json({
            status: true,
            data: users,
            message: "data user  berhasil di edit",
            method: req.method,
            url: req.url
        })
    } ,
    delete: (req, res) => {
        let id = req.params.id
        users = users.filter(user => user.id != id)
        res.json({
            status: true,
            data: users,
            message: "data user  berhasil di hapus",
            method: req.method,
            url: req.url
        })
    } 
}