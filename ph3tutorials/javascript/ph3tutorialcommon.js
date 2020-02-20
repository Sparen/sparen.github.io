function setupENG(lastupd){
  var newfooter = '';
  if (lastupd !== "") {
    newfooter += '<p style="text-align: center;">Last Update to Page: ' + lastupd + '</p>';
  }
  newfooter += '<p style="text-align: center;"><a href="#top">Top</a></p>' + 
    '<p style="text-align: center;">Copyright © 2014-2019 by Andrew Fan</p>' + 
    '<p style="text-align: center;"><span style="font-weight: bold;">Other Sites/Affiliates</span></p>' + 
    '<div style="text-align: center;">' + 
    '<a target="_blank" href="http://www.bulletforge.org"><img alt="&quot;Bulletforge&quot;" src="../images/afflogobulletforge.png"></a>' + 
    '</div>';
  document.getElementById("footer").innerHTML = newfooter;
}

function setupESP(lastupd){
  var newfooter = '';
  if (lastupd !== "") {
    newfooter += '<p style="text-align: center;">Última actualización de la página: ' + lastupd + '</p>';
  }
  newfooter += '<p style="text-align: center;"><a href="#top">Top</a></p>' + 
    '<p style="text-align: center;">Copyright © 2014-2019 por Andrew Fan</p>' + 
    '<p style="text-align: center;">Esta página fue traducido por Paty y Andrew Fan.</p>' +
    '<p style="text-align: center;"><span style="font-weight: bold;">Otros Sitios/Afiliados</span></p>' + 
    '<div style="text-align: center;">' + 
    '<a target="_blank" href="http://www.bulletforge.org"><img alt="&quot;Bulletforge&quot;" src="../images/afflogobulletforge.png"></a>' + 
    '</div>';
  document.getElementById("footer").innerHTML = newfooter;
}