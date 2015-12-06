(function() {
  'use strict';

  $(document).ready(function() {
    $(".chosen-select").chosen({disable_search_threshold: 10});

    $('#databases').DataTable();
  });

})();
