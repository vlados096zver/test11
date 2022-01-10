
$(document).ready(function() {

  
  function departmentSelect() {
      $('select[name="department"]').select2({
        placeholder: $(this).data('placeholder'),
        selectionCssClass: 'department__selection',
        dropdownCssClass: 'department__dropdown',
        language: "uk"
      }).on('select2:open', function(e) {
         if (Modernizr.touch) {
          $('.select2-search__field').prop('focus', false);
        }
        let textPlaceholder = $(this).data('search');
        $(this).data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', textPlaceholder);
      }).on('change', function(e){
       $('label[id=department-error]').remove();
       let place = $(this).parent('.block__box').find('.select2-selection__rendered').text();
       console.log(place);
       $('#reg__block--place').text(place);
      });

    }
  

  departmentSelect();



});

