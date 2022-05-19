//const { download } = require('express/lib/response');
const File = require('../models/uploadfile')


const downloadfilelink = async (req,res) =>{
    const file = await File.findOne({  uuid: req.params.uuid });
    if(!file) {
        return res.render('download', { error: 'File ni hai'});
    }
    const response = await file.save();
   const filePath = `${__dirname}/../${file.path}`;
   res.download(filePath);
   // res.send('h')
    


}

module.exports = downloadfilelink