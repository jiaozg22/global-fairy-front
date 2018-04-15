/**
 * Created by jiao on 2017/6/10.
 */

$('#mainDataGrid').datagrid({
    loader:function(params,success,error){
        //跨域请求数据
        $.ajax({
            async:true,
            url:"http://localhost:8080/global-fairy-cms-admin-web/crm/userinfo/list",
            type:"get",
            crossDomain:"true",
            dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
            jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
            jsonpCallback: 'callback', //设置回调函数名
            data: {
                'total': '',

                'rows':[
                    {
                        'id':'1',
                        'username':'jiao',
                        'password':'123456',
                        'logcounts':'0',
                        'roleId':'0'
                    }
                ]
            },
            success:function (data) {
                var jsonData= JSON.stringify(data);
                var jsonObj =  JSON.parse(jsonData);

                var userInfoList=jsonObj.rows;

                for (var i = 0; i < userInfoList.length; i++) {
                    var uid = userInfoList[i].id;
                }
            },
            error:function (data) {
                console.log("失败");
            }
        });
    },
    // url:"http://localhost:8080/global-fairy-cms-admin-web/crm/userinfo/list",
    // method:"get",
    //showHeader:"true",
   // pagination:"true",
    //singleSelect:"true",
    // // jsonp:"true",
    // columns: [[
    //     // { title: '姓名', field: 'total', width: 100 },
    //     // { title: '密码', field: 'rows', width: 35, align: 'center' }
    //     { title: 'total', total: 'rows'}
    //
    // ]],
   // fit:"true",
    //fitColumns:"true"
});

function alertDd(resultData){
    var ddd = JSON.stringify(resultData);
    alert(ddd);
}

function callback(){

}

/*
 function newUser(){
    $('#dlg').dialog('open').dialog('setTitle','New User');
    $('#fm').form(clear);
    url="http://localhost:8080/global-fariy-cms-admin/crm/saveuser";
};*/
