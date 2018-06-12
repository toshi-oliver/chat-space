$(function() {
  function buildHTML(message){
    if (message.image) {
      var image = `<img src="${message.image}">`;
    } else {
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
  }

  function buildhtml(input){
    $('.main__body').append(input)
    $('#new_message')[0].reset()
    $('.main__body').animate({scrollTop:$('.main__body')[0].scrollHeight}, 'swing');
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      buildhtml(html);
    })
    .fail(function() {
      alert('メッセージが送信されませんでした');
    })
    return false;
    // 繰り返し処理を止める
  })
})
