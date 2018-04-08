/**
 * Created by jiao on 2017/7/14.
 */

function showOnMain(tags) {
    console.log("showOnMain的传递参数为："+tags);
    // var mainDataGrid = $('#mainDataGrid');
    // var dataGridTagTemp = $('#mainTab').datagrid;

    //设置导航s
    changeTagTilte(mainTab,tags);

    if(tags === "userInfo"){
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src="components/crm/UserDataGrid.js";
        oHead.appendChild( oScript);

        //document.write("<script src='../crm/UserDataGrid.js'></script>");
        // alert("ttttt");
        //dataGridTagTemp = $('userDataGrid').datagrid;

       // $('#mainTab').datagrid("load",dataGridTagTemp);

        // alert("aaaa");
    }
    // if(tags == "roleInfo"){
    //     dataGrid = $('roleDataGrid').datagrid();
    //     /*$('#mainDataGrid').datagrid({
    //         url:"http://localhost:8080/global-fairy-cms-admin-web/crm/roleInfo/list",
    //         method:"get",
    //         singleSelect:true,
    //         columns: [[
    //             { title: '角色', field: 'rolename', width: 100 },
    //             { title: '权限', field: 'permission', width: 100 },
    //             { title: '权限编码', field: 'permissionCode', width: 35, align: 'center' }
    //         ]],
    //         fit:true,
    //         fitColumns:true
    //     });*/
    //  }
};


function changeTagTilte(tabId,title){

    var tab = $('#main-tabs').tabs('getTab',0);  // 取得第一个tab
    $('#main-tabs').tabs('update', {
        tab: tab,
        options: {
            title: title
        }
    });
};

//
// window.top["reload_Abnormal_Monitor"]=function(){
//     mainDataGrid.datagrid( "load");
// };
//
// function reloadTabGrid(title)
// {
//     if ($("#tabRegion" ).tabs('exists', title)) {
//         $( '#tabRegion').tabs('select' , title);
//         window.top.reload_Abnormal_Monitor.call();
//     }
// };
//
// parent.reloadTabGrid( "不正常航班监控" );


