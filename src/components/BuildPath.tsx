import type { BuildGuide, GameClass } from '../domain/models';
import { classes } from '../data/classes';
import { visibleClassName } from '../utils/build';
import { splitBuildPaths } from '../utils/strategy';
export function BuildPath({ guide, unlockedClasses = [] }: { guide: BuildGuide; unlockedClasses?: GameClass[] }) {
  const { recommended } = splitBuildPaths(guide);
  const index = Object.fromEntries([...classes, ...unlockedClasses].map(item => [item.id, item]));
  const path = recommended.flatMap((choice, choiceIndex) => [
    ...(choiceIndex ? ['；'] : []),
    ...(choice.condition ? [`${choice.condition}：`] : []),
    ...choice.stages.flatMap((stage, stageIndex) => [
      ...(stageIndex ? [' → '] : []),
      ...stage.parts.map((part, partIndex) => 'text' in part ? part.text :
        (index[part.classId]?.spoiler && !unlockedClasses.some(item => item.id === part.classId)) || !index[part.classId] ? <span key={`${choiceIndex}-${stageIndex}-${partIndex}`}>{visibleClassName(part.classId, unlockedClasses)}</span> :
        <a key={`${choiceIndex}-${stageIndex}-${partIndex}`} href={`#/classes/${encodeURIComponent(part.classId)}`}>{visibleClassName(part.classId, unlockedClasses)}</a>),
    ]),
  ]);
  return <div className="class-guide-box"><div className="build-heading"><span>{guide.confidence === 'experimental' ? '本路线方案 · 实验' : '推荐职业'}</span><span className="class-tag">{guide.tag}</span></div><div className="class-path">{path}</div>{guide.goal && <p className="build-goal">培养目标：{guide.goal}</p>}</div>;
}
