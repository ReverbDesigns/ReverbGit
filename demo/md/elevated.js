var dialogOpener = $('.dialogOpener');
var dialog = $('#dialog');
var drawerOpener = $('#drawerOpener');
var drawer = $('#drawer');

dialogOpener.on('click', function() {
    dialog.removeClass('hidden');
});

dialog.on('click', function() {
    dialog.addClass('hidden');
})

drawerOpener.on('click', function() {
    drawer.toggleClass('hidden');
});

drawer.on('click', function() {
    drawer.addClass('hidden');
})