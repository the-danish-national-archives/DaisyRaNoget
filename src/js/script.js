$(document).ready(function() {
  // clickable rows
  $(".clickable-row").click(function() {
    window.location = $(this).data("href");
  });
  // Move datatables sorting arrows
  var spanSorting = '<span class="arrow-hack sort">&nbsp;&nbsp;&nbsp;</span>',
    spanAsc = '<span class="arrow-hack asc">&nbsp;&nbsp;&nbsp;</span>',
    spanDesc = '<span class="arrow-hack desc">&nbsp;&nbsp;&nbsp;</span>';

  $(".tabledisplay").on("click", "th", function() {
    $(".tabledisplay thead th").each(function(i, th) {
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

  $(".tabledisplay th")
    .first()
    .click()
    .click();

  // Make tabs open direcrly on target page
  var hash = window.location.hash;
  if (hash != "") $('#tabs a[href="' + hash + '"]').tab("show");
  else $("#tabs a:first").tab("show");

  //Activate datatables
  $(".tabledisplay").DataTable({
    paging: false,
    info: false,
    searching: true,
    lengthChange: false,
    responsive: true,
    scrollX: true,
    scrollY: 270,
    language: {
      search: ""
    }
  });

  $(".dataTables_filter input").attr("placeholder", "Søg");
});
