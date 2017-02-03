;$(function(){
    
var url = 'http://192.168.0.105/';
    $.ajax({
        type:'get',
        url: url+'mv',
        success:function(result){
            var data = JSON.parse(result);
            var html='';
            for(var i=0;i<data.video.length;i++){
              html+= '<li class="warp-item">'+
                    '<video controls poster="/images/wudao.jpg">'+
                     '<source src="./mv/'+data.video[i]+'" type="video/mp4">您的浏览器不支持 video 标签。'+
                     '</video>'+
                     '<div class="video-name">'+data.video[i].split('.')[0]+'</div>'
                    '</li>'
            }
            
             $('.warp').append(html);
          

        },
        error:function(result){
          alert(result)
        }
    })
})