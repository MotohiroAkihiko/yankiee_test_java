$(function(){

	var setArea = $('#loadarea'),
    loadNum = 5, // 読み込む個数
    loadTxt = 'Now Loading...', // Loading中の表示テキスト
    btnTxt = '追加読込', // ボタンテキスト
    fadeSpeed = 500; // フェードスピード

    setArea.after('<div id="btnMore" class="action button-blue middle">' + btnTxt + '</div>');
    var setMore = setArea.next('#btnMore');

    setMore.click(function(){

		// Ajax 通信の実行
		$.ajax({

			type: 		'POST',
			url: 		'./json/json_viwe',
			dataType: 	'json',

			}).fail(function(){

				alert('ereer');

			}).done(function(data){

				var dataLengh = data.length,
	            loadItemLength = $('.loadItem').length,
	            setAdj = (dataLengh)-(loadItemLength),
	            setBeg = (dataLengh)-(setAdj);

				if(!(dataLengh == loadItemLength)){
			        setArea.append('<div id="nowLoading">' + loadTxt + '</div>');
			        if(loadItemLength == 0){
			            if(dataLengh <= loadNum){
			                for (var i=0; i<dataLengh; i++) {
			                    var tbody = document.getElementById('list');

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
									tr.className = 'loadItem';

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
			                setMore.remove();
			            } else {
			                for (var i=0; i<loadNum; i++) {
			                    var tbody = document.getElementById('list');

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
									tr.className = 'loadItem';

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
			            }
			        } else if(loadItemLength > 0 && loadItemLength < dataLengh){
			            if(loadNum < setAdj){
			                for (var i=0; i<loadNum; i++) {
			                    v = i+setBeg;
			                    var tbody = document.getElementById('list');

								if(data[v]['publish_end_date'] == null){
									data[v]['publish_end_date'] = "";
								}

								if(data[v]['item_category_id'] == "1"){
									data[v]['item_category_id'] = "1:食べ物";
								} else if(data[v]['item_category_id'] == "2"){
									data[v]['item_category_id'] = "2:季節もの";
								} else {
									data[v]['item_category_id'] = "3:ヤンキー";
								}

								//trエレメントを新規作成
								var tr = document.createElement('tr');
									tr.className = 'loadItem';

								tr.innerHTML ='<td>'
									+ data[v]['id'] + '</td><td>'
									+ data[v]['publish_start_date'] + '</td><td>'
									+ data[v]['publish_end_date'] + '</td><td>'
									+ data[v]['item_category_id'] + '</td><td>'
									+ data[v]['item_name'] + '</td><td>'
									+ data[v]['item_details'] + '</td><td>'
									+ data[v]['item_expire_seconds'] + '秒</td><td>'
									+ data[v]['item_point_up_rate'] + '%</td><td>'
									+ '<img src="/assets/admin/img/photo/' + data[v]['photo_saved_as'] + '" width="85" height="85"></td><td>'
									+ data[v]['upd_date'] + '</td>';

								//trエレメントをtbody内に追加
								tbody.appendChild(tr);
			                }
			            } else if(loadNum >= setAdj){
			                for (var i=0; i<setAdj; i++) {
			                    v = i+setBeg;
			                   	var tbody = document.getElementById('list');

								if(data[v]['publish_end_date'] == null){
									data[v]['publish_end_date'] = "";
								}

								if(data[v]['item_category_id'] == "1"){
									data[v]['item_category_id'] = "1:食べ物";
								} else if(data[v]['item_category_id'] == "2"){
									data[v]['item_category_id'] = "2:季節もの";
								} else {
									data[v]['item_category_id'] = "3:ヤンキー";
								}

								//trエレメントを新規作成
								var tr = document.createElement('tr');
									tr.className = 'loadItem';

								tr.innerHTML ='<td>'
									+ data[v]['id'] + '</td><td>'
									+ data[v]['publish_start_date'] + '</td><td>'
									+ data[v]['publish_end_date'] + '</td><td>'
									+ data[v]['item_category_id'] + '</td><td>'
									+ data[v]['item_name'] + '</td><td>'
									+ data[v]['item_details'] + '</td><td>'
									+ data[v]['item_expire_seconds'] + '秒</td><td>'
									+ data[v]['item_point_up_rate'] + '%</td><td>'
									+ '<img src="/assets/admin/img/photo/' + data[v]['photo_saved_as'] + '" width="85" height="85"></td><td>'
									+ data[v]['upd_date'] + '</td>';

								//trエレメントをtbody内に追加
								tbody.appendChild(tr);

			                }
			                setMore.remove();
			            }
			        } else if(loadItemLength == dataLengh){
			            return false;
			        }
			    } else {
					return false;
				}
			}).always(function() {
				 $('#nowLoading').each(function(){
	                 $(this).remove();
	             });
             return false;
		});
	return false;
    });

});