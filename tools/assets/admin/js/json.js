$(function(){
	// Ajax 通信の実行
	$.ajax({

		type: 		'POST',
		url: 		'./json/json_viwe',
		dataType: 	'json',

	}).fail(function(){

		alert('ereer');

	}).done(function(data){

		var tbody = document.getElementById('list');


		for(var i = 0; i < data.length; i++){

			if(data[i]['publish_end_date'] == null){
				data[i]['publish_end_date'] = "";
			}

			if(data[i]['item_category_id'] == "1"){
				data[i]['item_category_id'] = "1:食べ物";
			} else if(data[i]['item_category_id'] == "2"){
				data[i]['item_category_id'] = "2:季節もの";
			} else {
				data[i]['item_category_id'] = "3:ヤンキー";
			}

			//trエレメントを新規作成
			var tr = document.createElement('tr');

			tr.innerHTML ='<td>'
				+ data[i]['id'] + '</td><td>'
				+ data[i]['publish_start_date'] + '</td><td>'
				+ data[i]['publish_end_date'] + '</td><td>'
				+ data[i]['item_category_id'] + '</td><td>'
				+ data[i]['item_name'] + '</td><td>'
				+ data[i]['item_details'] + '</td><td>'
				+ data[i]['item_expire_seconds'] + '秒</td><td>'
				+ data[i]['item_point_up_rate'] + '%</td><td>'
				+ '<img src="/assets/admin/img/photo/' + data[i]['photo_saved_as'] + '" width="85" height="85"></td><td>'
				+ data[i]['upd_date'] + '</td>';

			//trエレメントをtbody内に追加
			tbody.appendChild(tr);


		}
	})

});