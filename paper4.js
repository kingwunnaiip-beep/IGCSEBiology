(() => {
 'use strict';
 const papers=window.paper4Papers||[],chapters=window.paper4Chapters||[],byId=id=>document.getElementById(id);
 const chooser=byId('theory-paper'),chapter=byId('theory-chapter'),questionRoot=byId('theory-question'),title=byId('theory-title'),nav=byId('theory-question-nav');
 const questionOwners=new Map(),partOwners=new Map();
 for(const source of papers)for(const q of source.questions){questionOwners.set(q,source);for(const part of q.parts)partOwners.set(part,source);}
 const allPapers={id:'all',questions:papers.flatMap(p=>p.questions),totalMarks:papers.reduce((sum,p)=>sum+p.totalMarks,0)};
 const storageKey='igcse0610-paper4-v1';let saved={},paper=null,index=0,scale=1;
 const sidePanel=byId('theory-side-panel'),showPanel=byId('theory-show-panel'),hidePanel=byId('theory-hide-panel');
 function panelVisibility(visible){
  sidePanel.hidden=!visible;
  sidePanel.closest('.theory-layout').classList.toggle('is-panel-hidden',!visible);
  byId('theory-show-panel-controls').hidden=visible;
  showPanel.setAttribute('aria-expanded',String(visible));
  hidePanel.setAttribute('aria-expanded',String(visible));
  (visible?hidePanel:showPanel).focus();
 }
 hidePanel.addEventListener('click',()=>panelVisibility(false));
 showPanel.addEventListener('click',()=>panelVisibility(true));

 try {const value=JSON.parse(localStorage.getItem(storageKey)||'{}');if(value&&typeof value==='object'&&!Array.isArray(value))saved=value;}
 catch (_) {byId('theory-save-status').textContent='Answers remain available during this visit; this browser could not read saved answers.';}
 function element(tag,text,className){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(className)e.className=className;return e;}
 function persist(){try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch(_){byId('theory-save-status').textContent='Answers remain available during this visit; this browser could not save them.';}}
 function object(value){return value&&typeof value==='object'&&!Array.isArray(value);}
 function state(part){
  const owner=partOwners.get(part);
  if(!object(saved[owner.id]))saved[owner.id]={};
  if(!object(saved[owner.id][part.id]))saved[owner.id][part.id]={};
  const s=saved[owner.id][part.id];
  if(typeof s.answer!=='string')s.answer='';
  if(!Number.isInteger(s.score)||s.score<0||s.score>part.marks)s.score=null;
  if(typeof s.revealed!=='boolean')s.revealed=false;
  s.choices=Array.isArray(s.choices)?s.choices.filter(v=>Number.isInteger(v)&&v>=0&&v<(part.options||[]).length):[];
  return s;
 }
 function indexes(){return paper.questions.reduce((list,q,i)=>{if(chapter.value==='all'||(q.chapterIds||[]).includes(Number(chapter.value)))list.push(i);return list;},[]);}
 function updateProgress(){
  const parts=paper.questions.flatMap(q=>q.parts).filter(p=>!p.withdrawn),marked=parts.filter(p=>state(p).score!==null),score=marked.reduce((sum,p)=>sum+state(p).score,0),assessed=marked.reduce((sum,p)=>sum+p.marks,0),scope=indexes();
  byId('theory-total').textContent=`${paper===allPapers?'All papers':'Whole paper'}: ${score} marks recorded · ${assessed} of ${paper.totalMarks} available marks assessed · ${marked.length} of ${parts.length} parts marked`;
  const current=paper.questions[index],owner=questionOwners.get(current);
  byId('theory-progress').textContent=`${paper===allPapers?owner.code+' · ':''}Question ${current.number} · ${scope.indexOf(index)+1} of ${scope.length} ${chapter.value==='all'?'questions':'in this chapter'} · ${paper.totalMarks} marks ${paper===allPapers?'across all papers':'in the whole paper'}`;
  const buttons=[];let previousOwner=null;
  for(const i of scope){
   const q=paper.questions[i],source=questionOwners.get(q);
   if(paper===allPapers&&source!==previousOwner){buttons.push(element('p',source.code,'theory-nav-paper'));previousOwner=source;}
   const b=element('button',String(q.number));b.type='button';b.setAttribute('aria-label',`${paper===allPapers?source.code+' · ':''}Question ${q.number}`);
   if(i===index)b.setAttribute('aria-current','step');if(q.parts.filter(p=>!p.withdrawn).every(p=>state(p).score!==null))b.classList.add('is-marked');b.addEventListener('click',()=>go(i));buttons.push(b);
  }
  nav.replaceChildren(...buttons);
  const position=scope.indexOf(index);byId('theory-previous').disabled=position===0;byId('theory-next').textContent=position===scope.length-1?'Back to first question':'Next question';
 }
 function sourceFigure(image){const f=element('figure',undefined,'theory-original'),a=element('a'),img=element('img');a.href=image.src;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label',`Open ${image.label||'figure'} at full size`);img.src=image.src;img.alt=image.alt;img.loading='lazy';a.append(img);f.append(a,element('figcaption',image.caption||'Original question figure. Open image for full size.'));return f;}
 function appendImages(parent,images){for(const image of images||[]){if(image.collapsed){const details=element('details');details.append(element('summary','View '+(image.label||'original figure')),sourceFigure(image));parent.append(details);}else parent.append(sourceFigure(image));}}
 function render(){
  const q=paper.questions[index],sourcePaper=questionOwners.get(q);renderPaperDetails(sourcePaper);title.textContent=`Question ${q.number}${q.title?' — '+q.title:''}`;questionRoot.replaceChildren();
  if(q.context)questionRoot.append(element('p',q.context));appendImages(questionRoot,q.images);
  for(const part of q.parts){
   const section=element('section',undefined,'theory-part'),heading=element('h3',part.withdrawn?`${part.label} [withdrawn · printed ${part.printedMarks} marks]`:`${part.label} [${part.marks} ${part.marks===1?'mark':'marks'}]`);
   section.dataset.part=part.id;section.append(heading,element('p',part.prompt));appendImages(section,part.images);
   if(part.withdrawn){
    section.classList.add('theory-withdrawn');
    const notice=element('p','This part was withdrawn in the official mark scheme. It is shown for reference and excluded from self-marking.','theory-withdrawal');notice.setAttribute('role','note');section.insertBefore(notice,heading.nextSibling);
    const link=element('a',`Official withdrawal notice · mark scheme page ${part.markSchemePage}`);link.href=sourcePaper.markSchemeUrl+'#page='+part.markSchemePage;link.target='_blank';link.rel='noopener';section.append(link,element('p',`${sourcePaper.code} · Question paper page ${part.sourcePage}`,'theory-source-note'));questionRoot.append(section);continue;
   }
   const s=state(part);
   const input=element('textarea',undefined,'theory-answer'),inputId='answer-'+part.id.replace(/[^\w-]/g,'-');input.id=inputId;input.value=s.answer;input.placeholder='Write your answer, working and units here.';
   let score;
   function changed(){s.score=null;if(score)score.value='';persist();updateProgress();}
   if(part.options){const choices=element('div',undefined,'theory-choices');choices.setAttribute('role','group');choices.setAttribute('aria-label',`Statements for ${part.label}`);part.options.forEach((option,i)=>{const label=element('label',undefined,'theory-choice'),checkbox=element('input');checkbox.type='checkbox';checkbox.value=String(i);checkbox.checked=s.choices.includes(i);checkbox.addEventListener('change',()=>{s.choices=[...choices.querySelectorAll('input:checked')].map(c=>Number(c.value));changed();});label.append(checkbox,element('span',option));choices.append(label);});section.append(choices);}
   const label=element('label',part.options?'Your working or notes':'Your answer');label.htmlFor=inputId;section.append(label,input);input.addEventListener('input',()=>{s.answer=input.value;changed();});
   const toggle=element('button'),marking=element('div',undefined,'theory-marking'),markId='mark-'+part.id.replace(/[^\w-]/g,'-');toggle.type='button';toggle.className='theory-reveal';marking.id=markId;marking.setAttribute('role','region');marking.setAttribute('aria-label',`Mark scheme for ${part.label}`);toggle.setAttribute('aria-controls',markId);
   marking.append(element('h4','Mark scheme'));const points=element('ul');for(const point of part.markScheme)points.append(element('li',point));marking.append(points);
   if(part.guidance){marking.append(element('h4','How to approach it'));for(const step of part.guidance)marking.append(element('p',step));}appendImages(marking,part.markSchemeImages);
   const source=element('a',`Official mark scheme · page ${part.markSchemePage}`);source.href=sourcePaper.markSchemeUrl+'#page='+part.markSchemePage;source.target='_blank';source.rel='noopener';marking.append(source);
   score=element('select',undefined,'theory-score');const scoreId='score-'+part.id.replace(/[^\w-]/g,'-'),scoreLabel=element('label','Your mark');score.id=scoreId;scoreLabel.htmlFor=scoreId;const unset=element('option','Not marked');unset.value='';score.append(unset);for(let m=0;m<=part.marks;m++){const option=element('option',`${m} / ${part.marks}`);option.value=String(m);score.append(option);}score.value=s.score===null?'':String(s.score);score.addEventListener('change',()=>{s.score=score.value===''?null:Number(score.value);persist();updateProgress();});marking.append(scoreLabel,score);
   function sync(){marking.hidden=!s.revealed;toggle.textContent=s.revealed?'Hide mark scheme':'Reveal mark scheme';toggle.setAttribute('aria-expanded',String(s.revealed));}toggle.addEventListener('click',()=>{s.revealed=!s.revealed;persist();sync();});sync();
   section.append(toggle,marking,element('p',`${sourcePaper.code} · Question paper page ${part.sourcePage}`,'theory-source-note'));questionRoot.append(section);
  }
  byId('theory-navigation').hidden=false;updateProgress();
 }
 function go(i){index=i;render();title.focus();}
 function renderChapters(){chapter.replaceChildren();const all=element('option',`All chapters (${paper.questions.length} questions)`);all.value='all';chapter.append(all);for(const c of chapters){const count=paper.questions.filter(q=>(q.chapterIds||[]).includes(c.id)).length,option=element('option',`${c.id}. ${c.title} (${count})`);option.value=String(c.id);option.disabled=count===0;chapter.append(option);}chapter.value='all';}
 function renderPaperDetails(source){
  byId('theory-paper-detail').textContent=(paper===allPapers?`All past papers · ${papers.length} papers · ${paper.totalMarks} marks total\nCurrent paper: `:'')+`${source.code} · ${source.session} · ${source.minutes} minutes · ${source.totalMarks} ${source.printedTotalMarks?'assessable marks':'marks'}`+(source.assessmentNote?'\n'+source.assessmentNote:'');
  const links=byId('theory-links');links.replaceChildren();for(const [name,url] of [['Question paper',source.questionPaperUrl],['Official mark scheme',source.markSchemeUrl]]){const a=element('a',name);a.href=url;a.target='_blank';a.rel='noopener';links.append(a);}
 }
 function selectPaper(id){paper=id==='all'?allPapers:papers.find(p=>p.id===id);if(!paper||!paper.questions.length)return;index=0;renderChapters();render();}

 for(const p of papers){const parts=p.questions.flatMap(q=>q.parts);if(!p.questions.length||parts.reduce((sum,part)=>sum+part.marks,0)!==p.totalMarks||new Set(parts.map(part=>part.id)).size!==parts.length)throw new Error('Paper mark totals or part identifiers do not match.');}
 if(papers.length){chooser.replaceChildren();const option=element('option','All past papers');option.value='all';chooser.append(option);}
 for(const p of papers){const option=element('option',`${p.code} · ${p.session}`);option.value=p.id;chooser.append(option);}
 chooser.addEventListener('change',()=>selectPaper(chooser.value));chapter.addEventListener('change',()=>{const scope=indexes();if(!scope.includes(index))index=scope[0];render();});
 byId('theory-previous').addEventListener('click',()=>{const scope=indexes();go(scope[Math.max(0,scope.indexOf(index)-1)]);});byId('theory-next').addEventListener('click',()=>{const scope=indexes();go(scope[(scope.indexOf(index)+1)%scope.length]);});
 function textSize(value){scale=Math.max(.75,Math.min(2,Math.round(value*100)/100));document.documentElement.style.setProperty('--theory-scale',scale);byId('theory-size').textContent=Math.round(scale*100)+'%';byId('theory-decrease').disabled=scale<=.75;byId('theory-increase').disabled=scale>=2;}
 byId('theory-decrease').addEventListener('click',()=>textSize(scale-.1));byId('theory-increase').addEventListener('click',()=>textSize(scale+.1));byId('theory-reset-size').addEventListener('click',()=>textSize(1));textSize(1);
 if(papers.length){chooser.value=papers[0].id;selectPaper(chooser.value);}else{chooser.disabled=true;byId('theory-paper-detail').textContent='Choose a paper to begin written-answer practice.';}
})();
