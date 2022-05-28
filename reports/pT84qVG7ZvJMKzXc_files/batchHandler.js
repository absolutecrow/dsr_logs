(window.webpackJsonppageos=window.webpackJsonppageos||[]).push([[0],{X5Dm:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return a});var t=i("lwsE"),s=i.n(t),t=i("W8MJ"),n=i.n(t),r=i("YfMo"),a=function(){function t(e){s()(this,t),this.hasStorage=!!window.PageOS.environment&&window.PageOS.environment.hasLocalStorage,this._REGION="us-east-1",this._API_VERSION="2013-12-02",this._creds=e,this.lastBatchSent=Date.now(),this.queue=[],this.batchTimer=null,this.BATCH_SIZE=10,this.BATCH_INTERVAL=5e3,this.maxRetryAttempts=3,this.hasStorage&&localStorage.getItem("PageOS_Kinesis")&&(this.queue=JSON.parse(localStorage.getItem("PageOS_Kinesis"))),this.init()}return n()(t,[{key:"addToQueue",value:function(e){var t,i=e.records,s=e.streamName,n=e.sampling;this._credsHaveExpired||(i=Array.isArray(i)?i:[i],t=[],i.forEach(function(e){!1!==n&&!1!==e.Sampling||t.push({Data:e.Data,PartitionKey:e.PartitionKey})}),0<t.length&&(this.queue.push({records:t,streamName:s}),this.hasStorage&&localStorage.setItem("PageOS_Kinesis",JSON.stringify(this.queue)),this.isBatchReady()))}},{key:"clearTimer",value:function(){clearTimeout(this.batchTimer),this.batchTimer=null}},{key:"configureAwsKinesis",value:function(){try{window.AWS.config.credentials=new window.AWS.Credentials(this._creds.AccessKeyId,this._creds.SecretAccessKey,this._creds.SessionToken),window.AWS.config.region=this._REGION,this._awsKinesis=new window.AWS.Kinesis({apiVersion:this._API_VERSION}),this._credsExpiration=new Date(window.pwKinesisCreds.Expiration),r.d.info("SUCCESS Kinesis configured")}catch(e){return void r.d.warn("Disabled due to lack of credentials error 😤",e)}}},{key:"getQueueCount",value:function(){var t=0;return this.queue.forEach(function(e){t+=e.records.length}),t}},{key:"init",value:function(){var e=this,t=(r.d.info("Browser file compression: ".concat(window._pwUserContentEncoding||"none")),document.createElement("script")),i="https://cdn.intergient.com/pageos/js/libs/aws-sdk-kinesis.min.js";void 0!==window._pwUserContentEncoding&&("gzip"===window._pwUserContentEncoding?i="".concat(i,".gz"):"br"===window._pwUserContentEncoding&&(i="".concat(i,".br"))),t.src=i,document.head.appendChild(t),t.onload=function(){e.configureAwsKinesis()}}},{key:"isBatchReady",value:function(){var e=this;if(!this.queue.length)return!1;this.getQueueCount()>=this.BATCH_SIZE||Date.now()-this.lastBatchSent>this.BATCH_INTERVAL?(this.clearTimer(),this.sendToKinesis()):this.batchTimer||(this.batchTimer=setTimeout(function(){e.sendToKinesis()},this.BATCH_INTERVAL))}},{key:"sendToKinesis",value:function(){if(this._awsKinesis&&0!==this.queue.length&&!this._credsHaveExpired){var e,t={};if(Date.now()>=this._credsExpiration)return this._credsHaveExpired=!0,void r.d.error("Kinesis credentials expired.");for(;this.queue.length;){var i=this.queue.shift(),s=i.records,i=i.streamName;Array.isArray(t[i])?t[i]=t[i].concat(s):t[i]=s}for(e in this.hasStorage&&localStorage.setItem("PageOS_Kinesis",JSON.stringify(this.queue)),t)t[e].length&&this.putRecords(t[e],e);this.lastBatchSent=Date.now()}}},{key:"putRecords",value:function(t,i){var s=this,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;this._awsKinesis.putRecords({Records:t,StreamName:i},function(e){e&&(r.d.warn("Kinesis Send Error",{err:e,pipeline:i,data:t,retryAttempt:n}),n<s.maxRetryAttempts?s.putRecords(t,i,++n):r.d.error("Kinesis Max Retry Attempts met"))})}}]),t}()}}]);