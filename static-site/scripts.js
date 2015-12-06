(function() {
  'use strict';

  $(document).ready(function() {
    $(".chosen-select").chosen({
      disable_search_threshold: 10,
      no_results_text: "Oops, nothing found!",
      width: "100%" // https://github.com/harvesthq/chosen/issues/795
    });

    $('#databasesList').DataTable({
      "pagingType": "full_numbers",
      "order": [],
      "columnDefs": [ {
        "targets"  : [0, 3],
        "orderable": false
      }],
      "dom": '<"dttoolbar">frtip'
    });

    $("div.dttoolbar").html('<button disabled="disabled" class="btn btn-sm btn-danger">Delete All</button>').css({
      "float": "left"
    });

    $('#usersList').DataTable({
      "pagingType": "full_numbers",
      "order": [],
      "columnDefs": [ {
        "targets"  : [0, 6],
        "orderable": false
      }],
      "dom": '<"dttoolbar">frtip'
    });

    $("div.dttoolbar").html('<button disabled="disabled" class="btn btn-sm btn-danger">Delete All</button>').css({
      "float": "left"
    });
  });

})();
