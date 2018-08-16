webpackJsonp([5],{215:function(e,t,r){"use strict";function a(e){r(289)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(255),o=r(277),l=r(27),s=a,n=l(i.a,o.a,!1,s,"data-v-4f7402aa",null);t.default=n.exports},255:function(e,t,r){"use strict";t.a={data:function(){return{temp:{company:"",email:"",chainid:"",networkid:"",rpcport:"",eth_url:"",datadir:"",remark:""},dialogFormVisible:!1,rules:{company:[{required:!0,message:"company is required",trigger:"blur"}],email:[{required:!0,message:"email is required",trigger:"blur"}],chainid:[{required:!0,message:"chainid is required",trigger:"blur"}],networkid:[{required:!0,message:"networkid is required",trigger:"blur"}],rpcport:[{required:!0,message:"rpcport is required",trigger:"blur"}],coinbase:[{required:!0,message:"coinbase is required",trigger:"blur"}],rpccorsdomain:[{required:!0,message:"rpccorsdomain is required",trigger:"blur"}],datadir:[{required:!0,message:"datadir is required",trigger:"blur"}],remark:[{required:!0,message:"remark is required",trigger:"blur"}]}}},methods:{resetTemp:function(){this.temp={company:"",email:"",chainid:"",networkid:"",rpcport:"",datadir:"",remark:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.axios.post("/api/v1",{source:"ccc",method:"setup",argv:{_company:e.temp.company,_email:e.temp.email,_chainid:e.temp.chainid,_networkid:e.temp.networkid,_datadir:e.temp.datadir,_rpcport:e.temp.rpcport,_eth_url:e.temp.eth_url,_remark:e.temp.remark}}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})}}}},265:function(e,t,r){t=e.exports=r(18)(void 0),t.push([e.i,".el-row[data-v-4f7402aa]{margin-bottom:20px;margin-top:100px}.el-col[data-v-4f7402aa]{border-radius:4px}.bg-purple[data-v-4f7402aa]{background:#166bcc}.grid-content[data-v-4f7402aa]{border-radius:4px;min-height:80px}",""])},277:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12,offset:6}},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleCreate}},[e._v("创建联盟")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"创建联盟",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"成员名称",prop:"company"}},[r("el-input",{model:{value:e.temp.company,callback:function(t){e.$set(e.temp,"company",t)},expression:"temp.company"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.temp.email,callback:function(t){e.$set(e.temp,"email",t)},expression:"temp.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"ChainID",prop:"chainid"}},[r("el-input",{model:{value:e.temp.chainid,callback:function(t){e.$set(e.temp,"chainid",t)},expression:"temp.chainid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"联盟网络ID",prop:"networkid"}},[r("el-input",{model:{value:e.temp.networkid,callback:function(t){e.$set(e.temp,"networkid",t)},expression:"temp.networkid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"RPC端口",prop:"rpcport"}},[r("el-input",{model:{value:e.temp.rpcport,callback:function(t){e.$set(e.temp,"rpcport",t)},expression:"temp.rpcport"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"本地节点url",prop:"eth_url"}},[r("el-input",{model:{value:e.temp.eth_url,callback:function(t){e.$set(e.temp,"eth_url",t)},expression:"temp.eth_url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"区块数据存储路径",prop:"datadir"}},[r("el-input",{model:{value:e.temp.datadir,callback:function(t){e.$set(e.temp,"datadir",t)},expression:"temp.datadir"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("确认")])],1)],1)],1)},i=[],o={render:a,staticRenderFns:i};t.a=o},289:function(e,t,r){var a=r(265);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(28)("0545011a",a,!0,{})}});
//# sourceMappingURL=5.js.map?a54e10438f883fdb9ce6