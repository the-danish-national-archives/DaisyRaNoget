$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 360) {
      $(".card-header").addClass("sticky");
    } else {
      $(".card-header").removeClass("sticky");
    }
  });

  // clickable rows
  $(".clickable-row").click(function() {
    window.location = $(this).data("href");
  });

  $(".clickable-checkbox").click(function() {
    $(this)
      .find("input[type=checkbox]")
      .prop(
        "checked",
        !$(this)
          .find("input[type=checkbox]")
          .prop("checked")
      );
  });
  // Move datatables sorting arrows
  var spanSorting = '<span class="arrow-hack sort">&nbsp;&nbsp;&nbsp;</span>',
    spanAsc = '<span class="arrow-hack asc">&nbsp;&nbsp;&nbsp;</span>',
    spanDesc = '<span class="arrow-hack desc">&nbsp;&nbsp;&nbsp;</span>';

  $(".tabledisplay, #search").on("click", "th", function() {
    $(".tabledisplay thead th, #search thead th").each(function(i, th) {
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

  $(".tabledisplay th, #search th")
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

  $("#search").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#eksemplar-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#navne").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#heuristiskeenhed-modal").draggable({
    handle: ".modal-header"
  });

  $(".dataTables_filter input").attr("placeholder", "Filtrér");

  $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  // Enable / Disable edit mode
  $(".edit").on("click", function() {
    $(".readonly").hide();
    $(".write").show();
  });

  $(".save").on("click", function() {
    $(".readonly").show();
    $(".write").hide();
  });
});
