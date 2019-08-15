$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 360) {
      $(".card-header").addClass("sticky");
    } else {
      $(".card-header").removeClass("sticky");
    }
  });

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

  $("#overordnedeaktoerer-tabel").DataTable({
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
    scrollX: false,
    order: [[1, "asc"]],
    columnDefs: [{ orderable: false, targets: 0 }]
  });

  $("#magasinenhed-tabel-1").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false,
    order: [[1, "asc"]],
    columnDefs: [{ orderable: false, targets: 0 }]
  });

  $("#magasinenhed-tabel-2").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false,
    order: [[1, "asc"]],
    columnDefs: [{ orderable: false, targets: 0 }]
  });

  $("#tilknyt-underordnede").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false,
    order: [[1, "asc"]],
    columnDefs: [{ orderable: false, targets: 0 }]
  });

  $("#tilknyt-overordnede").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false
  });

  $("#arkiveringsversion-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#hif-tabel-1").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#hif-tabel-2").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#hif-modal-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true,
    rowReorder: {
      update: false
    },
    columnDefs: [
      {
        visible: false,
        targets: 0
      }
    ]
  });

  $("#rif-tabel-1").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#rif-tabel-2").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#fif-tabel-1").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#fif-tabel-2").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: true
  });

  $("#tilknyteks-tabel").DataTable({
    paging: false,
    info: false,
    searching: false,
    lengthChange: false,
    responsive: true,
    scrollX: false,
    order: [[1, "asc"]],
    columnDefs: [{ orderable: false, targets: 0 }]
  });

  $.each($.fn.dataTable.tables(true), function() {
    $(this)
      .DataTable()
      .columns.adjust()
      .draw();
  });

  $("#heeksemplar-tabel tr, #arkiveringsversion-tabel tr").on(
    "click",
    function() {
      if ($(this).hasClass("selected")) {
        $(this)
          .find("td .open-icon")
          .show();
        $(this)
          .find("td .close-icon")
          .hide();
        $(this).removeClass("selected");
      } else {
        $(this)
          .addClass("selected")
          .siblings()
          .removeClass("selected");
        $(this)
          .find("td .open-icon")
          .hide();
        $(this)
          .find("td .close-icon")
          .show();
        $(this)
          .siblings()
          .find("td .open-icon")
          .show();
        $(this)
          .siblings()
          .find("td .close-icon")
          .hide();
      }
    }
  );

  // Change default placeholder text for search field in table
  $(".dataTables_filter input").attr("placeholder", "Filtrér");

  // Adjust columns in tables when changing tabs
  $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
    $.fn.dataTable
      .tables({
        visible: true,
        api: true
      })
      .columns.adjust();
  });

  // Enable / Disable edit mode
  $(".edit").on("click", function() {
    $(".readonly").hide();
    $(".write").show();
    $.fn.dataTable
      .tables({
        visible: true,
        api: true
      })
      .columns.adjust();
  });

  $(".save").on("click", function() {
    $(".readonly").show();
    $(".write").hide();
    $.fn.dataTable
      .tables({
        visible: true,
        api: true
      })
      .columns.adjust();
  });

  // Konserveres
  $('input[name="radiokonserver"]').on("click", function() {
    if ($(this).val() == "option1") {
      $("#konserver").show();
    } else {
      $("#konserver").hide();
    }
  });

  // Change shown boxes based on value selected in dropdown
  $("#type")
    .change(function() {
      $(this)
        .find("option:selected")
        .each(function() {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".box")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".box").hide();
          }
        });
    })
    .change();

  // Removes row in table
  $(".delete").on("click", function() {
    $(this)
      .parents("tr")
      .remove();
  });

  $(".collapse").on("shown.bs.collapse", function() {
    $.each($.fn.dataTable.tables(true), function() {
      $(this)
        .DataTable()
        .columns.adjust()
        .draw();
    });
  });

  $(".collapse").on("show.bs.collapse", function() {
    $(".collapse.show").each(function() {
      $(this).collapse("hide");
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

  $(".addrow-1").click(function() {
    $("#andenarkivalie-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last td", this), function() {
        tds += "<td>" + $(this).html() + "</td>";
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
        $(".readonly").hide();
        $(".write").show();
        $.fn.dataTable
          .tables({
            visible: true,
            api: true
          })
          .columns.adjust();
      } else {
        $(this).append(tds);
        $.fn.dataTable
          .tables({
            visible: true,
            api: true
          })
          .columns.adjust();
      }
    });
  });

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

  $(".addrow-3").click(function() {
    $("#navne-tabel").each(function() {
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

  $(".addrow-4").click(function() {
    $("#henavne-tabel").each(function() {
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

  $(".addrow-5").click(function() {
    $("#tider-tabel").each(function() {
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

  $(".addrow-6").click(function() {
    $("#referencer-tabel").each(function() {
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

  $(".addrow-7").click(function() {
    $("#arkiveringsversion-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last", this), function() {
        tds += $(this).html();
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
      } else {
        $(this).append(tds);
      }
    });
  });

  $(".addrow-8").click(function() {
    $("#hif-modal-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last", this), function() {
        tds += $(this).html();
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
      } else {
        $(this).append(tds);
      }
    });
  });

  $(".addrow-9").click(function() {
    var getRow = $("#hif-modal-tabel tbody tr:first-child").html();
    console.log(getRow);
    $("#hif-modal-tabel tbody").append("<tr>" + getRow + "</tr>");
  });

  $("#addEks").click(function() {
    $("#heeksemplar-tabel").each(function() {
      var tds = "<tr>";
      jQuery.each($("tr:last", this), function() {
        tds += $(this).html();
      });
      tds += "</tr>";
      if ($("tbody", this).length > 0) {
        $("tbody", this).append(tds);
      } else {
        $(this).append(tds);
      }
    });
  });

  $(".breadcrumb").hide();

  $("#carousel").on("slide.bs.carousel", function() {
    var currentIndex = $(".carousel-item.active").index() + 1;

    var $one = $(
      "<li class='breadcrumb-item' data-slide-to='0' data-target='#carousel'><a href='#'>&laquo; Kredsaflytningssystem</a></li>"
    );
    var $two = $(
      "<li class='breadcrumb-item' data-slide-to='1' data-target='#carousel'><a href='#'>HIF (Journalnr)</a></li>"
    );

    if (currentIndex === 1) {
      $(".breadcrumb").show();
      $(".breadcrumb").append($one);
    }

    if (currentIndex === 2) {
      $(".breadcrumb").append($two);
    }

    if (currentIndex === 3) {
      $(".breadcrumb").html("");
      $(".breadcrumb").hide();
    }
  });
});

$("#tilknytDIF").on("hidden.bs.modal", function(e) {
  $(".breadcrumb").html("");
  $(".breadcrumb").hide();
});

$("#tilfoejHIF").on("hidden.bs.modal", function(e) {
  $(".breadcrumb").html("");
  $(".breadcrumb").hide();
});
