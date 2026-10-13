#!/usr/bin/env node
import {pathToFileURL} from 'node:url';
const base='https://argusx.fun';
const topics=['liquidity','china','ai-infrastructure','energy'];
export function route(argv){const [command,...args]=argv;const params=new URLSearchParams();let id;
 for(const a of args){const eq=a.indexOf('=');if(eq<0){if(id)throw Error('Only one ID allowed');id=a;}else params.set(a.slice(0,eq),a.slice(eq+1));}
 if(!command||command==='help')return {help:true};
 const common=['lang','topic','type','kind','author','q','from','to','limit','offset'];
 const allowed={catalog:['lang','topic'],search:common,changes:[...common,'since'],metric:['lang','from','to','history','points'],content:['lang','section'],subscribe:['lang','topic'],feed:['lang','topic','type','kind','author','format']};
 if(!allowed[command])throw Error('Unknown command; run help');
 if([...params.keys()].some(k=>!allowed[command].includes(k)))throw Error('Unknown filter; no credentials or personal data accepted');

 if(command==='subscribe'){const topic=params.get('topic')??'all',lang=params.get('lang')??'zh';if(!['all',...topics].includes(topic)||!['en','zh'].includes(lang))throw Error('Invalid topic or language');return {url:base+(lang==='en'?'/en':'')+'/subscribe/?topic='+topic+'&source=skill',local:true,cadence:'Sunday 18:00 Asia/Shanghai; weekly digest, double opt-in; no daily email'};}
 if(command==='feed'){const format=params.get('format')??'rss';if(!['rss','atom'].includes(format))throw Error('format=rss|atom');params.delete('format');return {url:base+'/feeds/'+(format==='atom'?'atom':'research')+'.xml?'+params,local:true};}
 const paths={catalog:'/api/v1/catalog',search:'/api/v1/search',changes:'/api/v1/changes',metric:'/api/v1/metrics/',content:'/api/v1/content/'};
 if(!paths[command])throw Error('Unknown command; run help');if(['metric','content'].includes(command)&&!id)throw Error('ID required');if(!['metric','content'].includes(command)&&id)throw Error('Use key=value filters');
 return {url:base+paths[command]+(id?encodeURIComponent(id):'')+(params.size?'?'+params:'')};
}
export async function run(argv,fetcher=fetch){const r=route(argv);if(r.help)return {usage:['catalog [topic=china] [lang=en]','search [type=report|perspective|metric] [topic=...] [kind=daily|weekly] [author=Arthur Hayes] [q=...] [from=YYYY-MM-DD] [to=...] [limit=5] [offset=0]','metric ID [history=1] [points=100] [from=...] [to=...] [lang=en]','content ID [section=SECTION_ID] [lang=en]','changes since=YYYY-MM-DD [topic=...] [limit=5] [offset=0]','subscribe [topic=all] [lang=zh]','feed [topic=...] [kind=daily|weekly] [type=report|perspective] [author=...] [lang=en] [format=rss|atom]'],readOnly:true};
 if(r.local)return r;const response=await fetcher(r.url,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(15000),redirect:'error'});const text=await response.text();if(text.length>1000000)throw Error('Response exceeds safety limit');let value;try{value=JSON.parse(text);}catch{throw Error('Expected JSON from ARGUS');}if(!response.ok)throw Error(`ARGUS ${response.status}: ${value.error??'request failed'}`);return value;}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){try{console.log(JSON.stringify(await run(process.argv.slice(2)),null,2));}catch(e){console.error(e.message);process.exitCode=1;}}
