/*
 * アイテム画面JS
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

		$('.csv_download').on('click', function(e) {
			if (confirm('CSVをダウンロードしますか？')) {
				$('#download').submit();
			} else {
				return false;
			}
		});

	});

});

$(function(){
	//画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
	  $('form').on('change', 'input[type="file"]', function(e) {
	    var file = this.files[0],
	        reader = new FileReader(),
	        $preview = $(".preview");
	        t = this;

	     // 画像ファイル以外の場合は何もしない
	    if(file.type.indexOf("image") < 0){
	      return false;
	    }

	    // ファイル読み込みが完了した際のイベント登録
	    reader.onload = (function(file) {
	      return function(e) {
	    	//既存のプレビューを削除
	        $preview.empty();
	        // .prevewの領域の中にロードした画像を表示するimageタグを追加
	        $preview.append($('<img>').attr({
	                  src: e.target.result,
	                  width: "85px",
	                   class: "preview",
	                  title: file.name
	              }));
	      };
	    })(file);

	    reader.readAsDataURL(file);
	  });
	});