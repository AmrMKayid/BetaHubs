$(document).ready(function(){

 load_json_data('country');

 function load_json_data(id, parent_id)
 {
  var html_code = '';
  var data = jsonObject;
  
  function editHTML(data){

   html_code += '<option value="">Select '+ id +'</option>';

   $.each(data, function(key, value){
    if(id == 'country')
    {
     if(value.parent_id == '0')
     {
      html_code += '<option value="' + value.id + '">' + value.name + '</option>';
     }
    }
    else
    {
     if(value.parent_id == parent_id)
     {
      html_code += '<option value="' + value.id + '">' + value.name + '</option>';
     }
    }
   });
   $('#'+id).html(html_code);
  }

  editHTML(data);

 }

 $(document).on('change', '#country', function(){
  var country_id = $(this).val();
  if(country_id != '')
  {
   load_json_data('city', country_id);
  }
  else
  {
   $('#city').html('<option value="">Select city</option>');
   $('#district').html('<option value="">Select district</option>');
  }
 });
 $(document).on('change', '#city', function(){
  var city_id = $(this).val();
  if(city_id != '')
  {
   load_json_data('district', city_id);
  }
  else
  {
   $('#district').html('<option value="">Select district</option>');
  }
 });
});
