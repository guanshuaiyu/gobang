window.onload = function(){
	var new1 = document.getElementById('new');
	new1.onmousedown = function(e){
		e.preventDefault();
	};
var row = 10,
	width =Math.floor((600-row)/row)+'px',
	height =Math.floor((600-row)/row)+'px',
	zhe = document.getElementById('zhezhao'),
	zhao = document.getElementById('zhezhao1'),
	b1 = document.getElementById('b1'),
	b2 = document.getElementById('b2'),
	div,shuxian,hengxian;
for (var i = 0; i < row; i++) {
	for (var j = 0; j < row; j++) {
		div = document.createElement('div');
		div.setAttribute('class','block');
		div.setAttribute('id',i+'_'+j);
		div.style.width = width;
		div.style.height = width;
		div.style.cursor= 'pointer';
		sence.appendChild(div);
	}
}
for (var i = 0; i < row; i++) {
	hengxian = document.createElement('div');
	hengxian.style.width='600px';
	hengxian.style.height='3px';
	hengxian.style.background = '#512E21';
	hengxian.style.position='absolute';
	hengxian.style.top=600/2/row+(600/row)*i+ 'px';
	sence.appendChild(hengxian);
}
for (var i = 0; i < row; i++) {
	shuxian = document.createElement('div');
	shuxian.style.width='3px';
	shuxian.style.height='600px';
	shuxian.style.background = '#512E21';
	shuxian.style.position='absolute';
	shuxian.style.left=600/2/row+(600/row)*i+ 'px';
	sence.appendChild(shuxian);
}

var block = document.getElementsByClassName('block'),
	kaiguan = true, dict1={},dict2={};
var panduan = function(id ,dic){
	var x = Number(id.split('_')[0]); 
	var y = Number(id.split('_')[1]); 
	var tx,ty,hang=1,shu=1,zuoxie=1,youxie=1;
	tx=x; ty=y;
	while(dic[tx + '_'+(ty+1)]){hang++;ty++;}
	tx=x; ty=y;
	while(dic[tx + '_'+(ty-1)]){hang++;ty--;}
	if(hang >= 5){return true;}

	tx=x; ty=y;
	while(dic[(tx+1) + '_'+ty]){shu++;tx++;}
	tx=x; ty=y;
	while(dic[(tx-1) + '_'+ty]){shu++;tx--;}
	if(shu >= 5){return true;}

	tx=x; ty=y;
	while(dic[(tx-1) + '_'+(ty+1)]){zuoxie++;ty++;tx--;}
	tx=x; ty=y;
	while(dic[(tx+1) + '_'+(ty-1)]){zuoxie++;ty--;tx++;}
	if(zuoxie >= 5){return true;}
	
	tx=x; ty=y;
	while(dic[(tx+1) + '_'+(ty+1)]){youxie++;ty++;tx++;}
	tx=x; ty=y;
	while(dic[(tx-1) + '_'+(ty-1)]){youxie++;ty--;tx--;}
	if(youxie >= 5){return true;}
};
for (var i = 0; i < block.length; i++) {
	block[i].onclick=function(){	
		if (this.hasAttribute('hasColor')) {return;};
		if(kaiguan){
			var index = this;
			this.style.backgroundImage= 'url("./image/hei.png")';
			this.style.backgroundSize= '100%';
			this.style.opacity= '1';
			this.style.webkitTransform='scale(0.8,0.8)';
			this.style.zIndex='12';
			kaiguan=false;
			dict1[this.getAttribute('id')]=true;
			if (!kaiguan) {
				new1.onclick = function(){
					index.style.background='#BB5E00';
					index.style.opacity= '0';
					index.style.webkitTransform='scale(1,1)';
					index.removeAttribute('hasColor');
					kaiguan = true;	
				}
			};
		var id =this.getAttribute('id');
			if(panduan(id,dict1)){
				zhe.style.display = 'block';
				zhe.style.zIndex = '100';
				b1.onclick = function(){window.location.reload();};
			}
		}else{
			var index1 = this;
			this.style.background = 'url("./image/bai.png")';
			this.style.backgroundSize= '100%';
			this.style.opacity= '1';
			this.style.webkitTransform='scale(0.8,0.8)';
			this.style.zIndex='12';
			kaiguan=true;
			dict2[this.getAttribute('id')]=true;
			if (kaiguan) {
				new1.onclick = function(){
					index1.style.background='#BB5E00';
					index1.style.opacity= '0';
					index1.style.webkitTransform='scale(1,1)';
					index1.removeAttribute('hasColor');
					kaiguan = false;
				}
			};
			if(panduan(id,dict2)){
				zhao.style.display = 'block';
				zhao.style.zIndex = '100';
				b2.onclick = function(){window.location.reload();};
			}
		}
		this.setAttribute('hasColor','true');
	};
}
























}
