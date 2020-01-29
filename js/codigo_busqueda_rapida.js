$(function(){
	$('#tblTable').searchable({
		striped:true,
		oddRow:{'background-color':'gray'},
		evenRow:{'background-color':'white'},
		searchType:'fuzzy'

	});
});