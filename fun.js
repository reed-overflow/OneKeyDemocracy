
var data = dataCn;

function neg2Pos() {
    var text = $("#area1").val();
    data.forEach(word => {
        text = text.replace(new RegExp(word.neg, 'g'), word.pos);
    });
    $("#area2").val(text);
}

function pos2Neg() {
    var text = $("#area1").val();
    data.forEach(word => {
        text = text.replace(new RegExp(word.pos, 'g'), word.neg);
    });
    $("#area2").val(text);
}