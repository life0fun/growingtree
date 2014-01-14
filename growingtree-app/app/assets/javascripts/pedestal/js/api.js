// Modal Dialogs

var showModal = function (id) {
  $("#" + id).on('shown', function() {
    $('input:text:visible:first', this).focus();
  });
  $("#" + id).on('hidden', function() {
    $("#" + id).remove();
  });

  $("#" + id).modal('show');
}

var hideModal = function (id) {
  $("#" + id).modal('hide');
}

var toggleModal = function (id) {
  $("#" + id).modal('toggle');
}

//-------------------------------------------------
// datetimepicker
//-------------------------------------------------
var datetimepicker = function (id) {
  $("#" + id).datetimepicker();
}

var datetimepickerByThing = function (thingclz, id) {
  $("." + thingclz + " #" + id).datetimepicker();
}

//-------------------------------------------------
// enable jquery tags inputs
//-------------------------------------------------
var tagsInput = function (id) {
  $("#" +id).tagsInput();
}

var addTag = function(id, tag) {
  $("#" + id).addTag(tag);
}

var removeTag = function(id, tag) {
  $("#" + id).removeTag(tag);
}

var tagExist = function(id, tag) {
  $("#" + id).tagExist(tag);
}