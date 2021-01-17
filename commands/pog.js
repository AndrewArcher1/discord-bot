module.exports = {

    name: 'pog',
    descripton: "pog picture",
    execute(message, args){
        const attach = 'https://res.cloudinary.com/teepublic/image/private/s--KSQLIYg5--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1487247709/production/designs/1227728_1.jpg'
        message.channel.send( attach);
    }
}