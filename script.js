$('#tab-nav').on('click','li',function(e){

    let li = e.currentTarget;
    let aLi = $(li);
    let index = aLi.index();
    aLi.addClass('active');
    aLi.siblings('.active').removeClass('active');
    $('#tab-panes>li').eq(index).addClass('active');
    $('#tab-panes>li').eq(index).siblings('.active').removeClass('active');

})