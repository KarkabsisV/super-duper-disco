// jquery 
s2JSA.onclick = () => {
    $.post('http://localhost:4000/comments', {
        "id": 4,
        "body": "some comment v4",
        "postId": 1
    }, data => {
        $('#hello2').html(data.body);
    }, 'json')
}