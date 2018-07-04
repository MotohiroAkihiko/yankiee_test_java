/*
 * お知らせ登録画面JS
 */
$(function() {

	$(document).ready(function() {
		$('#button-delete').on('click', function(e) {
			if (confirm('削除します。よろしいですか？')) {
				$('#form-delete').submit();
			}
		});

		$('.index-button').on('click', function(e) {
			if (confirm('削除します。よろしいですか？')) {
				$('#form-delete').submit();
			} else {
				return false;
			}
		});
	});
});

