fs.appendFile('./2.txt', '\n123', 'utf-8', err => {
    if (err) return console.log('追加文件失败！' + err.message)
    console.log('追加文件成功！')
})