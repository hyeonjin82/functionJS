var me = 'hyeonjin lee';
function greetMe(){
    console.log('Hello, ' + me + '!');
}
me = "just jin";
greetMe();


//--------------------------------------
function sendRequest() {
    var requestID = '123';
    $.ajax({
        url: 'myUrl',
        success: function(response){
            alert('Request ' + requestID + ' returned');
        }
    });
}
