$(function(){

	var setArea = $('#loadarea'),
	defaultNum = 5,
    loadNum = 5, // 読み込む個数
    loadTxt = '<img src="/assets/admin/img/gif-load.gif" alt="Now Loading..." width="30" height="30">Now Loading...', // Loading中の表示
    fadeSpeed = 500; // フェードスピード

	window.onload = function(){

		$.ajax({
	        url: './json/json_viwe',
	        dataType: 'json',
	        success : function(data) {
	          var dataLength = data.length,
	          loadItemLength = setArea.find('.loadItem').length;

	          if(!(dataLength == loadItemLength)){
	            if(loadItemLength == 0){
	              if(dataLength <= defaultNum){
	                for (var i=0; i<dataLength; i++) {
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
							+'<img class="lazyload" src="/assets/admin/img/gif-load.gif" data-src="/assets/admin/img/photo/' + data[i]['photo_saved_as'] + '" width="85" height="85"></td><td>'
							+ data[i]['upd_date'] + '</td>';

						//trエレメントをtbody内に追加
						tbody.appendChild(tr);
						$("img.lazyload").lazyload() ;
	                }
	              } else {
	                for (var i=0; i<defaultNum; i++) {
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
							+'<img class="lazyload" src="/assets/admin/img/gif-load.gif" data-src="/assets/admin/img/photo/' + data[i]['photo_saved_as'] + '" width="85" height="85"></td><td>'
							+ data[i]['upd_date'] + '</td>';
						//trエレメントをtbody内に追加
						tbody.appendChild(tr);
						$("img.lazyload").lazyload() ;

	                }
	              }
	            }
	          }else{
	            $('<p>アイテムが登録されてません。</p>').appendTo(setArea).css({opacity:'0'}).animate({opacity:'1'},fadeSpeed);
	          }
	        }, //success
	        complete : function(){
	          $('#nowLoading').each(function(){
	            $(this).remove();
	          });
	          return false;
	        } //complete
	      });
	}

    $(window).load(function(){
        var loadWinHeight = $(window).height(),loadDocHeight = $(document).height();
        if(loadWinHeight >= loadDocHeight){
            scrollLoad();
        }
    }).scroll(function(){
        scrollLoad();
    });

    loadFlg = true;

    function scrollLoad(){
        var winHeight = window.innerHeight ? window.innerHeight : $(window).height(),
        posBottom = $(document).height() - winHeight;
        if($(this).scrollTop() >= posBottom) {
            if(loadFlg){
                loadFlg = false;

                setArea.after('<div id="nowLoading">' + loadTxt + '</div>');

                $.ajax({
                	url: './json/json_viwe',
                    dataType: 'json',
                    success : function(data){
                        var dataLengh = data.length,
                        loadItemLength = $('.loadItem').length,
                        setAdj = (dataLengh)-(loadItemLength),
                        setBeg = (dataLengh)-(setAdj);
                        if(!(dataLengh == loadItemLength)){
                            if(loadItemLength > 0 && loadItemLength < dataLengh){
                                if(loadNum < setAdj){
                                    for (var i=0; i<loadNum; i++) {
                                        v = i+setBeg;
                                        var tbody = document.getElementById('list');

                    					if(data[v]['publish_end_date'] == null){
                    						data[v]['publish_end_date'] = "";
                    					}

                    					if(data[v]['item_category_id'] == "1"){
                    						data[v]['item_category_id'] = "1:食べ物";
                    					} else if(data[i]['item_category_id'] == "2"){
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
                    						+'<img class="lazyload" src="/assets/admin/img/gif-load.gif" data-src="/assets/admin/img/photo/' + data[v]['photo_saved_as'] + '" width="85" height="85"></td><td>'
                    						+ data[v]['upd_date'] + '</td>';

                    					//trエレメントをtbody内に追加
                    					tbody.appendChild(tr);
                    					$("img.lazyload").lazyload() ;
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
                    						+'<img class="lazyload" src="/assets/admin/img/gif-load.gif" data-src="/assets/admin/img/photo/' + data[v]['photo_saved_as'] + '" width="85" height="85"></td><td>'
                    						+ data[v]['upd_date'] + '</td>';

                    					//trエレメントをtbody内に追加
                    					tbody.appendChild(tr);
                    					$("img.lazyload").lazyload() ;
                                    }
                                }
                            } else if(loadItemLength == dataLengh){
                                return false;
                            }
                        } else {
                            return false;
                        }
                    },
                    complete : function(){
                        $('#nowLoading').each(function(){
                            $(this).remove();
                        });
                        setTimeout(function(){
                            loadFlg = true;
                        },500);
                        return false;
                    }
                });
                return false;
            }
        }
    }

});