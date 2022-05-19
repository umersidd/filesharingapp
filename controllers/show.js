const File = require('../models/uploadfile')


const show = async (req,res) =>{
    try {
        const { params:{ uuid: id}} = req
        // const id = req.params.uuid
        // console.log(id)
        const file = await File.findOne({  uuid: req.params.uuid });
        // const a = req.params.uuid
        // console.log(a)

        if(!file) {
            return res.render('download', { error: 'File ni hai'});
        } 

        return res.render('download', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` });
        
    } catch (error) {
        return res.render('downlaod', {error: 'msla hai kuch'})
    }
    res.send('h')
    


}

module.exports = show