$(document).ready(function() {
  // Makes the header sticky when reaching 360 pixels down on the page
  $(window).scroll(function() {
    if ($(this).scrollTop() > 360) {
      $(".card-header").addClass("sticky");
    } else {
      $(".card-header").removeClass("sticky");
    }
  });

  // Make the entire row in a table clickable
  $(".clickable-row").on("click", function() {
    window.location = $(this).data("href");
  });

  $(".clickable-checkbox").on("click", function() {
    $(this)
      .find("input[type=checkbox]")
      .prop(
        "checked",
        !$(this)
          .find("input[type=checkbox]")
          .prop("checked")
      );
  });

  // Toogle additional checkboxes when #maaudlaanes is activated
  $(".maaudlaanes").on("change", function() {
    $(".add-checkboxes").toggle();
  });

  $("#closetask").on("click", function() {
    $(".btn.readonly").hide();
    $(".btn.opentask").show();
  });

  $(".opentask").on("click", function() {
    $(".btn.readonly").show();
    $(".btn.opentask").hide();
  });

  // Change look of datatables sorting arrows
  var spanSorting = '<span class="arrow-hack sort">&nbsp;&nbsp;&nbsp;</span>',
    spanAsc = '<span class="arrow-hack asc">&nbsp;&nbsp;&nbsp;</span>',
    spanDesc = '<span class="arrow-hack desc">&nbsp;&nbsp;&nbsp;</span>';

  $(".sorting").on("click", "th", function() {
    $(".sorting thead th").each(function(i, th) {
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

  // Activate sorting
  $(".sorting th")
    .first()
    .click()
    .click();

  // Make tabs open directly on target page
  var hash = window.location.hash;
  if (hash != "") $('#tabs a[href="' + hash + '"]').tab("show");
  else $("#tabs a:first").tab("show");

  //Activate datatables
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

  $("#navne-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#overordnedeaktoerer").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#underordnedeaktoerer-tabel").DataTable({
    paging: false,
    info: false,
    searching: true,
    lengthChange: false,
    responsive: true,
    scrollX: true,
    language: {
      search: "",
      zeroRecords: "Din filtrering gav ingen resultater"
    }
  });

  $("#heuristiskeenheder-tabel").DataTable({
    paging: false,
    info: false,
    searching: true,
    lengthChange: false,
    responsive: true,
    scrollX: true,
    language: {
      search: "",
      zeroRecords: "Din filtrering gav ingen resultater"
    }
  });

  $("#proveniensnr-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#andenarkivalie-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#henvisning-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#henavne-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#tider-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#arkivskaber-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#referencer-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#heeksemplar-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#magasinenhed-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  // Change default placeholder text for search field in table
  $(".dataTables_filter input").attr("placeholder", "Filtrér");

  // Adjust columns in tables when changing tabs
  $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  // Enable / Disable edit mode
  $(".edit").on("click", function() {
    $(".readonly").hide();
    $(".write").show();
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  $(".save").on("click", function() {
    $(".readonly").show();
    $(".write").hide();
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  // Change what the user sees when toggling between paper and it component
  $('[name="typeRadio"]').on("change", function() {
    if ($(this).is(":checked") && $(this).attr("id") == "type1") {
      $(".itkomponent").show();
      $(".papir").hide();
    } else {
      $(".itkomponent").hide();
      $(".papir").show();
    }
  });

  // Removes row in table
  $(".delete").on("click", function() {
    $(this)
      .parents("tr")
      .remove();
  });

  // Adjust column when opening an accordion item
  $("#accordionExample").on("shown.bs.collapse", function() {
    $.each($.fn.dataTable.tables(true), function() {
      $(this)
        .DataTable()
        .columns.adjust()
        .draw();
    });
  });

  $(".modal").on("shown.bs.modal", function() {
    $.each($.fn.dataTable.tables(true), function() {
      $(this)
        .DataTable()
        .columns.adjust()
        .draw();
    });
  });

  // Adds row in anden akavalie-tabel
  $(".addrow-1").click(function() {
    $("#andenarkivalie-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last td", this), function() {
        tds += "<td>" + $(this).html() + "</td>";
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
      } else {
        $(this).append(tds);
      }
    });
  });

  // Adds row in henvisning-tabel
  $(".addrow-2").click(function() {
    $("#henvisning-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last td", this), function() {
        tds += "<td>" + $(this).html() + "</td>";
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
      } else {
        $(this).append(tds);
      }
    });
  });
});
