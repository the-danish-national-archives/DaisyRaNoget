$(document).ready(function() {
  $("#search").DataTable({
    paging: false,
    search: false,
    info: false,
    searching: false
  });
  $(".clickable-row").click(function() {
    window.location = $(this).data("href");
  });
  var spanSorting =
      '<span class="arrow-hack sort">&nbsp;&nbsp;&nbsp;&nbsp;</span>',
    spanAsc = '<span class="arrow-hack asc">&nbsp;&nbsp;&nbsp;&nbsp;</span>',
    spanDesc = '<span class="arrow-hack desc">&nbsp;&nbsp;&nbsp;&nbsp;</span>';

  $("#search").on("click", "th", function() {
    $("#search thead th").each(function(i, th) {
      $(th)
        .find(".arrow-hack")
        .remove();
      var html = $(th).html(),
        cls = $(th).attr("class");
      switch (cls) {
        case "sorting_asc":
          $(th).html(html + spanAsc);
          break;
        case "sorting_desc":
          $(th).html(html + spanDesc);
          break;
        default:
          $(th).html(html + spanSorting);
          break;
      }
    });
  });
  $("#search th")
    .first()
    .click()
    .click();
  var hash = window.location.hash;

  if (hash != "") $('#tabs a[href="' + hash + '"]').tab("show");
  else $("#tabs a:first").tab("show");
});
