/*
* Zola Web group js standard library
*Author: zolawebgroup
*Created date: 12/1/2019 9:46 PM
*/

//Format date
function zl_get_vi_date_format(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
};
//Convert string to date
function zl_convert_vi_to_date(str_date) {
    str_date = str_date.split("/");
    return new Date(str_date[2], str_date[1] - 1, str_date[0]);
}
