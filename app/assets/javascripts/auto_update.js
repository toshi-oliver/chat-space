$(function() {
  function buildHTML(message){
    if (message.image) {
      var image = `<img src="${message.image}">`;}
    else {
      var image = '';
    }
    var html = `
      <div class="main__body__messages" data-id="${message.id}">
        <div class="main__body__user-name">
          ${message.user_name}
        </div>
        <div class="main__body__posted-time">
          ${message.created_at}
        </div>
        <div class="main__body__content">
          <div class="content__text">
            ${message.content}
          </div>
          <div class="content__image">
            ${image}
          </div>
        </div>
      </div>
    `
    return html;
  };

  function buildhtml(input){
    $('.main__body').append(input)
    $('#new_message')[0].reset()
  };

  function scroll(){
    $('.main__body').animate({scrollTop:$('.main__body')[0].scrollHeight}, 'swing');
  };

  setInterval(update, 5000);

  function update() {
    var MessageId = $('.main__body__messages:last').data('id');
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {id: MessageId},
      dataType: 'json'
    })
    .done(function(data) {
      if (data.length !== 0){
        data.forEach(function(message){
          var html = buildHTML(message);
          buildhtml(html);
          scroll();
        })
      }
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    })
  };
});
