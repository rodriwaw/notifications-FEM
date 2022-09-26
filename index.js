function markAsRead(){
    try{
        if(document.querySelectorAll('.item.unread').length > 0){
            Array.from(document.querySelectorAll('.item.unread')).forEach(
                (item) => item.classList.remove('unread')
            )
            Array.from(document.querySelectorAll('.not-new')).forEach(
                (item) => item.innerHTML= ''
            )
            document.getElementById('not-number').innerHTML= '0'
            console.log('cleaned');
            return
        }
        console.log('already cleaned')
    }
    catch (ex){
        console.error('Something went wrong... ' + ex)
    }
}