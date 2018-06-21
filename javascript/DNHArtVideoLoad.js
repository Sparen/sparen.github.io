function runDNHArtLoad() {
    videoload("table_dnhart", DNHArtobj);
    //DNHLP, DNHFart go here
}

function videoload(domid, objid) {
    var toreturn = "<tr><th>ID</th><th>Video</th><th>Scripter</th><th>Script Name</th><th>Danmakufu Video Database</th></tr>";
    var vidlist = objid.videos;
    var i = 0;
    for (i = 0; i < vidlist.length; i += 1) {
        var vid = vidlist[i];
        toreturn += "<tr>";
        toreturn += "<td>DNHArt - " + vid.id + "</td>";
        toreturn += "<td><a target='_blank' href='https://www.youtube.com/watch?v=" + vid.ytid + "'><img src='https://img.youtube.com/vi/" + vid.ytid + "/2.jpg'></a></td>";
        toreturn += "<td>" + vid.scripter + "</td>";
        toreturn += "<td>" + vid.scriptname + "</td>";
        if (vid.dvdb !== "") {
            toreturn += "<td>" + '<a href="https://sparen.github.io/DanmakufuVideos/scripter/' + vid.dvdb + '">DNH Video Database</a></td>';
        } else {
            toreturn += "<td>This scripter is not in the DVDb</td>";
        }
        toreturn += "</tr>";
    }
    document.getElementById(domid).innerHTML = toreturn;
} 