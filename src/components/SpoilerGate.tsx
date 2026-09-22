import { useRef, useState } from 'react';
import type { SpoilerData } from '../domain/models';
import { readStored, writeStored } from '../utils/storage';
function CheckLine({ storageKey, text }: { storageKey: string; text: string }) {
  const [initial] = useState(() => readStored(storageKey, `fw-planner:${storageKey}`));
  const [checked, setChecked] = useState(initial.value === '1');
  const [error, setError] = useState(initial.error);
  return <><label className="checkline"><input type="checkbox" checked={checked} onChange={e => { setChecked(e.target.checked); setError(writeStored(storageKey, e.target.checked ? '1' : '0')); }} /><span>{text}</span></label>{error && <p role="alert">{error}</p>}</>;
}
export function SpoilerGate({ data, loading, error, unlock, lock }: { data: SpoilerData | null; loading: boolean; error?: string; unlock: () => Promise<void>; lock: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <section id="part3"><div className="section-title"><div><div className="eyebrow">SPOILER LOCK</div><h2>后期全角色防漏区</h2></div><p>后期人物、加入条件、Guest生存条件和相关章节结构默认隐藏。</p></div>
    {!data ? <div className="spoiler-lock"><div className="lock-icon">🔒</div><h3>这里包含结构性剧透</h3><p>解锁后会显示后期可用角色姓名、前置任务、加入条件与章节结构。若你仍在 Part I，建议保持锁定。</p><button type="button" className="spoiler-btn primary" disabled={loading} onClick={() => dialog.current?.showModal()}>{loading ? '正在加载…' : '查看后期信息'}</button><div className="visible-safe-note">无剧透提醒：Part I 尽量完成遇到的所有 Paralogue / 特殊支线。</div></div> : <div className="spoiler-content revealed">
      <div className="spoiler-head"><h3>Part II / III 防漏信息</h3><button type="button" className="spoiler-btn" onClick={lock}>重新隐藏剧透</button></div><div className="checklist">
        <div className="check-panel"><h3>Part I 前置</h3>{data.pre.map((text, i) => <CheckLine key={i} storageKey={`pre-sp-${i}`} text={text} />)}</div>
        <div className="check-panel"><h3>Part II 特殊条件</h3>{data.p2.map((text, i) => <CheckLine key={i} storageKey={`p2-sp-${i}`} text={text} />)}</div>
        <div className="check-panel"><h3>Part II / III 追加可用角色</h3><div className="spoiler-character-grid">{data.details.map(detail => { const c = data.characters.find(c => c.id === detail.characterId)!; return <div key={c.id} className="spoiler-char"><b>{c.nameZh ? `${c.nameZh}（${c.nameEn}）` : c.nameEn}</b><span>{detail.condition}<br />{detail.role}</span></div>; })}</div></div>
      </div></div>}
    {error && <p role="alert">{error}</p>}
    <dialog className="spoiler-dialog" ref={dialog} aria-labelledby="spoiler-title" aria-describedby="spoiler-warning"><div className="dialog-body"><div className="eyebrow">确认显示剧透</div><h3 id="spoiler-title">确定要查看后期角色与招募条件吗？</h3><p id="spoiler-warning">将显示后期可用角色、前置任务、加入条件等结构性剧透。仅在本次打开网页期间显示；刷新后重新锁定。</p><div className="dialog-actions"><button autoFocus type="button" className="spoiler-btn" onClick={() => dialog.current?.close()}>继续隐藏</button><button type="button" className="spoiler-btn primary" onClick={() => { dialog.current?.close(); void unlock(); }}>确认显示</button></div></div></dialog>
  </section>;
}
