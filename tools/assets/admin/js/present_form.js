/*
 * キャンペーン登録画面JS
 */
$(function() {

	$(document).ready(function() {
		
		$('#button-delete').on('click', function(e) {
			if (confirm('削除します。よろしいですか？')) {
				$('#form-delete').submit();
			}
		});
		
	});
});
