	get_timetable();
	function get_timetable() {
		var ele = $('#timetable');
		var thead = '<thead style="background:#ede4e4"><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th></thead>'
		ele.append(thead);
		var tbody = $('<tbody>');
		var subjects = ['Mathemtaics','Science','History','Economics','Physics'];
		var teachers = ['Mrs. Sunitha Menon','Mr. Arun Kumar' , 'Miss Aishma rani'];		
		for(j = 0;j< 5 ; j++)
		{
			var tr = $('<tr>');
			var colors = ['#712e5f','#2b742b','#2f2f8a'];
			for(i = 0;i< 5 ; i++)
			{
				
				var td = $('<td>');
				var card = $('<div class="card">');
				var card_body = $('<div class="card-body">');
				var content = {};
				content['label'] = subjects[Math.floor(Math.random()*subjects.length)];
				content['time'] = '9:00 - 10:00';
				content['teacher'] = teachers[Math.floor(Math.random()*teachers.length)];
				content['type'] = 'Theory';
				card_body.append('<div>'+content['label']+'</div>');
				card_body.append('<div>'+content['time']+'</div>');
				card_body.append('<div>'+content['teacher']+'</div>');
				card_body.append('<div>'+content['type']+'</div>');
				card.append(card_body);
				td.append(card);
				var color = colors[Math.floor(Math.random()*colors.length)];
				card.css('background',color);
				tr.append(td);
				
			}
			tbody.append(tr);
		}
		ele.append(tbody);

	}

  


