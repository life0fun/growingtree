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

// datetimepicker
var datetimepicker = function (id) {
  $("#" + id).datetimepicker();
}

var datetimepickerByThing = function (thingclz, id) {
  $("." + thingclz + " #" + id).datetimepicker();
}
